'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';

export function ResearchInterface() {
  const [query, setQuery] = useState('');
  const [isResearching, setIsResearching] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleResearch = async () => {
    if (!query.trim()) return;

    setIsResearching(true);
    setProgress(0);

    // Simulate research progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsResearching(false);
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };

  return (
    <div className="mobile-container space-y-6 py-6">
      {/* Research Input Section */}
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">
            Start Your Research
          </CardTitle>
          <CardDescription>
            Enter your research question below. The AI will search multiple
            sources and synthesize information for you.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            placeholder="What would you like to research? For example: 'Latest developments in renewable energy storage' or 'Comparison of machine learning frameworks for natural language processing'"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="min-h-[120px] resize-none text-base"
            disabled={isResearching}
          />
          <Button
            onClick={handleResearch}
            disabled={!query.trim() || isResearching}
            className="w-full touch-target text-base font-medium"
            size="lg"
          >
            {isResearching ? 'Researching...' : 'Start Research'}
          </Button>
        </CardContent>
      </Card>

      {/* Research Progress */}
      {isResearching && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              Research in Progress
              <Badge variant="secondary" className="animate-pulse">
                Live
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Gathering information...</span>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Searching web sources</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Analyzing information</span>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Research Results Skeleton */}
      {isResearching && progress < 100 && (
        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-48" />
          </CardHeader>
          <CardContent className="space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
            <Skeleton className="h-4 w-3/4" />
          </CardContent>
        </Card>
      )}

      {/* Sample Results (for demo) */}
      {!isResearching && progress === 100 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Research Results
              <Badge variant="outline">Complete</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              This is where your comprehensive research report will appear. The
              AI will synthesize information from multiple sources and provide
              citations.
            </p>
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-sm">
                Try entering a research question above to see the AI research
                agent in action!
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
