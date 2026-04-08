const defaultCartridges = [
  {
    name: "code-gen",
    version: "1.2.0",
    description: "Generates code snippets and full modules based on natural language prompts.",
    author: "DevCore",
    rating: 4.7,
    downloads: 12500,
    skills: ["code generation", "syntax analysis", "debugging"],
    rules: ["Requires code context", "Must cite sources", "No production deployment without review"],
    category: "development"
  },
  {
    name: "delegation",
    version: "1.0.3",
    description: "Automatically delegates tasks to appropriate sub-agents based on skill matching.",
    author: "FlowLabs",
    rating: 4.5,
    downloads: 8900,
    skills: ["task routing", "load balancing", "priority assessment"],
    rules: ["Must maintain audit trail", "Timeout after 30 seconds", "Fallback to human if confidence < 70%"],
    category: "coordination"
  },
  {
    name: "error-recovery",
    version: "2.1.0",
    description: "Detects and recovers from runtime errors with automated rollback procedures.",
    author: "ResilientAI",
    rating: 4.9,
    downloads: 15600,
    skills: ["exception handling", "state restoration", "root cause analysis"],
    rules: ["Three retry attempts max", "Preserve original input", "Log all recovery actions"],
    category: "reliability"
  },
  {
    name: "planning",
    version: "1.5.2",
    description: "Creates step-by-step execution plans for complex multi-stage tasks.",
    author: "StrategyNet",
    rating: 4.6,
    downloads: 11200,
    skills: ["dependency resolution", "resource estimation", "critical path analysis"],
    rules: ["Validate prerequisites", "Include contingency branches", "Update plan after each step"],
    category: "coordination"
  },
  {
    name: "socratic-method",
    version: "1.0.8",
    description: "Engages users with probing questions to clarify ambiguous requests and deepen understanding.",
    author: "DialogueSystems",
    rating: 4.3,
    downloads: 7400,
    skills: ["question formulation", "assumption checking", "concept clarification"],
    rules: ["Maximum three clarifying questions", "Respect user's time", "Document learned context"],
    category: "communication"
  },
  {
    name: "spaced-repetition",
    version: "1.3.1",
    description: "Implements spaced repetition algorithms for optimal knowledge retention and recall.",
    author: "MnemoTech",
    rating: 4.8,
    downloads: 6300,
    skills: ["interval scheduling", "recall probability", "difficulty calibration"],
    rules: ["Adjust intervals based on performance", "Prioritize weak areas", "Daily review limit: 50 items"],
    category: "learning"
  },
  {
    name: "fishing-strategy",
    version: "1.1.4",
    description: "Optimizes fishing approaches based on location, season, and target species.",
    author: "AnglerAI",
    rating: 4.4,
    downloads: 3200,
    skills: ["pattern recognition", "environmental analysis", "gear recommendation"],
    rules: ["Check local regulations", "Prioritize sustainable practices", "Weather safety first"],
    category: "specialized"
  },
  {
    name: "dnd-narration",
    version: "2.0.0",
    description: "Generates immersive Dungeons & Dragons narratives with consistent world-building.",
    author: "LoreForge",
    rating: 4.9,
    downloads: 9800,
    skills: ["story generation", "character consistency", "plot development"],
    rules: ["Maintain tone consistency", "Respect player agency", "Include sensory details"],
    category: "entertainment"
  }
];

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Skill Cartridge Registry</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Inter', sans-serif;
            background: #0a0a0f;
            color: #e2e8f0;
            line-height: 1.6;
            min-height: 100vh;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        /* Header & Hero */
        header {
            padding: 40px 0;
            border-bottom: 1px solid #1e293b;
        }
        
        .hero {
            text-align: center;
            padding: 80px 0;
            background: linear-gradient(180deg, #0a0a0f 0%, #0f172a 100%);
        }
        
        .hero h1 {
            font-size: 3.5rem;
            font-weight: 700;
            background: linear-gradient(90deg, #818cf8, #60a5fa);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            margin-bottom: 20px;
        }
        
        .hero p {
            font-size: 1.25rem;
            color: #94a3b8;
            max-width: 600px;
            margin: 0 auto 40px;
        }
        
        .cta-button {
            display: inline-block;
            background: #818cf8;
            color: white;
            padding: 12px 32px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            font-size: 1.1rem;
            transition: all 0.3s ease;
            border: 2px solid transparent;
        }
        
        .cta-button:hover {
            background: transparent;
            border-color: #818cf8;
            color: #818cf8;
        }
        
        /* Sections */
        section {
            padding: 80px 0;
        }
        
        .section-title {
            font-size: 2.5rem;
            font-weight: 600;
            margin-bottom: 40px;
            color: #f1f5f9;
            text-align: center;
        }
        
        /* How It Works */
        .steps {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 30px;
            margin-top: 40px;
        }
        
        .step {
            background: #1e293b;
            padding: 30px;
            border-radius: 12px;
            border-left: 4px solid #818cf8;
        }
        
        .step-number {
            display: inline-block;
            background: #818cf8;
            color: white;
            width: 36px;
            height: 36px;
            border-radius: 50%;
            text-align: center;
            line-height: 36px;
            font-weight: 600;
            margin-bottom: 20px;
        }
        
        /* Features */
        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
            margin-top: 40px;
        }
        
        .feature {
            background: #1e293b;
            padding: 30px;
            border-radius: 12px;
            transition: transform 0.3s ease;
        }
        
        .feature:hover {
            transform: translateY(-5px);
        }
        
        .feature-icon {
            font-size: 2.5rem;
            margin-bottom: 20px;
            color: #818cf8;
        }
        
        /* Fleet Integration */
        .integration {
            background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
            padding: 60px;
            border-radius: 16px;
            margin-top: 40px;
            border: 1px solid #334155;
        }
        
        .code-block {
            background: #0a0a0f;
            padding: 20px;
            border-radius: 8px;
            font-family: 'Courier New', monospace;
            margin: 20px 0;
            border: 1px solid #334155;
            overflow-x: auto;
        }
        
        /* Footer */
        footer {
            background: #0f172a;
            padding: 40px 0;
            border-top: 1px solid #1e293b;
            margin-top: 80px;
        }
        
        .footer-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 20px;
        }
        
        .footer-links {
            display: flex;
            gap: 30px;
        }
        
        .footer-links a {
            color: #94a3b8;
            text-decoration: none;
            transition: color 0.3s ease;
        }
        
        .footer-links a:hover {
            color: #818cf8;
        }
        
        /* Responsive */
        @media (max-width: 768px) {
            .hero h1 {
                font-size: 2.5rem;
            }
            
            .section-title {
                font-size: 2rem;
            }
            
            .integration {
                padding: 30px;
            }
            
            .footer-content {
                flex-direction: column;
                text-align: center;
            }
        }
    </style>
