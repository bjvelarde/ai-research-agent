export interface ResearchRequest {
    query: string;
    max_sources?: number;
    detailed?: boolean;
  }
  
  export interface ResearchResponse {
    id: string;
    query: string;
    status: 'pending' | 'processing' | 'completed' | 'failed';
    results?: {
      content: string;
      sources_used: number;
      detailed: boolean;
    };
    error?: string;
  }
  
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
  
  export async function startResearch(request: ResearchRequest): Promise<ResearchResponse> {
    const response = await fetch(`${API_BASE_URL}/research`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    });
  
    if (!response.ok) {
      throw new Error(`Research request failed: ${response.statusText}`);
    }
  
    return response.json();
  }
  
  export async function getResearchStatus(researchId: string): Promise<ResearchResponse> {
    const response = await fetch(`${API_BASE_URL}/research/${researchId}`);
    
    if (!response.ok) {
      throw new Error(`Status check failed: ${response.statusText}`);
    }
  
    return response.json();
  }