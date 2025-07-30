import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function ChatInterface() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState('');
  const chatContainerRef = useRef(null);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    const response = await fetch('/api/recode-chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input }),
    });

    const data = await response.json();
    const botMessage = { role: 'bot', content: data.reply };
    setMessages((prev) => [...prev, botMessage]);
    setLoading(false);
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleUnlock = () => {
    if (password === 'recode2025') {
      setUnlocked(true);
    } else {
      alert('Incorrect password.');
    }
  };

  if (!unlocked) {
    return (
      <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
        {/* Animated Circuit Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 via-pink-500/20 via-purple-500/20 to-blue-500/20 animate-pulse"></div>
          <div className="circuit-pattern absolute inset-0">
            {/* Circuit lines and nodes */}
            <svg className="w-full h-full" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <circle cx="10" cy="10" r="2" fill="currentColor" className="text-orange-400 animate-pulse" />
                  <circle cx="90" cy="90" r="2" fill="currentColor" className="text-purple-400 animate-pulse" />
                  <line x1="10" y1="10" x2="90" y2="10" stroke="currentColor" strokeWidth="1" className="text-pink-400/50" />
                  <line x1="10" y1="10" x2="10" y2="90" stroke="currentColor" strokeWidth="1" className="text-blue-400/50" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#circuit)" />
            </svg>
          </div>
        </div>

        {/* Return to main website button */}
        <div className="absolute top-4 left-4 z-10">
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.location.href = '/'}
            className="bg-white/10 border-white/20 text-white hover:bg-white/20"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Return to Main Site
          </Button>
        </div>

        <div className="relative z-10 flex flex-col items-center p-8 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-2xl max-w-md w-full mx-4">
          {/* ChatCBT Logo */}
          <img 
            src="/lovable-uploads/e2278887-0c55-4808-8067-a5a02dfe07e0.png" 
            alt="RECODE ChatCBT" 
            className="w-64 h-auto mb-6"
          />
          
          <h2 className="text-2xl font-bold mb-4 text-center text-white">🔒 Access Required</h2>
          <p className="mb-6 text-sm text-white/80 text-center">Please enter your access password to begin your CBT session.</p>
          
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="mb-4 p-3 border border-white/30 rounded-xl w-full text-center bg-white/10 text-white placeholder-white/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          
          <button
            onClick={handleUnlock}
            className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg"
          >
            Unlock ChatCBT
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header with ChatCBT logo and return button */}
      <header className="bg-white shadow p-4 flex items-center justify-between">
        <Button
          variant="outline"
          size="sm"
          onClick={() => window.location.href = '/'}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Main Site
        </Button>
        
        <div className="flex-1 flex justify-center">
          <img 
            src="/lovable-uploads/e2278887-0c55-4808-8067-a5a02dfe07e0.png" 
            alt="RECODE ChatCBT" 
            className="h-12 w-auto"
          />
        </div>
        
        <div className="w-20"></div> {/* Spacer for center alignment */}
      </header>

      {/* Chat area with larger avatar */}
      <main ref={chatContainerRef} className="flex-1 overflow-y-auto p-4 space-y-6 max-w-4xl mx-auto w-full">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} items-start gap-3`}
          >
            {msg.role === 'bot' && (
              <div className="flex-shrink-0">
                <img
                  src="/recode-avatar.png"
                  alt="RECODE Avatar"
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-purple-200 shadow-lg"
                />
              </div>
            )}
            <div
              className={`px-6 py-4 rounded-2xl text-base max-w-[70%] whitespace-pre-wrap shadow-sm ${
                msg.role === 'user'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white ml-auto'
                  : 'bg-white border border-gray-200 text-gray-800'
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0">
              <img 
                src="/recode-avatar.png" 
                alt="Loading..." 
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-purple-200 shadow-lg animate-pulse" 
              />
            </div>
            <div className="bg-white border border-gray-200 px-6 py-4 rounded-2xl shadow-sm">
              <span className="text-gray-500 flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
                Thinking...
              </span>
            </div>
          </div>
        )}
      </main>

      {/* Input area */}
      <footer className="p-4 bg-white border-t max-w-4xl mx-auto w-full">
        <div className="flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            className="flex-grow p-4 border border-gray-300 rounded-xl text-base outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
            placeholder="Share what's on your mind..."
          />
          <button
            onClick={sendMessage}
            className="px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl text-base font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg"
          >
            Send
          </button>
        </div>

        {/* Emergency disclaimer */}
        <div className="mt-4 p-4 bg-orange-50 border border-orange-200 rounded-xl">
          <p className="text-sm text-orange-800 mb-2">
            <strong>Important:</strong> This ChatCBT service is not a substitute for emergency mental health care or crisis intervention.
          </p>
          <p className="text-sm text-orange-700 mb-3">
            If you are thinking about hurting yourself, please get immediate help:
          </p>
          <a href="https://www.samaritans.org" target="_blank" rel="noopener noreferrer">
            <Button variant="destructive" size="sm" className="w-full sm:w-auto">
              Get Crisis Support - Samaritans
            </Button>
          </a>
        </div>
      </footer>
    </div>
  );
}
