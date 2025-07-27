import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import { useEffect } from "react";

const EvidenceUpdates = () => {
  useEffect(() => {
    // Load RSS widget script
    const script = document.createElement('script');
    script.src = 'https://widget.rss.app/v1/wall.js';
    script.type = 'text/javascript';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-primary/5">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center gap-2 mb-8 text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Evidence Updates</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay informed with the latest research and developments in mental health, CBT, and therapeutic approaches.
            </p>
          </div>

          {/* First RSS Feed */}
          <div className="mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-border/20">
              <h2 className="text-2xl font-bold mb-6 text-center">Latest Mental Health Research</h2>
              <div className="w-full">
                <div dangerouslySetInnerHTML={{ __html: '<rssapp-wall id="I7nrQngVyzT1b66p"></rssapp-wall>' }} />
              </div>
            </div>
          </div>

          {/* Second RSS Feed */}
          <div className="mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-border/20">
              <h2 className="text-2xl font-bold mb-6 text-center">Therapy & Treatment Updates</h2>
              <div className="w-full">
                <div dangerouslySetInnerHTML={{ __html: '<rssapp-wall id="8XOhfo0oupRzAlAJ"></rssapp-wall>' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EvidenceUpdates;