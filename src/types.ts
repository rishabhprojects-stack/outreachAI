export interface BusinessBlueprint {
  companyName: string;
  industry: string;
  recommendedDomain: string;
  webLayoutConcept: {
    heroSection: string;
    keyFeatures: string[];
    suggestedColorPalette: string[];
  };
  hostingPlan: {
    serverType: string;
    securitySSL: string;
    backupFrequency: string;
  };
  marketingStrategy: {
    suggestedAdCopy: string;
    targetKeywords: string[];
    monthlyBudgetPlan: string;
  };
  assignedAgents: {
    name: string;
    role: string;
    description: string;
  }[];
}

export interface LeadItem {
  id: string;
  businessName: string;
  industry: string;
  opportunityScore: number; // 0-100
  issuesFound: string[];
  status: 'pending' | 'outreached' | 'interested' | 'not-interested';
  outreachEmail: string;
}

export interface TicketItem {
  id: string;
  clientName: string;
  requestText: string;
  status: 'open' | 'resolving' | 'resolved';
  timestamp: string;
  agentLogs: string[];
}
