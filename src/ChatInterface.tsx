import { useState, useRef, useEffect } from 'react';

export default function ChatInterface() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatContainerRef = useRef(null);

 const sendMessage = async () => {
  // Prevent sending if empty or already loading
  if (!input.trim() || loading) return;

  // Append user message
  const userMessage = { role: 'user', content: input };
  setMessages(prev => [...prev, userMessage]);

  // Clear input & show spinner
  setInput('');
  setLoading(true);

  try {
    // API call
    const response = await fetch('/api/recode-chats', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input }),
    });

    // Throw if non-200
    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    // Parse JSON
    const data = await response.json();

    // Append bot reply
    const botMessage = {
      role: 'bot',
      content: data.reply ?? '❌ No reply received.',
    };
    setMessages(prev => [...prev, botMessage]);

  } catch (err: any) {
    // On error, show message
    const errorMessage = {
      role: 'bot',
      content: `Sorry, something went wrong: ${err.message}`,
    };
    setMessages(prev => [...prev, errorMessage]);

  } finally {
    // Always hide spinner
    setLoading(false);
  }
};

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, loading]);

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <header className="bg-white shadow p-4 text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-gradient bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
          RECODE: ChatCBT
        </h2>
      </header>

      <main ref={chatContainerRef} className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} items-start`}
          >
            {msg.role === 'bot' && (
              <img
                src="/recode-avatar.png"
                alt="RECODE Avatar"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full mr-2"
              />
            )}
            <div
              className={`px-4 py-2 rounded-2xl text-sm max-w-[80%] md:max-w-md whitespace-pre-wrap ${
                msg.role === 'user'
                  ? 'bg-blue-100 text-right ml-auto'
                  : 'bg-gray-100 text-left'
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex items-center">
            <img src="/recode-avatar.png" alt="Loading..." className="w-8 h-8 rounded-full mr-2" />
            <span className="text-sm text-gray-400">Typing…</span>
          </div>
        )}
      </main>

      <footer className="p-4 bg-white border-t flex">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          className="flex-grow p-2 border border-gray-300 rounded-l-xl text-sm sm:text-base outline-none"
          placeholder="Ask something..."
        />
        <button
          onClick={sendMessage}
          className="px-4 py-2 bg-gradient-to-r from-pink-400 to-blue-400 text-white rounded-r-xl text-sm sm:text-base font-semibold"
        >
          Send
        </button>
      </footer>
    </div>
  );
}