</head>
<body>
    <header class="container">
        <div style="display: flex; justify-content: space-between; align-items: center;">
            <div style="font-size: 1.5rem; font-weight: 700; color: #818cf8;">SkillCartridge</div>
            <nav style="display: flex; gap: 30px;">
                <a href="#how-it-works" style="color: #e2e8f0; text-decoration: none;">How It Works</a>
                <a href="#features" style="color: #e2e8f0; text-decoration: none;">Features</a>
                <a href="#integration" style="color: #e2e8f0; text-decoration: none;">Integration</a>
                <a href="/api/cartridges" style="color: #818cf8; text-decoration: none;">API</a>
            </nav>
        </div>
    </header>
    
    <section class="hero">
        <div class="container">
            <h1>Skill Cartridge Registry</h1>
            <p>Discover, rate, and install specialized skill cartridges for your AI vessels. Enhance capabilities with modular, interoperable components.</p>
            <a href="#features" class="cta-button">Explore Cartridges</a>
        </div>
    </section>
    
    <section id="how-it-works" class="container">
        <h2 class="section-title">How It Works</h2>
        <div class="steps">
            <div class="step">
                <div class="step-number">1</div>
                <h3 style="margin-bottom: 15px; color: #f1f5f9;">Discover</h3>
                <p style="color: #94a3b8;">Browse our curated marketplace of skill cartridges, each designed for specific capabilities.</p>
            </div>
            <div class="step">
                <div class="step-number">2</div>
                <h3 style="margin-bottom: 15px; color: #f1f5f9;">Install</h3>
                <p style="color: #94a3b8;">Install cartridges with a single API call. They automatically integrate with your vessel's runtime.</p>
            </div>
            <div class="step">
                <div class="step-number">3</div>
                <h3 style="margin-bottom: 15px; color: #f1f5f9;">Enhance</h3>
                <p style="color: #94a3b8;">Watch your vessel gain new abilities instantly. Rate and review cartridges to help others.</p>
            </div>
        </div>
    </section>
    
    <section id="features" class="container">
        <h2 class="section-title">Featured Cartridges</h2>
        <div class="features-grid">
            <div class="feature">
                <div class="feature-icon">⚡</div>
                <h3 style="margin-bottom: 15px; color: #f1f5f9;">Code Generation</h3>
                <p style="color: #94a3b8;">Generate code snippets and full modules based on natural language prompts with intelligent context awareness.</p>
                <div style="margin-top: 20px; color: #818cf8; font-weight: 500;">12.5k downloads • 4.7★</div>
            </div>
            <div class="feature">
                <div class="feature-icon">🔄</div>
                <h3 style="margin-bottom: 15px; color: #f1f5f9;">Error Recovery</h3>
                <p style="color: #94a3b8;">Automated rollback and recovery procedures with root cause analysis and state restoration.</p>
                <div style="margin-top: 20px; color: #818cf8; font-weight: 500;">15.6k downloads • 4.9★</div>
            </div>
            <div class="feature">
                <div class="feature-icon">🎮</div>
                <h3 style="margin-bottom: 15px; color: #f1f5f9;">D&D Narration</h3>
                <p style="color: #94a3b8;">Immersive narrative generation for tabletop RPGs with consistent world-building and character development.</p>
                <div style="margin-top: 20px; color: #818cf8; font-weight: 500;">9.8k downloads • 4.9★</div>
            </div>
        </div>
    </section>
    
    <section id="integration" class="container">
        <h2 class="section-title">Fleet Integration</h2>
        <div class="integration">
            <h3 style="margin-bottom: 20px; color: #f1f5f9;">Simple API Integration</h3>
            <p style="color: #94a3b8; margin-bottom: 20px;">Integrate skill cartridges into your vessel with a single HTTP request:</p>
            
            <div class="code-block">
                <code style="color: #818cf8;">POST</code> <code style="color: #e2e8f0;">/api/install</code><br>
                <code style="color: #60a5fa;">{</code><br>
                <code style="color: #60a5fa;">  "cartridge": "code-gen",</code><br>
                <code style="color: #60a5fa;">  "vessel_id": "your-vessel-id"</code><br>
                <code style="color: #60a5fa;">}</code>
            </div>
            
            <p style="color: #94a3b8; margin-top: 20px;">All cartridges are self-contained JSON modules that follow the Cocapn runtime specification for seamless integration.</p>
        </div>
    </section>
    
    <footer>
        <div class="container">
            <div class="footer-content">
                <div style="color: #94a3b8;">
                    <div style="font-size: 1.2rem; font-weight: 600; color: #818cf8; margin-bottom: 10px;">SkillCartridge Registry</div>
                    <div>Modular AI capabilities marketplace</div>
                </div>
                
                <div class="footer-links">
                    <a href="/api/cartridges">API Docs</a>
                    <a href="/health">Health Status</a>
                    <a href="/vessel.json">Fleet Metadata</a>
                </div>
                
                <div style="color: #64748b; font-size: 0.9rem;">
                    <i style="color:#888">Built with <a href="https://github.com/Lucineer/cocapn-ai" style="color:#818cf8">Cocapn</a> — the open-source agent runtime.</i>
                </div>
            </div>
        </div>
    </footer>
    
    <script>
        // Simple client-side search functionality
        document.addEventListener('DOMContentLoaded', function() {
            console.log('Skill Cartridge Registry loaded');
            
            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    if(targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if(targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        });
    </script>
</body>
</html>`;

export default {
  async fetch(request: Request, env: any): Promise<Response> {
    const url = new URL(request.url);
    const path = url.pathname;
    
    // Security headers
    const securityHeaders = {
      'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; frame-ancestors 'none'",
      'X-Frame-Options': 'DENY',
      'X-Content-Type-Options': 'nosniff',
      'Referrer-Policy': 'strict-origin-when-cross-origin'
    };

    // Health endpoint
    if (path === '/health') {
      return new Response(JSON.stringify({
        status: 'ok',
        timestamp: new Date().toISOString(),
        service: 'skill-cartridge-registry',
        version: '1.0.0'
      }), {
        headers: {
          'Content-Type': 'application/json',
          ...securityHeaders
        }
      });
    }

    // Fleet metadata
    if (path === '/vessel.json') {
      return new Response(JSON.stringify({
        name: "skill-cartridge-registry",
        version: "1.0.0",
        description: "JSON skill cartridge marketplace for AI vessels",
        capabilities: ["cartridge_discovery", "rating_system", "installation_api"],
        endpoints: [
          "/api/cartridges",
          "/api/install",
          "/api/rate"
        ],
        built_with: "Cocapn AI Runtime",
        repository: "https://github.com/Lucineer/cocapn-ai"
      }), {
        headers: {
          'Content-Type': 'application/json',
          ...securityHeaders
        }
      });
    }

    // API: Get cartridges
    if (path === '/api/cartridges') {
      const searchParams = url.searchParams;
      const category = searchParams.get('category');
      const minRating = searchParams.get('min_rating');
      const searchQuery = searchParams.get('q');
      
      let filtered = [...defaultCartridges];
      
      // Filter by category
      if (category) {
        filtered = filtered.filter(c => c.category === category);
      }
      
      // Filter by minimum rating
      if (minRating) {
        const rating = parseFloat(minRating);
        if (!isNaN(rating)) {
          filtered = filtered.filter(c => c.rating >= rating);
        }
      }
      
      // Search by name or description
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(c => 
          c.name.toLowerCase().includes(query) || 
          c.description.toLowerCase().includes(query) ||
          c.skills.some(skill => skill.toLowerCase().includes(query))
        );
      }
      
      // Sort by downloads (default)
      filtered.sort((a, b) => b.downloads - a.downloads);
      
      return new Response(JSON.stringify({
        cartridges: filtered,
        count: filtered.length,
        total: defaultCartridges.length
      }), {
        headers: {
          'Content-Type': 'application/json',
          ...securityHeaders
        }
      });
    }

    // API: Install cartridge
    if (path === '/api/install' && request.method === 'POST') {
      try {
        const body = await request.json();
        const { cartridge, vessel_id } = body;
        
        if (!cartridge || !vessel_id) {
          return new Response(JSON.stringify({
            error: 'Missing required fields: cartridge and vessel_id'
          }), {
            status: 400,
            headers: {
              'Content-Type': 'application/json',
              ...securityHeaders
            }
          });
        }
        
        // Find the cartridge
        const foundCartridge = defaultCartridges.find(c => c.name === cartridge);
        if (!foundCartridge) {
          return new Response(JSON.stringify({
            error: `Cartridge '${cartridge}' not found`
          }), {
            status: 404,
            headers: {
              'Content-Type': 'application/json',
              ...securityHeaders
            }
          });
        }
        
        // In a real implementation, you would:
        // 1. Validate the vessel_id
        // 2. Store installation record in KV
        // 3. Trigger deployment to the vessel
        // 4. Increment download count
        
        return new Response(JSON.stringify({
          success: true,
          message: `Cartridge '${cartridge}' installed on vessel '${vessel_id}'`,
          cartridge: foundCartridge,
          installation_id: `inst_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          timestamp: new Date().toISOString()
        }),