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
  const [frontiersFeed, setFrontiersFeed] = useState<RSSFeed | null>(null);
  const [natureFeed, setNatureFeed] = useState<RSSFeed | null>(null);
  const [neuroNewsFeed, setNeuroNewsFeed] = useState<RSSFeed | null>(null);
  const [nimhFeed, setNimhFeed] = useState<RSSFeed | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchRSSFeeds = async () => {
      try {
        // Using RSS2JSON service to convert RSS to JSON
        const [frontiersResponse, natureResponse, neuroNewsResponse, nimhResponse] = await Promise.all([
          fetch('https://api.rss2json.com/v1/api.json?rss_url=https://www.frontiersin.org/journals/behavioral-neuroscience/rss'),
          fetch('https://api.rss2json.com/v1/api.json?rss_url=https://www.nature.com/neuro.rss'),
          fetch('https://api.rss2json.com/v1/api.json?rss_url=https://neurosciencenews.com/feed/'),
          fetch('https://api.rss2json.com/v1/api.json?rss_url=https://www.nimh.nih.gov/rss.xml')
        ]);
        
        const frontiersData = await frontiersResponse.json();
        const natureData = await natureResponse.json();
        const neuroNewsData = await neuroNewsResponse.json();
        const nimhData = await nimhResponse.json();
        
        setFrontiersFeed({
          title: "Frontiers in Behavioral Neuroscience",
          items: frontiersData.items?.slice(0, 6) || []
        });
        setNatureFeed({
          title: "Nature Neuroscience",
          items: natureData.items?.slice(0, 6) || []
        });
        setNeuroNewsFeed({
          title: "Neuroscience News",
          items: neuroNewsData.items?.slice(0, 6) || []
        });
        setNimhFeed({
          title: "NIH/NIMH News Releases",
          items: nimhData.items?.slice(0, 6) || []
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
  return <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-primary/5">
      <NeuroDecal.TopCircuitBackground />
      <Navigation />
      <div className="container mx-auto px-4 py-8 pt-20">

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 rc-title-wrap">
            <NeuroDecal.TopTitle align="center" density="light" offsetY={-8} />
            <div className="relative flex items-center justify-center mb-4">
              {/* Left circuit border */}
              <div className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 w-40 h-px">
                {/* Main circuit trace */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-primary/50"></div>
                {/* Secondary trace above */}
                <div className="absolute -top-2 right-8 w-16 h-px bg-gradient-to-r from-transparent to-primary/30"></div>
                {/* Connection nodes */}
                <div className="absolute -top-1.5 right-0 w-3 h-3 border-2 border-primary/50 rounded-full bg-primary/10">
                  <div className="absolute inset-1 bg-primary/30 rounded-full"></div>
                </div>
                <div className="absolute -top-0.5 right-6 w-1.5 h-1.5 bg-primary/40 rounded-full"></div>
                <div className="absolute -top-0.5 right-12 w-1 h-1 bg-primary/30 rounded-full"></div>
                {/* Vertical connector */}
                <div className="absolute -top-2 right-8 w-px h-2 bg-primary/20"></div>
              </div>
              
              <h1 className="text-4xl font-bold relative z-10 px-12 bg-gradient-to-r from-foreground via-foreground to-foreground bg-clip-text">
                Resources
              </h1>
              
              {/* Right circuit border */}
              <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 w-40 h-px">
                {/* Main circuit trace */}
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-primary/20 to-primary/50"></div>
                {/* Secondary trace above */}
                <div className="absolute -top-2 left-8 w-16 h-px bg-gradient-to-l from-transparent to-primary/30"></div>
                {/* Connection nodes */}
                <div className="absolute -top-1.5 left-0 w-3 h-3 border-2 border-primary/50 rounded-full bg-primary/10">
                  <div className="absolute inset-1 bg-primary/30 rounded-full"></div>
                </div>
                <div className="absolute -top-0.5 left-6 w-1.5 h-1.5 bg-primary/40 rounded-full"></div>
                <div className="absolute -top-0.5 left-12 w-1 h-1 bg-primary/30 rounded-full"></div>
                {/* Vertical connector */}
                <div className="absolute -top-2 left-8 w-px h-2 bg-primary/20"></div>
              </div>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay informed with the latest research and developments in neuroscience, behavioral health, and therapeutic approaches.
            </p>
          </div>

          {/* Featured Video Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-border/20 mb-12 relative py-[10px]">
            <NeuroDecal.BodyMargins density="light" sections={3} />
            <h2 className="text-2xl font-bold mb-6 text-center">Dr Joe Dispenza on DBT and changing your psychological habits</h2>
            <div className="flex justify-center">
              <div className="w-full max-w-4xl">
                <div className="relative w-full" style={{
                paddingBottom: '56.25%'
              }}>
                  <iframe className="absolute top-0 left-0 w-full h-full rounded-lg" src="https://www.youtube.com/embed/2Grski61aHc?si=tvypmVOAKaVizDBw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
                </div>
              </div>
            </div>
          </div>

          {/* Second Featured Video Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-border/20 mb-12 relative py-[10px]">
            <NeuroDecal.BodyMargins density="light" sections={3} />
            <h2 className="text-2xl font-bold mb-6 text-center">Dr Sam Harris explains meditation</h2>
            <div className="flex justify-center">
              <div className="w-full max-w-4xl">
                <div className="relative w-full" style={{
                paddingBottom: '56.25%'
              }}>
                  <iframe className="absolute top-0 left-0 w-full h-full rounded-lg" src="https://www.youtube.com/embed/_VdkmOqcYNI?si=1&t=11" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
                </div>
              </div>
            </div>
          </div>

          {loading ? <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
              <p className="mt-4 text-muted-foreground">Loading latest research...</p>
            </div> : <div className="space-y-12">
              {/* Frontiers in Behavioral Neuroscience Feed */}
              {frontiersFeed && <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-border/20">
                  <div className="flex items-center gap-3 mb-6">
                    <h2 className="text-2xl font-bold">{frontiersFeed.title}</h2>
                    <Badge variant="secondary">Research Journal</Badge>
                  </div>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {frontiersFeed.items.map((item, index) => <Card key={index} className="bg-white/5 border-border/30 hover:bg-white/10 transition-colors overflow-hidden">
                        {item.thumbnail && <div className="aspect-video w-full overflow-hidden">
                            <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover" onError={e => {
                    e.currentTarget.style.display = 'none';
                  }} />
                          </div>}
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg leading-tight line-clamp-2">{item.title}</CardTitle>
                          <CardDescription className="flex items-center gap-2 text-sm">
                            <Calendar className="h-4 w-4" />
                            {formatDate(item.pubDate)}
                            {item.author && <span className="text-xs opacity-75">• {item.author}</span>}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                            {stripHtml(item.description)}
                          </p>
                          <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-medium">
                            Read Full Article <ExternalLink className="h-3 w-3" />
                          </a>
                        </CardContent>
                      </Card>)}
                  </div>
                </div>}

              {/* Nature Neuroscience Feed */}
              {natureFeed && <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-border/20">
                  <div className="flex items-center gap-3 mb-6">
                    <h2 className="text-2xl font-bold">{natureFeed.title}</h2>
                    <Badge variant="secondary">Premium Journal</Badge>
                  </div>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {natureFeed.items.map((item, index) => <Card key={index} className="bg-white/5 border-border/30 hover:bg-white/10 transition-colors overflow-hidden">
                        {item.thumbnail && <div className="aspect-video w-full overflow-hidden">
                            <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover" onError={e => {
                    e.currentTarget.style.display = 'none';
                  }} />
                          </div>}
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg leading-tight line-clamp-2">{item.title}</CardTitle>
                          <CardDescription className="flex items-center gap-2 text-sm">
                            <Calendar className="h-4 w-4" />
                            {formatDate(item.pubDate)}
                            {item.author && <span className="text-xs opacity-75">• {item.author}</span>}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                            {stripHtml(item.description)}
                          </p>
                          <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-medium">
                            Read Full Article <ExternalLink className="h-3 w-3" />
                          </a>
                        </CardContent>
                      </Card>)}
                  </div>
                </div>}

              {/* Neuroscience News Feed */}
              {neuroNewsFeed && <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-border/20">
                  <div className="flex items-center gap-3 mb-6">
                    <h2 className="text-2xl font-bold">{neuroNewsFeed.title}</h2>
                    <Badge variant="secondary">Latest News</Badge>
                  </div>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {neuroNewsFeed.items.map((item, index) => <Card key={index} className="bg-white/5 border-border/30 hover:bg-white/10 transition-colors overflow-hidden">
                        {item.thumbnail && <div className="aspect-video w-full overflow-hidden">
                            <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover" onError={e => {
                    e.currentTarget.style.display = 'none';
                  }} />
                          </div>}
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg leading-tight line-clamp-2">{item.title}</CardTitle>
                          <CardDescription className="flex items-center gap-2 text-sm">
                            <Calendar className="h-4 w-4" />
                            {formatDate(item.pubDate)}
                            {item.author && <span className="text-xs opacity-75">• {item.author}</span>}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                            {stripHtml(item.description)}
                          </p>
                          <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-medium">
                            Read Full Article <ExternalLink className="h-3 w-3" />
                          </a>
                        </CardContent>
                      </Card>)}
                  </div>
                </div>}

              {/* NIH/NIMH News Releases Feed */}
              {nimhFeed && <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-border/20">
                  <div className="flex items-center gap-3 mb-6">
                    <h2 className="text-2xl font-bold">{nimhFeed.title}</h2>
                    <Badge variant="secondary">Official Updates</Badge>
                  </div>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {nimhFeed.items.map((item, index) => <Card key={index} className="bg-white/5 border-border/30 hover:bg-white/10 transition-colors overflow-hidden">
                        {item.thumbnail && <div className="aspect-video w-full overflow-hidden">
                            <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover" onError={e => {
                    e.currentTarget.style.display = 'none';
                  }} />
                          </div>}
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg leading-tight line-clamp-2">{item.title}</CardTitle>
                          <CardDescription className="flex items-center gap-2 text-sm">
                            <Calendar className="h-4 w-4" />
                            {formatDate(item.pubDate)}
                            {item.author && <span className="text-xs opacity-75">• {item.author}</span>}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                            {stripHtml(item.description)}
                          </p>
                          <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-medium">
                            Read Full Release <ExternalLink className="h-3 w-3" />
                          </a>
                        </CardContent>
                      </Card>)}
                  </div>
                </div>}
            </div>}
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
    </div>;
};
export default EvidenceUpdates;