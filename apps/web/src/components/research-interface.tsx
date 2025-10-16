'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { startResearch, ResearchResponse } from '@/lib/api';

export function ResearchInterface() {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [researchResult, setResearchResult] = useState<ResearchResponse | null>(null);

  const handleResearch = async () => {
    if (!query.trim()) return;

    setIsLoading(true);
    setResearchResult(null);

    try {
      const result = await startResearch({
        query: query.trim(),
        max_sources: 5,
        detailed: true
      });
      
      setResearchResult(result);
    } catch (error) {
      console.error('Research failed:', error);
      setResearchResult({
        id: 'error',
        query,
        status: 'failed',
        error: error instanceof Error ? error.message : 'Research failed'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>AI Research Agent</CardTitle>
          <CardDescription>
            Enter your research topic and get comprehensive AI-powered analysis
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex space-x-2">
            <Input
              type="text"
              placeholder="Enter research topic..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleResearch()}
              disabled={isLoading}
              className="flex-1 min-h-[44px]"
            />
            <Button 
              onClick={handleResearch} 
              disabled={isLoading || !query.trim()}
              className="min-h-[44px] px-6"
            >
              {isLoading ? 'Researching...' : 'Start Research'}
            </Button>
          </div>
        </CardContent>
      </Card>

      {isLoading && (
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
                <span>Researching: {query}</span>
                <Badge variant="secondary">Processing</Badge>
              </div>
              <div className="space-y-2">
                <div className="h-2 bg-muted rounded animate-pulse"></div>
                <div className="h-2 bg-muted rounded animate-pulse w-3/4"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {researchResult && (
        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>Research Results</CardTitle>
                <CardDescription>Query: {researchResult.query}</CardDescription>
              </div>
              <Badge 
                variant={
                  researchResult.status === 'completed' ? 'default' :
                  researchResult.status === 'failed' ? 'destructive' : 'secondary'
                }
              >
                {researchResult.status}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            {researchResult.error ? (
              <div className="text-destructive space-y-2">
                <h4 className="font-semibold">Research Failed</h4>
                <p>{researchResult.error}</p>
              </div>
            ) : researchResult.results ? (
              <div className="prose max-w-none">
                <pre className="whitespace-pre-wrap text-sm">
                  {researchResult.results.content}
                </pre>
                <div className="flex space-x-2 mt-4 text-sm text-muted-foreground">
                  <Badge variant="outline">
                    Sources: {researchResult.results.sources_used}
                  </Badge>
                  <Badge variant="outline">
                    {researchResult.results.detailed ? 'Detailed' : 'Summary'}
                  </Badge>
                </div>
              </div>
            ) : (
              <div>No results available</div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}