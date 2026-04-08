import { Cartridge, CartridgeData, RatingRequest, PublishRequest, InstallRequest } from "./types";

export interface Env {
  CARTRIDGES: KVNamespace;
}

const DEFAULT_CARTRIDGES: Cartridge[] = [
  {
    id: "code-gen",
    name: "Code Generator",
    version: "1.2.0",
    description: "Generate, review, and refactor code",
    author: "Cocapn Core",
    rating: 4.8,
    downloads: 120,
    skills: ["code_generation", "code_review", "refactoring"],
    rules: ["Always include tests", "Follow language conventions"],
    compatible_with: ["all"]
  },
  {
    id: "delegation",
    name: "Multi-Agent Delegation",
    version: "1.0.0",
    description: "Multi-agent task delegation",
    author: "Cocapn Core",
    rating: 4.5,
    downloads: 89,
    skills: ["task_delegation", "coordination"],
    rules: ["Assign based on capability", "Monitor progress"],
    compatible_with: ["fleet-v1+"]
  },
  {
    id: "error-recovery",
    name: "Error Recovery",
    version: "1.1.0",
    description: "Automatic error diagnosis and recovery",
    author: "Cocapn Core",
    rating: 4.7,
    downloads: 95,
    skills: ["error_diagnosis", "recovery_protocols"],
    rules: ["Log all errors", "Attempt recovery before escalation"],
    compatible_with: ["all"]
  },
  {
    id: "planning",
    name: "Task Planning",
    version: "1.3.0",
    description: "Multi-step task decomposition",
    author: "Cocapn Core",
    rating: 4.9,
    downloads: 150,
    skills: ["task_decomposition", "planning"],
    rules: ["Break into subtasks", "Estimate effort"],
    compatible_with: ["all"]
  },
  {
    id: "socratic-method",
    name: "Socratic Method",
    version: "1.0.0",
    description: "Teach by asking questions",
    author: "Cocapn Core",
    rating: 4.6,
    downloads: 67,
    skills: ["teaching", "questioning"],
    rules: ["Ask open-ended questions", "Build on previous answers"],
    compatible_with: ["education-module"]
  },
  {
    id: "spaced-repetition",
    name: "Spaced Repetition",
    version: "1.0.0",
    description: "Optimal learning intervals",
    author: "Cocapn Core",
    rating: 4.4,
    downloads: 45,
    skills: ["learning_optimization", "scheduling"],
    rules: ["Calculate optimal intervals", "Adapt to performance"],
    compatible_with: ["education-module"]
  },
  {
    id: "fishing-strategy",
    name: "Fishing Strategy AI",
    version: "2.0.0",
    description: "Adaptive fishing AI",
    author: "Marine Ops",
    rating: 4.9,
    downloads: 200,
    skills: ["fishing_patterns", "resource_optimization"],
    rules: ["Respect conservation limits", "Adapt to weather"],
    compatible_with: ["marine-vessels"]
  },
  {
    id: "dnd-narration",
    name: "D&D Narration",
    version: "1.5.0",
    description: "Immersive TTRPG storytelling",
    author: "Entertainment Div",
    rating: 5.0,
    downloads: 180,
    skills: ["storytelling", "character_voices", "rule_adjudication"],
    rules: ["Maintain narrative consistency", "Engage all players"],
    compatible_with: ["entertainment-module"]
  }
];

