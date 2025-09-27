import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar } from "lucide-react";
import Navigation from "@/components/Navigation";
import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import NeuroDecal from "@/components/Neuro/NeuroDecal";

interface RSSItem {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  author?: string;
  thumbnail?: string;
}

interface RSSFeed {
  title: string;
  items: RSSItem[];
}

const EvidenceUpdates = () => {
  const [cogNeuroFeed, setCogNeuroFeed] = useState<RSSFeed | null>(null);
  const [cogScienceFeed, setCogScienceFeed] = useState<RSSFeed | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRSSFeeds = async () => {
      try {
        // Using RSS2JSON service to convert RSS to JSON
        const [cogNeuroResponse, cogScienceResponse] = await Promise.all([
          fetch('https://api.rss2json.com/v1/api.json?rss_url=https://www.cogneurosociety.org/feed/'),
          fetch('https://api.rss2json.com/v1/api.json?rss_url=https://cognitivesciencesociety.org/feed/')
        ]);

        const cogNeuroData = await cogNeuroResponse.json();
        const cogScienceData = await cogScienceResponse.json();

        setCogNeuroFeed({
          title: cogNeuroData.feed?.title || "Cognitive Neuroscience Society",
          items: cogNeuroData.items?.slice(0, 6) || []
        });

        setCogScienceFeed({
          title: cogScienceData.feed?.title || "Cognitive Science Society", 
          items: cogScienceData.items?.slice(0, 6) || []
        });
      } catch (error) {
        console.error('Error fetching RSS feeds:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRSSFeeds();
  }, []);

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    } catch {
      return 'Recent';
    }
  };

  const stripHtml = (html: string) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-primary/5">
      <Navigation />
      <div className="container mx-auto px-4 py-8">

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 rc-title-wrap">
            <NeuroDecal.TopTitle align="center" density="light" offsetY={-8} />
            <h1 className="text-4xl font-bold mb-4 relative z-10">Evidence Updates</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay informed with the latest research and developments in mental health, CBT, and therapeutic approaches.
            </p>
          </div>

          {/* Featured Video Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-border/20 mb-12 relative">
            <NeuroDecal.BodyMargins density="light" sections={3} />
            <h2 className="text-2xl font-bold mb-6 text-center">Dr Joe Dispenza on DBT and changing your psychological habits</h2>
            <div className="flex justify-center">
              <div className="w-full max-w-4xl">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe 
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/2Grski61aHc?si=tvypmVOAKaVizDBw" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
              <p className="mt-4 text-muted-foreground">Loading latest research...</p>
            </div>
          ) : (
            <div className="space-y-12">
              {/* Cognitive Neuroscience Society Feed */}
              {cogNeuroFeed && (
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-border/20">
                  <div className="flex items-center gap-3 mb-6">
                    <h2 className="text-2xl font-bold">{cogNeuroFeed.title}</h2>
                    <Badge variant="secondary">Cognitive Neuroscience</Badge>
                  </div>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {cogNeuroFeed.items.map((item, index) => (
                      <Card key={index} className="bg-white/5 border-border/30 hover:bg-white/10 transition-colors overflow-hidden">
                        {item.thumbnail && (
                          <div className="aspect-video w-full overflow-hidden">
                            <img 
                              src={item.thumbnail} 
                              alt={item.title}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.currentTarget.style.display = 'none';
                              }}
                            />
                          </div>
                        )}
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg leading-tight line-clamp-2">{item.title}</CardTitle>
                          <CardDescription className="flex items-center gap-2 text-sm">
                            <Calendar className="h-4 w-4" />
                            {formatDate(item.pubDate)}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                            {stripHtml(item.description)}
                          </p>
                          <a 
                            href={item.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                          >
                            Read More <ExternalLink className="h-3 w-3" />
                          </a>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Cognitive Science Society Feed */}
              {cogScienceFeed && (
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-border/20">
                  <div className="flex items-center gap-3 mb-6">
                    <h2 className="text-2xl font-bold">{cogScienceFeed.title}</h2>
                    <Badge variant="secondary">Cognitive Science</Badge>
                  </div>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {cogScienceFeed.items.map((item, index) => (
                      <Card key={index} className="bg-white/5 border-border/30 hover:bg-white/10 transition-colors overflow-hidden">
                        {item.thumbnail && (
                          <div className="aspect-video w-full overflow-hidden">
                            <img 
                              src={item.thumbnail} 
                              alt={item.title}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.currentTarget.style.display = 'none';
                              }}
                            />
                          </div>
                        )}
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg leading-tight line-clamp-2">{item.title}</CardTitle>
                          <CardDescription className="flex items-center gap-2 text-sm">
                            <Calendar className="h-4 w-4" />
                            {formatDate(item.pubDate)}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                            {stripHtml(item.description)}
                          </p>
                          <a 
                            href={item.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                          >
                            Read More <ExternalLink className="h-3 w-3" />
                          </a>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Book Your Session Section */}
        <section className="py-20 px-4 bg-primary text-primary-foreground relative">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold mb-6">Book Your Session</h2>
            <p className="text-xl mb-8 opacity-90">
              Schedule your personalized ReCODE consultation through our secure booking system
            </p>
            
            {/* Fresha Booking Embed Placeholder */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-6">
              <p className="text-lg mb-4">Professional ReCODE Sessions</p>
              <p className="text-sm opacity-75 mb-4">It starts with one click </p>
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="relative group">
                  <Button size="lg" onClick={() => window.location.href = 'https://recodecbt.setmore.com'} className="text-lg px-8 py-3 bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white shadow-lg">
                    Book Your Session Today
                  </Button>
                  
                  {/* Enhanced £20 off sticker */}
                  <div className="absolute -top-4 -right-12 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-20 h-20 bg-gradient-to-br from-red-500 via-red-600 to-red-700 text-white rounded-full shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-300 flex flex-col items-center justify-center border-4 border-white">
                      <div className="font-bold text-sm leading-none">£20</div>
                      <div className="font-bold text-xs leading-none">OFF</div>
                      <div className="font-bold text-xs leading-none opacity-90">INTRO</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <Link to="/contact#top">
                <Button size="lg" className="text-lg px-8 py-3 bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white shadow-lg">
                  Contact Us Today
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EvidenceUpdates;