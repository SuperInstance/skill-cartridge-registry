const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Skill Cartridge Registry</title>
    <meta name="description" content="Discover and integrate modular AI skill cartridges">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        :root {
            --bg-primary: #0a0a0f;
            --bg-secondary: #11111f;
            --bg-card: #151522;
            --accent: #818cf8;
            --text-primary: #f8fafc;
            --text-secondary: #cbd5e1;
            --border: #2d2d42;
            --radius: 12px;
            --transition: all 0.3s ease;
        }
        
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            background: var(--bg-primary);
            color: var(--text-primary);
            line-height: 1.6;
            min-height: 100vh;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        /* Hero Section */
        .hero {
            padding: 80px 0;
            text-align: center;
            background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
            border-bottom: 1px solid var(--border);
        }
        
        .hero h1 {
            font-size: 3.5rem;
            font-weight: 800;
            background: linear-gradient(90deg, var(--accent), #a5b4fc);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            margin-bottom: 20px;
        }
        
        .hero p {
            font-size: 1.25rem;
            color: var(--text-secondary);
            max-width: 600px;
            margin: 0 auto 40px;
        }
        
        .cta-button {
            display: inline-block;
            padding: 14px 32px;
            background: var(--accent);
            color: var(--bg-primary);
            text-decoration: none;
            border-radius: var(--radius);
            font-weight: 600;
            font-size: 1.1rem;
            transition: var(--transition);
            border: 2px solid transparent;
        }
        
        .cta-button:hover {
            background: transparent;
            color: var(--accent);
            border-color: var(--accent);
            transform: translateY(-2px);
        }
        
        /* Stats Section */
        .stats {
            padding: 60px 0;
            background: var(--bg-secondary);
        }
        
        .stats h2 {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 50px;
            color: var(--text-primary);
        }
        
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 30px;
            max-width: 900px;
            margin: 0 auto;
        }
        
        .stat-card {
            background: var(--bg-card);
            padding: 30px;
            border-radius: var(--radius);
            text-align: center;
            border: 1px solid var(--border);
            transition: var(--transition);
        }
        
        .stat-card:hover {
            border-color: var(--accent);
            transform: translateY(-5px);
        }
        
        .stat-number {
            font-size: 2.5rem;
            font-weight: 700;
            color: var(--accent);
            margin-bottom: 10px;
        }
        
        .stat-label {
            color: var(--text-secondary);
            font-size: 1rem;
        }
        
        /* Browse Section */
        .browse {
            padding: 80px 0;
        }
        
        .browse h2 {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 50px;
            color: var(--text-primary);
        }
        
        .cartridges-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 30px;
            margin-bottom: 60px;
        }
        
        .cartridge-card {
            background: var(--bg-card);
            border-radius: var(--radius);
            padding: 30px;
            border: 1px solid var(--border);
            transition: var(--transition);
            position: relative;
            overflow: hidden;
        }
        
        .cartridge-card:hover {
            border-color: var(--accent);
            transform: translateY(-5px);
        }
        
        .cartridge-card::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: var(--accent);
            transform: scaleX(0);
            transition: transform 0.3s ease;
        }
        
        .cartridge-card:hover::before {
            transform: scaleX(1);
        }
        
        .cartridge-icon {
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, var(--accent), #a5b4fc);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 20px;
            font-size: 1.5rem;
            font-weight: 700;
        }
        
        .cartridge-title {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 10px;
            color: var(--text-primary);
        }
        
        .cartridge-desc {
            color: var(--text-secondary);
            font-size: 0.95rem;
            margin-bottom: 20px;
        }
        
        .cartridge-tag {
            display: inline-block;
            padding: 4px 12px;
            background: rgba(129, 140, 248, 0.1);
            color: var(--accent);
            border-radius: 20px;
            font-size: 0.85rem;
            font-weight: 500;
        }
        
        /* API Docs Section */
        .api-docs {
            padding: 60px 0;
            background: var(--bg-secondary);
            border-top: 1px solid var(--border);
            border-bottom: 1px solid var(--border);
        }
        
        .api-docs h2 {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 50px;
            color: var(--text-primary);
        }
        
        .endpoint {
            background: var(--bg-card);
            border-radius: var(--radius);
            padding: 25px;
            margin-bottom: 20px;
            border: 1px solid var(--border);
        }
        
        .method {
            display: inline-block;
            padding: 6px 12px;
            background: var(--accent);
            color: var(--bg-primary);
            border-radius: 6px;
            font-weight: 600;
            font-size: 0.9rem;
            margin-right: 15px;
        }
        
        .path {
            font-family: 'Monaco', 'Consolas', monospace;
            color: var(--text-primary);
            font-size: 1.1rem;
        }
        
        .description {
            color: var(--text-secondary);
            margin-top: 15px;
            font-size: 0.95rem;
        }
        
        .response {
            margin-top: 15px;
            padding: 15px;
            background: rgba(129, 140, 248, 0.05);
            border-radius: 8px;
            border-left: 4px solid var(--accent);
        }
        
        .response pre {
            font-family: 'Monaco', 'Consolas', monospace;
            font-size: 0.9rem;
            color: var(--text-secondary);
            overflow-x: auto;
        }
        
        /* Footer */
        footer {
            padding: 40px 0;
            text-align: center;
            color: var(--text-secondary);
            font-size: 0.9rem;
        }
        
        .footer-links {
            display: flex;
            justify-content: center;
            gap: 30px;
            margin-bottom: 20px;
        }
        
        .footer-links a {
            color: var(--text-secondary);
            text-decoration: none;
            transition: var(--transition);
        }
        
        .footer-links a:hover {
            color: var(--accent);
        }
        
        .fleet-footer {
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid var(--border);
            color: var(--text-secondary);
            font-size: 0.85rem;
        }
        
        /* Responsive */
        @media (max-width: 768px) {
            .hero h1 {
                font-size: 2.5rem;
            }
            
            .hero p {
                font-size: 1.1rem;
                padding: 0 20px;
            }
            
            .stats-grid,
            .cartridges-grid {
                grid-template-columns: 1fr;
            }
            
            .footer-links {
                flex-direction: column;
                gap: 15px;
            }
        }
    </style>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
