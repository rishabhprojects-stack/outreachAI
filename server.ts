import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI, Type } from "@google/genai";
import { createServer as createViteServer } from "vite";

// Load environment variables
dotenv.config();

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Lazy-initialize Gemini client
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      console.warn("WARNING: GEMINI_API_KEY environment variable is not set. Using fallback placeholder generator for API demo.");
    }
    aiClient = new GoogleGenAI({
      apiKey: key || "MOCK_KEY",
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

// REST API Endpoints
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// OutReachAI custom interactive analyzer endpoint
app.post("/api/analyze", async (req, res) => {
  const { companyName, industry, targetAudience, currentWeb } = req.body;

  if (!companyName || !industry) {
    return res.status(400).json({ error: "Missing company name or industry." });
  }

  const hasApiKey = !!process.env.GEMINI_API_KEY;

  if (!hasApiKey) {
    // Elegant simulation mode in case key is missing (for local sandbox/initial load)
    console.log("Simulating response due to missing GEMINI_API_KEY.");
    const fallbackBlueprint = {
      companyName,
      industry,
      recommendedDomain: `${companyName.toLowerCase().replace(/\s+/g, "")}online.com`,
      webLayoutConcept: {
        heroSection: `Elegant, high-conversion visual design customized specifically for ${industry} clients.`,
        keyFeatures: [
          `Seamless automated booking systems scaled for your target ${targetAudience || 'customer'} audience.`,
          `Dynamic customer intake forms and real-time scheduling tools.`,
          `Premium modern styling with custom high-contrast graphic interfaces.`
        ],
        suggestedColorPalette: ["Deep Onyx (Refined)", "Warm Emerald (Trust)", "Ice White (Clarity)"]
      },
      hostingPlan: {
        serverType: "Premium Global Cloud Infrastructure with Active Speed Delivery",
        securitySSL: "Bank-Grade Encryption and Continuous Shield Protection",
        backupFrequency: "Fully Automated High-Frequency Backups and Global Replication"
      },
      marketingStrategy: {
        suggestedAdCopy: `Upgrade your personal brand. ${companyName} delivers bespoke, high-quality ${industry} services with complete, uninterrupted digital scheduling.`,
        targetKeywords: [`premier ${industry}`, `${companyName} services`, `expert localized ${industry}`],
        monthlyBudgetPlan: "Inclusive digital operational model replacing expensive overhead"
      },
      assignedAgents: [
        {
          name: "Design Vanguard",
          role: "Bespoke Styling Engine",
          description: "Continuously analyzes layout interactions to polish and improve conversion ratios."
        },
        {
          name: "Engagement Orchestrator",
          role: "Performance & Visibility Specialist",
          description: "Optimizes local search maps, indexing status, and traffic pathways for real customer growth."
        }
      ]
    };
    return res.json(fallbackBlueprint);
  }

  try {
    const ai = getGeminiClient();
    const prompt = `
      You are the core core-agent engine behind OutReachAI. Write a premium corporate-ready Digital Presence Blueprint for:
      - Company Name: "${companyName}"
      - Industry: "${industry}"
      - Target Audience: "${targetAudience || "Premium clientele and business decision makers"}"
      - Current Digital Website (if any): "${currentWeb || "None"}"

      Formulate a complete business-focused digital setup blueprint. 
      CRITICAL: Keep technical jargon (like Let's Encrypt, server clusters, Linux, Kubernetes, SSL, TTFB, backend paths, coding tags) out of the response. Instead, describe technical things in high-level executive business outcomes (e.g. 'Bank-Grade Security Shield', 'High-Speed Premium Cloud Delivery', 'Auto-Scaling Infrastructure', 'Conversion-Optimized Layouts'). Assign exactly 2 business productivity agents.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        systemInstruction: "You are the automated chief strategy agent of OutReachAI. Respond strictly in valid JSON matching the exact schema definition provided.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            recommendedDomain: { type: Type.STRING, description: "A catchy, custom executive domain recommended for their 2026 brand strategy." },
            webLayoutConcept: {
              type: Type.OBJECT,
              properties: {
                heroSection: { type: Type.STRING, description: "Description of an extremely high-converting modern display layout focusing on their core audience." },
                keyFeatures: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING },
                  description: "Exactly 3 distinct, feature descriptions for their automated modern portal."
                },
                suggestedColorPalette: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING },
                  description: "3 highly styled 2026 trending design colors matching their industry vibe."
                }
              },
              required: ["heroSection", "keyFeatures", "suggestedColorPalette"]
            },
            hostingPlan: {
              type: Type.OBJECT,
              properties: {
                serverType: { type: Type.STRING, description: "The architecture we setup, e.g. serverless edge container clusters." },
                securitySSL: { type: Type.STRING, description: "Standard security mechanisms provided." },
                backupFrequency: { type: Type.STRING, description: "How periodic snapshots are structured." }
              },
              required: ["serverType", "securitySSL", "backupFrequency"]
            },
            marketingStrategy: {
              type: Type.OBJECT,
              properties: {
                suggestedAdCopy: { type: Type.STRING, description: "Autogenerated premium performance marketing social ad copy snippet." },
                targetKeywords: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING },
                  description: "Suggested keywords to configure the AI optimization suite."
                },
                monthlyBudgetPlan: { type: Type.STRING, description: "An appropriate automated ad spend strategy recommendation." }
              },
              required: ["suggestedAdCopy", "targetKeywords", "monthlyBudgetPlan"]
            },
            assignedAgents: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  name: { type: Type.STRING, description: "A high-tech agent codename, e.g. Chronos, LeadSentry, BrandVanguard, ShieldHQ." },
                  role: { type: Type.STRING, description: "The agent's dedicated responsibility (e.g. Backlink Guardian, Content Engine, Lead Engager)." },
                  description: "A solid executive description of what operations this agent auto-runs on their behalf."
                },
                required: ["name", "role", "description"]
              },
              description: "Must provide exactly 2 dedicated customized agents that fit their branding perfectly."
            }
          },
          required: [
            "recommendedDomain",
            "webLayoutConcept",
            "hostingPlan",
            "marketingStrategy",
            "assignedAgents"
          ]
        }
      }
    });

    const parsedData = JSON.parse(response.text || "{}");
    return res.json({
      companyName,
      industry,
      ...parsedData
    });

  } catch (error: any) {
    console.error("Gemini invocation failed:", error);
    res.status(500).json({ error: "Failed to generate AI blueprint.", details: error.message });
  }
});

// Vite server setup following environment logic
async function bootstrapServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

bootstrapServer();
