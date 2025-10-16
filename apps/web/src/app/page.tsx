import { ResearchInterface } from '@/components/research-interface';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-border sticky top-0 z-10">
        <div className="mobile-container py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground text-lg">🧠</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">
                  Research Agent
                </h1>
                <p className="text-sm text-muted-foreground hidden xs:block">
                  AI-powered research assistant
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-muted-foreground hidden sm:inline">
                System Online
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="mobile-container py-8">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            AI Research Assistant
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Your intelligent research partner powered by LangChain & LangGraph.
            Get comprehensive, multi-source research in seconds.
          </p>
        </div>
      </div>

      {/* Research Interface */}
      <ResearchInterface />

      {/* Features Grid */}
      <div className="mobile-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="flex justify-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🔍</span>
                </div>
              </CardTitle>
              <CardTitle>Multi-Source Search</CardTitle>
              <CardDescription>
                Combines web search, academic papers, and your documents
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <CardTitle className="flex justify-center">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🤖</span>
                </div>
              </CardTitle>
              <CardTitle>AI Synthesis</CardTitle>
              <CardDescription>
                Intelligent analysis and synthesis of complex information
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <CardTitle className="flex justify-center">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📱</span>
                </div>
              </CardTitle>
              <CardTitle>Mobile Ready</CardTitle>
              <CardDescription>
                Works perfectly on all devices with PWA support
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </main>
  );
}
