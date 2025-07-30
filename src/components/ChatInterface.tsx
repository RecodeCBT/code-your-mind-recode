import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft } from 'lucide-react';

export default function ChatInterface() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState('');
  const chatContainerRef = useRef(null);

  const starterOptions = [
    "I would like explore my Mind-Code",
    "Talk about depression", 
    "Talk about anxiety",
    "Talk about anger",
    "Talk about motivation"
  ];

  const sendMessage = async (messageText?: string) => {
    const textToSend = messageText || input;
    if (!textToSend.trim()) return;
    const userMessage = { role: 'user', content: textToSend };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    const response = await fetch('/api/recode-chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: textToSend }),
    });

    const data = await response.json();
    const botMessage = { role: 'bot', content: data.reply };
    setMessages((prev) => [...prev, botMessage]);
    setLoading(false);
  };

  const handleStarterClick = (starterText: string) => {
    sendMessage(starterText);
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
      <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 overflow-hidden">
        {/* Neural Network Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-indigo-500/10 animate-pulse"></div>
          <div className="neural-network absolute inset-0">
            {/* Neural network pattern */}
            <svg className="w-full h-full" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="neural" x="0" y="0" width="150" height="150" patternUnits="userSpaceOnUse">
                  <circle cx="25" cy="25" r="3" fill="currentColor" className="text-blue-400 animate-pulse" />
                  <circle cx="75" cy="75" r="3" fill="currentColor" className="text-purple-400 animate-pulse" />
                  <circle cx="125" cy="125" r="3" fill="currentColor" className="text-indigo-400 animate-pulse" />
                  <line x1="25" y1="25" x2="75" y2="75" stroke="currentColor" strokeWidth="1" className="text-blue-300/40" />
                  <line x1="75" y1="75" x2="125" y2="125" stroke="currentColor" strokeWidth="1" className="text-purple-300/40" />
                  <line x1="25" y1="125" x2="75" y2="75" stroke="currentColor" strokeWidth="1" className="text-indigo-300/40" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#neural)" />
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
          {/* Title and Subtitle */}
          <h1 className="text-3xl font-bold text-white mb-2 text-center">ReCODE ChatCBT</h1>
          <p className="text-white/80 text-center mb-6 text-sm leading-relaxed">A highly trained AI that can help you analyse your issues and autocode in real time.</p>
          
          {/* ChatCBT Logo - Made circular */}
          <div className="w-80 h-80 rounded-full overflow-hidden mb-6 border-4 border-white/30 shadow-2xl">
            <img 
              src="/lovable-uploads/00be3df8-615b-4d76-b3a9-28b01e9651d0.png" 
              alt="RECODE ChatCBT" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <h2 className="text-2xl font-bold mb-4 text-center text-white">🔒 Access Required</h2>
          <p className="mb-6 text-sm text-white/80 text-center">Please enter your access password to begin your CBT session.</p>
          
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleUnlock()}
            placeholder="Enter password"
            className="mb-4 p-3 border border-white/30 rounded-xl w-full text-center bg-white/10 text-white placeholder-white/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
          
          <button
            onClick={handleUnlock}
            className="w-full py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold hover:from-primary-foreground hover:to-secondary-foreground transition-all duration-300 shadow-lg"
          >
            Unlock ChatCBT
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-background via-muted/10 to-accent/5">
      {/* Header with larger ChatCBT logo and return button */}
      <header className="bg-white/80 backdrop-blur-sm shadow-lg border-b border-border/20 p-6 flex items-center justify-between">
        <Button
          variant="outline"
          size="sm"
          onClick={() => window.location.href = '/'}
          className="flex items-center gap-2 border-primary/20 hover:bg-primary/5"
        >
          <ArrowLeft className="h-4 w-4" />
          Main Site
        </Button>
        
        <div className="flex-1 flex justify-center">
          <img 
            src="/lovable-uploads/e2278887-0c55-4808-8067-a5a02dfe07e0.png" 
            alt="RECODE ChatCBT" 
            className="h-20 w-auto shadow-lg rounded-lg"
          />
        </div>
        
        <div className="w-20"></div> {/* Spacer for center alignment */}
      </header>

      {/* Starter buttons section */}
      {messages.length === 0 && (
        <div className="bg-white/50 backdrop-blur-sm border-b border-border/10 p-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-foreground mb-4 text-center">Get started with a topic that interests you:</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {starterOptions.map((option, idx) => (
                <Button
                  key={idx}
                  variant="outline"
                  size="sm"
                  onClick={() => handleStarterClick(option)}
                  className="bg-white/70 border-primary/20 hover:bg-primary/10 text-foreground transition-all duration-200 hover:scale-105"
                  disabled={loading}
                >
                  {option}
                </Button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Chat area with larger avatar */}
      <main ref={chatContainerRef} className="flex-1 overflow-y-auto p-6 space-y-8 max-w-4xl mx-auto w-full">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} items-start gap-4`}
          >
            {msg.role === 'bot' && (
              <div className="flex-shrink-0">
                <img
                  src="/lovable-uploads/eb1cd8b5-9347-43f1-8db3-ddec0ceaa326.png"
                  alt="ChatCBT Assistant"
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-primary/20 shadow-xl bg-white p-1"
                />
              </div>
            )}
            <div
              className={`px-6 py-4 rounded-2xl text-base max-w-[75%] whitespace-pre-wrap shadow-lg ${
                msg.role === 'user'
                  ? 'bg-gradient-to-r from-primary to-secondary text-primary-foreground ml-auto'
                  : 'bg-white/90 backdrop-blur-sm border border-border/20 text-foreground'
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0">
              <img 
                src="/lovable-uploads/eb1cd8b5-9347-43f1-8db3-ddec0ceaa326.png" 
                alt="Loading..." 
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-primary/20 shadow-xl bg-white p-1 animate-pulse" 
              />
            </div>
            <div className="bg-white/90 backdrop-blur-sm border border-border/20 px-6 py-4 rounded-2xl shadow-lg">
              <span className="text-muted-foreground flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
                Thinking...
              </span>
            </div>
          </div>
        )}
      </main>

      {/* Input area */}
      <footer className="p-6 bg-white/80 backdrop-blur-sm border-t border-border/20 max-w-4xl mx-auto w-full">
        <div className="flex gap-3 mb-4">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            className="flex-grow p-4 border border-border/30 rounded-xl text-base outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white/90 backdrop-blur-sm"
            placeholder="Share what's on your mind..."
            disabled={loading}
          />
          <button
            onClick={() => sendMessage()}
            disabled={loading}
            className="px-6 py-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-xl text-base font-semibold hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 shadow-lg disabled:opacity-50"
          >
            Send
          </button>
        </div>

        {/* Privacy disclaimer */}
        <div className="mb-4 p-4 bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 rounded-xl">
          <p className="text-sm text-blue-800 mb-2">
            <strong>Privacy & Data:</strong> Your chat details are never stored and are completely wiped when you exit this session.
          </p>
          <p className="text-sm text-blue-700">
            This service is powered by highly specialized pre-trained OpenAI software designed for cognitive behavioral therapy support.
          </p>
        </div>

        {/* Emergency disclaimer */}
        <div className="p-4 bg-orange-50/80 backdrop-blur-sm border border-orange-200/50 rounded-xl">
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