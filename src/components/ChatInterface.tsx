import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft } from 'lucide-react';

// Extend window interface for reCAPTCHA v3
declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}


export default function ChatInterface() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  
  const navigateWithScrollToTop = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState('');
  const [captchaToken, setCaptchaToken] = useState('');
  const [captchaLoading, setCaptchaLoading] = useState(false);

  useEffect(() => {
    // Load reCAPTCHA v3 script
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js?render=6LdVApUrAAAAADmQAC2OMwzVFz3od7Nk08NyYZiB";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // Add CSS to hide reCAPTCHA badge
    const style = document.createElement('style');
    style.textContent = `
      .grecaptcha-badge {
        visibility: hidden !important;
      }
    `;
    document.head.appendChild(style);

    // Cleanup function
    return () => {
      const existingScript = document.querySelector('script[src*="recaptcha"]');
      if (existingScript) {
        existingScript.remove();
      }
      const existingStyle = document.querySelector('style');
      if (existingStyle) {
        existingStyle.remove();
      }
    };
  }, []);

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

  const handleUnlock = async () => {
    if (password !== 'recode2025') {
      alert('Incorrect password.');
      return;
    }

    setCaptchaLoading(true);
    console.log('Starting reCAPTCHA verification...');

    try {
      // Execute reCAPTCHA v3 verification
      if (window.grecaptcha) {
        window.grecaptcha.ready(async () => {
          try {
            console.log('reCAPTCHA ready, executing verification...');
            const token = await window.grecaptcha.execute('6LdVApUrAAAAADmQAC2OMwzVFz3od7Nk08NyYZiB', { action: 'login' });
            console.log('reCAPTCHA token received:', token ? 'SUCCESS' : 'FAILED');
            setCaptchaToken(token);
            setCaptchaLoading(false);
            setUnlocked(true);
          } catch (error) {
            console.error('reCAPTCHA execution error:', error);
            setCaptchaLoading(false);
            // For preview environments, allow bypass if reCAPTCHA fails
            if (window.location.hostname.includes('lovable') || window.location.hostname === 'localhost') {
              console.log('Preview environment detected, bypassing reCAPTCHA');
              setUnlocked(true);
            } else {
              alert('reCAPTCHA verification failed. Please try again.');
            }
          }
        });
      } else {
        console.error('reCAPTCHA not loaded');
        setCaptchaLoading(false);
        // For preview environments, allow bypass if reCAPTCHA not loaded
        if (window.location.hostname.includes('lovable') || window.location.hostname === 'localhost') {
          console.log('Preview environment detected, bypassing reCAPTCHA');
          setUnlocked(true);
        } else {
          alert('reCAPTCHA is not loaded yet. Please try again in a moment.');
        }
      }
    } catch (error) {
      console.error('Unlock error:', error);
      setCaptchaLoading(false);
      alert('An error occurred. Please try again.');
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
            onClick={() => navigateWithScrollToTop('/')}
            className="bg-white/10 border-white/20 text-white hover:bg-white/20"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Return to Main Site
          </Button>
        </div>

        <div className="relative z-10 flex flex-col items-center p-8 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-2xl max-w-md w-full mx-4">
          {/* Title and Subtitle */}
          <h1 className="text-3xl font-bold text-white mb-2 text-center">ReCODE ChatCBT</h1>
          <p className="text-white/80 text-center mb-6 text-sm leading-relaxed">A highly trained AI that can help you build your strengths and autocode in real time.</p>
          
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
            disabled={captchaLoading}
            className="w-full py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold hover:from-primary-foreground hover:to-secondary-foreground transition-all duration-300 shadow-lg disabled:opacity-50 flex items-center justify-center gap-2"
            >
            {captchaLoading && (
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            )}
            {captchaLoading ? 'Verifying...' : 'Unlock ChatCBT'}
          </button>
          
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen w-full bg-gradient-to-br from-background via-muted/5 to-accent/5">
      {/* Redesigned Header with explanation and larger logo */}
      <header className="bg-white/90 backdrop-blur-sm shadow-sm border-b border-border/20 p-4 flex items-center justify-between flex-shrink-0">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigateWithScrollToTop('/')}
          className="flex items-center gap-2 hover:bg-primary/5 flex-shrink-0"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="hidden sm:inline">Main Site</span>
        </Button>
        
        <div className="flex items-center gap-6 flex-1">
          {/* Explanation text */}
          <div className="flex-1 max-w-md">
            <h1 className="text-xl font-bold text-foreground mb-1">ReCODE ChatCBT</h1>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A highly trained AI assistant specializing in cognitive behavioral therapy. 
              Designed to help you explore your thoughts, emotions, and behavioral patterns 
              through evidence-based therapeutic techniques.
            </p>
          </div>
          
          {/* Larger logo positioned to the right */}
          <div className="flex-shrink-0">
            <img 
              src="/lovable-uploads/e2278887-0c55-4808-8067-a5a02dfe07e0.png" 
              alt="RECODE ChatCBT" 
              className="h-24 w-auto shadow-lg rounded-lg"
            />
          </div>
        </div>
        
        <div className="w-20 flex-shrink-0"></div>
      </header>

      {/* Starter buttons - only show when no messages */}
      {messages.length === 0 && (
        <div className="bg-white/70 backdrop-blur-sm border-b border-border/10 p-3 flex-shrink-0">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-sm font-medium text-foreground mb-3 text-center">Choose a topic to get started:</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {starterOptions.map((option, idx) => (
                <Button
                  key={idx}
                  variant="outline"
                  size="sm"
                  onClick={() => handleStarterClick(option)}
                  className="bg-white/80 border-primary/20 hover:bg-primary/10 text-foreground transition-all duration-200 text-xs"
                  disabled={loading}
                >
                  {option}
                </Button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Chat Area - takes up remaining space */}
      <div className="flex-1 flex flex-col min-h-0">
        <main 
          ref={chatContainerRef} 
          className="flex-1 overflow-y-auto p-4 space-y-4"
        >
          <div className="max-w-4xl mx-auto">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} items-start gap-3 mb-4`}
              >
                {msg.role === 'bot' && (
                  <div className="flex-shrink-0">
                    <img
                      src="/lovable-uploads/eb1cd8b5-9347-43f1-8db3-ddec0ceaa326.png"
                      alt="ChatCBT Assistant"
                      className="w-16 h-16 rounded-full border-3 border-primary/20 shadow-lg bg-white p-1"
                    />
                  </div>
                )}
                <div
                  className={`px-4 py-3 rounded-2xl text-sm max-w-[85%] whitespace-pre-wrap shadow-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-gradient-to-r from-primary to-secondary text-primary-foreground ml-auto rounded-br-sm'
                      : 'bg-white/95 backdrop-blur-sm border border-border/20 text-foreground rounded-bl-sm'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex items-start gap-3 mb-4">
                <div className="flex-shrink-0">
                  <img 
                    src="/lovable-uploads/eb1cd8b5-9347-43f1-8db3-ddec0ceaa326.png" 
                    alt="Loading..." 
                    className="w-16 h-16 rounded-full border-3 border-primary/20 shadow-lg bg-white p-1 animate-pulse" 
                  />
                </div>
                <div className="bg-white/95 backdrop-blur-sm border border-border/20 px-4 py-3 rounded-2xl rounded-bl-sm shadow-sm">
                  <span className="text-muted-foreground flex items-center gap-2 text-sm">
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
          </div>
        </main>

        {/* Fixed Input Area */}
        <div className="bg-white/95 backdrop-blur-sm border-t border-border/20 p-4 flex-shrink-0">
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && sendMessage()}
                className="flex-grow p-3 border border-border/30 rounded-2xl text-sm outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white/90 backdrop-blur-sm placeholder:text-muted-foreground"
                placeholder="Share what's on your mind..."
                disabled={loading}
              />
              <button
                onClick={() => sendMessage()}
                disabled={loading || !input.trim()}
                className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-2xl text-sm font-medium hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
              >
                Send
              </button>
            </div>
            
            {/* Compact disclaimers */}
            <div className="mt-3 text-xs text-muted-foreground text-center space-y-1">
              <p>
                🔒 <strong>Privacy:</strong> Chats are not stored and are wiped when you exit. 
                <span className="mx-2">•</span>
                🚨 <strong>Emergency:</strong> Not for crisis intervention - contact <a href="https://www.samaritans.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Samaritans</a> if needed.
              </p>
              <div className="block sm:hidden mt-2 p-2 bg-primary/5 border border-primary/20 rounded-lg">
                <p className="text-xs font-medium">💡 Add to home screen for easy access!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