</head>
<body>
    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <h1>Skill Cartridge Registry</h1>
            <p>Discover, integrate, and deploy modular AI skill cartridges. Enhance your AI systems with specialized capabilities.</p>
            <a href="#browse" class="cta-button">Browse Cartridges</a>
        </div>
    </section>

    <!-- Stats Section -->
    <section class="stats">
        <div class="container">
            <h2>Registry Statistics</h2>
            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-number">8</div>
                    <div class="stat-label">Built-in Cartridges</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">100%</div>
                    <div class="stat-label">Uptime</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">24/7</div>
                    <div class="stat-label">API Access</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">0</div>
                    <div class="stat-label">Dependencies</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Browse Section -->
    <section class="browse" id="browse">
        <div class="container">
            <h2>Available Cartridges</h2>
            <div class="cartridges-grid">
                <div class="cartridge-card">
                    <div class="cartridge-icon">CG</div>
                    <h3 class="cartridge-title">Code Generation</h3>
                    <p class="cartridge-desc">Generate code in multiple languages with best practices and documentation.</p>
                    <span class="cartridge-tag">Development</span>
                </div>
                <div class="cartridge-card">
                    <div class="cartridge-icon">DL</div>
                    <h3 class="cartridge-title">Delegation</h3>
                    <p class="cartridge-desc">Smart task delegation and workflow distribution across AI systems.</p>
                    <span class="cartridge-tag">Coordination</span>
                </div>
                <div class="cartridge-card">
                    <div class="cartridge-icon">ER</div>
                    <h3 class="cartridge-title">Error Recovery</h3>
                    <p class="cartridge-desc">Automatic error detection and recovery strategies for robust operations.</p>
                    <span class="cartridge-tag">Reliability</span>
                </div>
                <div class="cartridge-card">
                    <div class="cartridge-icon">PL</div>
                    <h3 class="cartridge-title">Planning</h3>
                    <p class="cartridge-desc">Strategic planning and decision-making frameworks for complex tasks.</p>
                    <span class="cartridge-tag">Strategy</span>
                </div>
                <div class="cartridge-card">
                    <div class="cartridge-icon">SM</div>
                    <h3 class="cartridge-title">Socratic Method</h3>
                    <p class="cartridge-desc">Question-based dialogue to stimulate critical thinking and expose ideas.</p>
                    <span class="cartridge-tag">Education</span>
                </div>
                <div class="cartridge-card">
                    <div class="cartridge-icon">SR</div>
                    <h3 class="cartridge-title">Spaced Repetition</h3>
                    <p class="cartridge-desc">Optimized learning schedules for maximum knowledge retention.</p>
                    <span class="cartridge-tag">Learning</span>
                </div>
                <div class="cartridge-card">
                    <div class="cartridge-icon">FS</div>
                    <h3 class="cartridge-title">Fishing Strategy</h3>
                    <p class="cartridge-desc">Adaptive information gathering and resource location techniques.</p>
                    <span class="cartridge-tag">Research</span>
                </div>
                <div class="cartridge-card">
                    <div class="cartridge-icon">DN</div>
                    <h3 class="cartridge-title">D&D Narration</h3>
                    <p class="cartridge-desc">Immersive storytelling and narrative generation for role-playing games.</p>
                    <span class="cartridge-tag">Entertainment</span>
                </div>
            </div>
        </div>
    </section>

    <!-- API Docs Section -->
    <section class="api-docs">
        <div class="container">
            <h2>API Documentation</h2>
            <div class="endpoint">
                <div>
                    <span class="method">GET</span>
                    <span class="path">/api/cartridges</span>
                </div>
                <p class="description">Retrieve a JSON array of all available skill cartridges with their metadata.</p>
                <div class="response">
                    <pre>{
  "cartridges": [
    {
      "id": "code-gen",
      "name": "Code Generation",
      "description": "Generate code in multiple languages...",
      "version": "1.0.0",
      "tags": ["development"]
    },
    ...
  ]
}</pre>
                </div>
            </div>
            <div class="endpoint">
                <div>
                    <span class="method">GET</span>
                    <span class="path">/health</span>
                </div>
                <p class="description">Health check endpoint to verify API availability.</p>
                <div class="response">
                    <pre>{
  "status": "ok",
  "timestamp": "2024-01-15T10:30:00Z"
}</pre>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-links">
                <a href="#browse">Browse Cartridges</a>
                <a href="#api">API Documentation</a>
                <a href="https://developers.cloudflare.com/workers/" target="_blank">Cloudflare Workers</a>
                <a href="https://github.com" target="_blank">GitHub</a>
            </div>
            <p>Skill Cartridge Registry &copy; 2024. All cartridges are open and modular.</p>
            <div class="fleet-footer">
                Deployed globally on Cloudflare's edge network. Zero dependencies. Built for speed.
            </div>
        </div>
    </footer>
