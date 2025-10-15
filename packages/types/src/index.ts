// Shared TypeScript types for the Research Agent

export interface ResearchRequest {
  question: string;
  depth?: number;
  sources?: string[];
}

export interface ResearchResult {
  id: string;
  question: string;
  report: string;
  sources: ResearchSource[];
  status: 'planning' | 'searching' | 'synthesizing' | 'completed' | 'failed';
  progress: number;
  createdAt: string;
  completedAt?: string;
}

export interface ResearchSource {
  url: string;
  title: string;
  content: string;
  credibility: number;
}

export interface ResearchProgress {
  status: ResearchResult['status'];
  currentStep: string;
  progress: number;
  message?: string;
}