const HTML_HEADER = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Skill Cartridge Registry</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg-primary: #0a0a0f;
      --bg-secondary: #11111a;
      --text-primary: #f8fafc;
      --text-secondary: #cbd5e1;
      --accent: #818cf8;
      --accent-hover: #6366f1;
      --card-bg: #1e1e2e;
      --border: #2d2d3d;
    }
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Inter', sans-serif;
      background-color: var(--bg-primary);
      color: var(--text-primary);
      line-height: 1.6;
      min-height: 100vh;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }
    
    header {
      padding: 2rem 0;
      border-bottom: 1px solid var(--border);
    }
    
    .hero {
      text-align: center;
      padding: 4rem 0;
    }
    
    .hero h1 {
      font-size: 3.5rem;
      font-weight: 700;
      background: linear-gradient(135deg, var(--accent) 0%, #a5b4fc 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 1rem;
    }
    
    .hero p {
      font-size: 1.25rem;
      color: var(--text-secondary);
      max-width: 600px;
      margin: 0 auto 3rem;
    }
    
    .stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
      margin: 3rem 0;
    }
    
    .stat-card {
      background: var(--bg-secondary);
      padding: 1.5rem;
      border-radius: 12px;
      text-align: center;
      border: 1px solid var(--border);
    }
    
    .stat-card h3 {
      font-size: 2rem;
      color: var(--accent);
      margin-bottom: 0.5rem;
    }
    
    .section-title {
      font-size: 2rem;
      margin: 4rem 0 2rem;
      color: var(--text-primary);
    }
    
    .cartridges-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 1.5rem;
      margin-bottom: 4rem;
    }
    
    .cartridge-card {
      background: var(--card-bg);
      border-radius: 12px;
      padding: 1.5rem;
      border: 1px solid var(--border);
      transition: transform 0.2s, border-color 0.2s;
    }
    
    .cartridge-card:hover {
      transform: translateY(-4px);
      border-color: var(--accent);
    }
    
    .cartridge-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 1rem;
    }
    
    .cartridge-id {
      font-family: monospace;
      color: var(--accent);
      font-size: 0.9rem;
      background: rgba(129, 140, 248, 0.1);
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
    }
    
    .cartridge-rating {
      display: flex;
      align-items: center;
      gap: 0.25rem;
      color: #fbbf24;
    }
    
    .cartridge-name {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }
    
    .cartridge-description {
      color: var(--text-secondary);
      margin-bottom: 1rem;
      font-size: 0.95rem;
    }
    
    .cartridge-meta {
      display: flex;
      justify-content: space-between;
      color: var(--text-secondary);
      font-size: 0.85rem;
      margin-bottom: 1rem;
    }
    
    .skills {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-top: 1rem;
    }
    
    .skill-tag {
      background: rgba(129, 140, 248, 0.1);
      color: var(--accent);
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
      font-size: 0.75rem;
    }
    
    .api-docs {
      background: var(--bg-secondary);
      border-radius: 12px;
      padding: 2rem;
      margin: 4rem 0;
      border: 1px solid var(--border);
    }
    
    .endpoint {
      background: var(--card-bg);
      padding: 1rem;
      border-radius: 8px;
      margin: 1rem 0;
      font-family: monospace;
      border-left: 4px solid var(--accent);
    }
    
    footer {
      text-align: center;
      padding: 3rem 0;
      border-top: 1px solid var(--border);
      color: var(--text-secondary);
      font-size: 0.9rem;
    }
    
    .fleet-footer {
      margin-top: 1rem;
      font-family: monospace;
      color: var(--accent);
    }
    
    .btn {
      background: var(--accent);
      color: white;
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      transition: background-color 0.2s;
    }
    
    .btn:hover {
      background: var(--accent-hover);
    }
    
    @media (max-width: 768px) {
      .hero h1 {
        font-size: 2.5rem;
      }
      
      .cartridges-grid {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <h2 style="color: var(--accent); font-weight: 600;">Cocapn Fleet</h2>
    </header>`;

const HTML_FOOTER = `
    <footer>
      <p>Skill Cartridge Registry &copy; ${new Date().getFullYear()} Cocapn Fleet</p>
      <p class="fleet-footer">Interoperable. Modular. Autonomous.</p>
    </footer>
  </div>
</body>
</html>`;

function renderCartridgeCard(cartridge: Cartridge): string {
  const stars = '★'.repeat(Math.floor(cartridge.rating)) + '☆'.repeat(5 - Math.floor(cartridge.rating));
  return `
    <div class="cartridge-card">
      <div class="cartridge-header">
        <span class="cartridge-id">${cartridge.id}</span>
        <span class="cartridge-rating">${stars} ${cartridge.rating.toFixed(1)}</span>
      </div>
      <h3 class="cartridge-name">${cartridge.name}</h3>
      <p class="cartridge-description">${cartridge.description}</p>
      <div class="cartridge-meta">
        <span>v${cartridge.version}</span>
        <span>${cartridge.downloads} downloads</span>
      </div>
      <div class="skills">
        ${cartridge.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
      </div>
    </div>`;
}

function renderLandingPage(): string {
  const stats = `
    <div class="stats">
      <div class="stat-card">
        <h3>8</h3>
        <p>Built-in Cartridges</p>
      </div>
      <div class="stat-card">
        <h3>1</h3>
        <p>API Call to Install</p>
      </div>
      <div class="stat-card">
        <h3>JSON</h3>
        <p>Native Format</p>
      </div>
      <div class="stat-card">
        <h3>Fork</h3>
        <p>First Philosophy</p>
      </div>
    </div>`;

  const cartridges = DEFAULT_CARTRIDGES.map(renderCartridgeCard).join('');

  const apiDocs = `
    <section class="api-docs">
      <h2 class="section-title">API Documentation</h2>
      <div class="endpoint">GET /api/cartridges — List all cartridges</div>
      <div class="endpoint">GET /api/cartridges/:id — Get specific cartridge</div>
      <div class="endpoint">POST /api/install — Install cartridge to vessel</div>
      <div class="endpoint">POST /api/rate — Rate a cartridge (1-5 stars)</div>
      <div class="endpoint">POST /api/publish — Publish new cartridge</div>
      <div class="endpoint">GET /health — Service status</div>
    </section>`;

  return HTML_HEADER + `
    <main>
      <section class="hero">
        <h1>Skill Cartridge Registry</h1>
        <p>Plug-and-play capabilities for any vessel. Extend your fleet's abilities with modular JSON skill packages.</p>
        ${stats}
      </section>
      
      <section>
        <h2 class="section-title">Featured Cartridges</h2>
        <div class="cartridges-grid">
          ${cartridges}
        </div>
      </section>
      
      ${apiDocs}
    </main>
  ` + HTML_FOOTER;
}

async function handleApiRequest(path: string, request: Request, env: Env): Promise<Response> {
  const url = new URL(request.url);
  
  // GET /api/cartridges
  if (path === '/api/cartridges' && request.method === 'GET') {
    const allCartridges: Cartridge[] = [];
    
    // Get default cartridges
    allCartridges.push(...DEFAULT_CARTRIDGES);
    
    // Get custom cartridges from KV
    const customKeys = await env.CARTRIDGES.list();
    for (const key of customKeys.keys) {
      const cartridge = await env.CARTRIDGES.get(key.name, 'json');
      if (cartridge) allCartridges.push(cartridge as Cartridge);
    }
    
    return new Response(JSON.stringify(allCartridges), {
      headers: { 'Content-Type': 'application/json' }
    });
  }
  
  // GET /api/cartridges/:id
  if (path.startsWith('/api/cartridges/') && request.method === 'GET') {
    const id = path.split('/')[3];
    
    // Check default cartridges
    const defaultCartridge = DEFAULT_CARTRIDGES.find(c => c.id === id);
    if (defaultCartridge) {
      return new Response(JSON.stringify(defaultCartridge), {
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Check KV
    const cartridge = await env.CARTRIDGES.get(id, 'json');
    if (cartridge) {
      return new Response(JSON.stringify(cartridge), {
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    return new Response(JSON.stringify({ error: 'Cartridge not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' }
    });
  }
  
  // POST /api/install
  if (path === '/api/install' && request.method === 'POST') {
    try {
      const data: InstallRequest = await request.json();
      const cartridgeId = data.cartridge_id;
      
      // In a real implementation, this would add to vessel config
      // For now, we'll just increment downloads
      let cartridge: Cartridge | undefined = DEFAULT_CARTRIDGES.find(c => c.id === cartridgeId);
      let isCustom = false;
      
      if (!cartridge) {
        cartridge = await env.CARTRIDGES.get(cartridgeId, 'json') as Cartridge;
        isCustom = true;
      }
      
      if (!cartridge) {
        return new Response(JSON.stringify({ error: 'Cartridge not found' }), {
          status: 404,
          headers: { 'Content-Type': 'application/json' }
        });
      }
      
      cartridge.downloads += 1;
      
      if (isCustom) {
        await env.CARTRIDGES.put(cartridgeId, JSON.stringify(cartridge));
      }
      
      return new Response(JSON.stringify({
        success: true,
        message: `Cartridge ${cartridgeId} installed successfully`,
        config_update: {
          skills_added: cartridge.skills,
          rules_added: cartridge.rules
        }
      }), {
        headers: { 'Content-Type': 'application/json' }
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: 'Invalid request' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }
  
  // POST /api/rate
  if (path === '/api/rate' && request.method === 'POST') {
    try {
      const data: RatingRequest = await request.json();
      const { cartridge_id, rating, vessel_id } = data;
      
      if (rating < 1 || rating > 5) {
        return new Response(JSON.stringify({ error: 'Rating must be between 1 and 5' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }
      
      let cartridge: Cartridge | undefined = DEFAULT_CARTRIDGES.find(c => c.id === cartridge_id);
      let isCustom = false;
      
      if (!cartridge) {
        cartridge = await env.CARTRIDGES.get(cartridge_id, 'json') as Cartridge;
        isCustom = true;
      }
      
      if (!cartridge) {
        return new Response(JSON.stringify({ error: 'Cartridge not found' }), {
          status: 404,
          headers: { 'Content-Type': 'application/json' }
        });
      }
      
      // Simple rating update (in production, you'd want weighted average)
      cartridge.rating = (cartridge.rating + rating) / 2;
      
      if (isCustom) {
        await env.CARTRIDGES.put(cartridge_id, JSON.stringify(cartridge));
      }
      
      return new Response(JSON.stringify({
        success: true,
        message: `Rating submitted for ${cartridge_id}`,
        new_rating: cartridge.rating
      }), {
        headers: { 'Content-Type': 'application/json' }
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: 'Invalid request' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }
  
  // POST /api/publish
  if (path === '/api/publish' && request.method === 'POST') {
    try {
      const data: PublishRequest = await request.json();
      const cartridgeData: CartridgeData = data.cartridge;
      
      // Validate required fields
      if (!cartridgeData.id || !cartridgeData.name || !cartridgeData.version) {
        return new Response(JSON.stringify({ error: 'Missing required fields' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }
      
      // Check if cartridge already exists
      const existing = await env.CARTRIDGES.get(cartridgeData.id, 'json');
      if (existing) {
        return new Response(JSON.stringify({ error: 'Cartridge ID already exists' }), {
          status: 409,
          headers: { 'Content-Type': 'application/json' }
        });
      }
      
      // Create full cartridge object
      const cartridge: Cartridge = {
        ...cartridgeData,
        rating: 0,
        downloads: 0,
        skills: cartridgeData.skills || [],
        rules: cartridgeData.rules || [],
        compatible_with: cartridgeData.compatible_with || ['all']
      };
      
      // Store in KV
      await env.CARTRIDGES.put(cartridgeData.id, JSON.stringify(cartridge));
      
      return new Response(JSON.stringify({
        success: true,
        message: `Cartridge ${cartridgeData.id} published successfully`,
        cartridge
      }), {
        headers: { 'Content-Type': 'application/json' }
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: 'Invalid request' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }
  
  // GET /health
  if (path === '/health' && request.method === 'GET') {
    return new Response(JSON.stringify({
      status: 'healthy',
      timestamp: new Date().toISOString(),
      service: 'skill-cartridge-registry',
      version: '1.0.0'
    }), {
      headers: { 'Content-Type': 'application/json' }
    });
  }
  
  return new Response(JSON.stringify({ error: 'Not found' }), {
    status: 404,
    headers: { 'Content-Type': 'application/json' }
  });
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);
    const path = url.pathname;
    
    // Set security headers
    const headers