</body>
</html>`;

const cartridges = [
    {
        id: "code-gen",
        name: "Code Generation",
        description: "Generate code in multiple languages with best practices and documentation.",
        version: "1.0.0",
        tags: ["development"],
        author: "Registry Team"
    },
    {
        id: "delegation",
        name: "Delegation",
        description: "Smart task delegation and workflow distribution across AI systems.",
        version: "1.0.0",
        tags: ["coordination"],
        author: "Registry Team"
    },
    {
        id: "error-recovery",
        name: "Error Recovery",
        description: "Automatic error detection and recovery strategies for robust operations.",
        version: "1.0.0",
        tags: ["reliability"],
        author: "Registry Team"
    },
    {
        id: "planning",
        name: "Planning",
        description: "Strategic planning and decision-making frameworks for complex tasks.",
        version: "1.0.0",
        tags: ["strategy"],
        author: "Registry Team"
    },
    {
        id: "socratic-method",
        name: "Socratic Method",
        description: "Question-based dialogue to stimulate critical thinking and expose ideas.",
        version: "1.0.0",
        tags: ["education"],
        author: "Registry Team"
    },
    {
        id: "spaced-repetition",
        name: "Spaced Repetition",
        description: "Optimized learning schedules for maximum knowledge retention.",
        version: "1.0.0",
        tags: ["learning"],
        author: "Registry Team"
    },
    {
        id: "fishing-strategy",
        name: "Fishing Strategy",
        description: "Adaptive information gathering and resource location techniques.",
        version: "1.0.0",
        tags: ["research"],
        author: "Registry Team"
    },
    {
        id: "dnd-narration",
        name: "D&D Narration",
        description: "Immersive storytelling and narrative generation for role-playing games.",
        version: "1.0.0",
        tags: ["entertainment"],
        author: "Registry Team"
    }
];

const handler = async (request: Request): Promise<Response> => {
    const url = new URL(request.url);
    const path = url.pathname;

    // Security headers
    const headers = {
        "Content-Type": "text/html",
        "Content-Security-Policy": "default-src 'self'; style-src 'self' https://fonts.googleapis.com; font-src https://fonts.gstatic.com;",
        "X-Frame-Options": "DENY",
        "X-Content-Type-Options": "nosniff",
        "Referrer-Policy": "strict-origin-when-cross-origin"
    };

    // API endpoints
    if (path === "/api/cartridges") {
        return new Response(JSON.stringify({ cartridges }), {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        });
    }

    if (path === "/health") {
        return new Response(JSON.stringify({
            status: "ok",
            timestamp: new Date().toISOString()
        }), {
            headers: {
                "Content-Type": "application/json"
            }
        });
    }

    // Serve HTML for all other routes
    if (path === "/" || !path.startsWith("/api")) {
        return new Response(html, { headers });
    }

    // 404 for unknown API routes
    return new Response(JSON.stringify({ error: "Not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" }
    });
};

export default {
    fetch: handler
};