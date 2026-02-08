import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronDown, Beaker, Zap, TrendingUp, Users } from "lucide-react";
import { useState } from "react";

/**
 * Industrial Minimalism Design System - Enhanced
 * - Deep navy (#0F1419) background with sulfur yellow (#FFD700) and acid orange (#FF8C00) accents
 * - Playfair Display for h1 (elegant serif), IBM Plex Mono for h2 (technical), IBM Plex Sans for h3-h6
 * - Roboto for body text (professional, readable)
 * - Realistic industrial photos from internet sources
 * - Sketchfab 3D model embed for interactive visualization
 */

export default function Home() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-accent">
            Sulfuric Acid Production
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            The Contact Process: Industrial Manufacturing of H₂SO₄
          </p>
          <div className="accent-line mx-auto w-24"></div>
          <p className="text-sm text-muted-foreground mt-6 max-w-2xl mx-auto">
            A comprehensive exploration of the world's most important industrial chemical
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="container py-16">
        <h2 className="text-3xl font-bold mb-2 text-accent">Project Team</h2>
        <div className="accent-line w-16 mb-8"></div>
        <p className="text-muted-foreground mb-8">
          10F Class, NIS IB Astana, Kazakhstan
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="team-member">
            <div className="w-24 h-24 rounded-full mx-auto mb-3 bg-secondary border-2 border-accent overflow-hidden flex items-center justify-center">
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663327166338/cXsvBsYiHfVXBVFp.jpeg" 
                alt="Suraganov Amanzhan" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3>Suraganov Amanzhan</h3>
            <p className="text-sm text-muted-foreground">10F</p>
          </div>
          <div className="team-member">
            <div className="w-24 h-24 rounded-full mx-auto mb-3 bg-secondary border-2 border-accent overflow-hidden">
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663327230884/SqZnrcbcuZYeulag.jpg" 
                alt="Zhagipparov Alizar" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3>Zhagipparov Alizar</h3>
            <p className="text-sm text-muted-foreground">10F</p>
          </div>
          <div className="team-member">
            <div className="w-24 h-24 rounded-full mx-auto mb-3 bg-secondary border-2 border-accent overflow-hidden">
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663327230884/tWwiHhuUKfXHquWU.jpg" 
                alt="Uteseitov Ali" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3>Uteseitov Ali</h3>
            <p className="text-sm text-muted-foreground">10F</p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="container py-16">
        <h2 className="text-3xl font-bold mb-2 text-accent">Introduction</h2>
        <div className="accent-line w-16 mb-8"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-foreground mb-4 leading-relaxed">
              The <span className="highlight-accent">Contact process</span> is the principal industrial method for manufacturing concentrated sulfuric acid. First patented in 1831 by British vinegar merchant Peregrine Phillips, this process has become fundamental to global industry.
            </p>
            <p className="text-foreground mb-4 leading-relaxed">
              Sulfuric acid is used to make phosphate fertilizers, detergents, dyes, explosives, petroleum products, and countless inorganic chemicals, making it one of the most important industrial chemicals in the world.
            </p>
            <div className="stats-grid">
              <div className="stat-box">
                <div className="stat-number">$49.94B</div>
                <div className="stat-label">Market by 2030</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">+21%</div>
                <div className="stat-label">Growth 2025-2030</div>
              </div>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden border border-border">
            <img 
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663327230884/SrQMDkmEVauTjiMs.jpg" 
              alt="Chemical Reactor Equipment" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Main Process Section with Diagrams */}
      <section className="container py-16">
        <h2 className="text-3xl font-bold mb-2 text-accent">The Contact Process</h2>
        <div className="accent-line w-16 mb-8"></div>
        
        <p className="text-foreground mb-8 leading-relaxed">
          The Contact process converts sulfur, oxygen, and water into sulfuric acid through a series of carefully controlled chemical reactions. The overall net equation is:
        </p>
        
        <div className="bg-card border border-border rounded-lg p-6 mb-8">
          <p className="text-center text-2xl font-bold text-accent font-mono">
            S + O₂ + H₂O → H₂SO₄
          </p>
        </div>

        <Tabs defaultValue="step1" className="mb-8">
          <TabsList className="grid w-full grid-cols-3 bg-card">
            <TabsTrigger value="step1" className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
              Step 1: Burning
            </TabsTrigger>
            <TabsTrigger value="step2" className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
              Step 2: Oxidation
            </TabsTrigger>
            <TabsTrigger value="step3" className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
              Step 3: Absorption
            </TabsTrigger>
          </TabsList>

          <TabsContent value="step1" className="mt-6">
            <div className="space-y-6">
              <div className="process-card">
                <h3 className="text-xl font-bold text-accent mb-3">Step 1: Sulfur Burning</h3>
                <div className="accent-line w-8"></div>
                <p className="text-foreground mb-4 leading-relaxed">
                  In the first step, sulfur or sulfur-containing materials are burned in dry air to produce sulfur dioxide:
                </p>
                <div className="bg-card border border-border rounded p-4 mb-4">
                  <p className="text-center font-mono text-accent text-lg">S + O₂ → SO₂</p>
                </div>
                <p className="text-foreground mb-4 leading-relaxed">
                  In some plants, sulfur dioxide is obtained by roasting metal sulfide ores such as zinc sulfide (ZnS) or copper sulfide (CuS) instead of elemental sulfur. The hot gas mixture is then cooled and passed through purification units, where dust and impurities such as arsenic compounds are removed to prevent catalyst poisoning.
                </p>
                <div className="bg-secondary/20 border border-secondary rounded p-4">
                  <p className="text-sm text-muted-foreground">
                    <span className="highlight-accent">Key Point:</span> Purification is critical to prevent catalyst deactivation in subsequent steps.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="step2" className="mt-6">
            <div className="space-y-6">
              <div className="process-card">
                <h3 className="text-xl font-bold text-accent mb-3">Step 2: Catalytic Oxidation</h3>
                <div className="accent-line w-8"></div>
                <p className="text-foreground mb-4 leading-relaxed">
                  In the second step, purified sulfur dioxide is oxidized to sulfur trioxide over a solid vanadium(V) oxide catalyst according to the equilibrium reaction:
                </p>
                <div className="bg-card border border-border rounded p-4 mb-4">
                  <p className="text-center font-mono text-accent text-lg">2SO₂(g) + O₂(g) ⇌ 2SO₃(g)</p>
                </div>
                <p className="text-foreground mb-4 leading-relaxed">
                  <span className="highlight-accent">Typical operating conditions:</span>
                </p>
                <ul className="space-y-2 mb-4 text-foreground">
                  <li className="process-step">Temperature: ~450°C</li>
                  <li className="process-step">Pressure: ~200 kPa (≈2 atm)</li>
                  <li className="process-step">Catalyst: Vanadium(V) oxide (V₂O₅) on porous support</li>
                </ul>
                <div className="bg-secondary/20 border border-secondary rounded p-4">
                  <p className="text-sm text-muted-foreground mb-2">
                    <span className="highlight-accent">Why these conditions?</span>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Because the reaction is exothermic, lower temperature favors product formation but slows reaction rate. Higher temperature speeds up reaction but reduces yield. The 450°C compromise with catalyst provides both reasonable rate and high conversion. Multiple catalyst beds with cooling between them maintain optimal temperature.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="step3" className="mt-6">
            <div className="space-y-6">
              <div className="process-card">
                <h3 className="text-xl font-bold text-accent mb-3">Step 3: Absorption & Dilution</h3>
                <div className="accent-line w-8"></div>
                <p className="text-foreground mb-4 leading-relaxed">
                  In the final step, sulfur trioxide is absorbed in concentrated sulfuric acid to form oleum (disulfuric acid), which is then carefully diluted with water to give more sulfuric acid:
                </p>
                <div className="bg-card border border-border rounded p-4 mb-4">
                  <p className="text-center font-mono text-accent text-lg">SO₃ + H₂SO₄ → H₂S₂O₇</p>
                </div>
                <p className="text-foreground mb-4 leading-relaxed">
                  <span className="highlight-orange">Why not react SO₃ directly with water?</span> Direct reaction of sulfur trioxide with water forms a dense mist of acid droplets that is difficult to condense and handle safely. Absorption in concentrated acid avoids this hazard.
                </p>
                <p className="text-foreground leading-relaxed">
                  The final product is purified by controlled absorption, cooling, and storage in corrosion-resistant tanks to obtain commercial sulfuric acid at approximately <span className="highlight-accent">98% concentration</span>.
                </p>
                <div className="bg-secondary/20 border border-secondary rounded p-4 mt-4">
                  <p className="text-sm text-muted-foreground">
                    <span className="highlight-accent">Raw Materials:</span> Elemental sulfur (from natural deposits or fossil fuel desulfurization), oxygen (from air), and water (for dilution).
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Industrial Facility Photos */}
      <section className="container py-16">
        <h2 className="text-3xl font-bold mb-2 text-accent">Industrial Facilities</h2>
        <div className="accent-line w-16 mb-8"></div>
        <p className="text-muted-foreground mb-8">
          Real-world sulfuric acid production plants and equipment showing the scale and complexity of industrial operations.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-lg overflow-hidden border border-border">
            <img 
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663327230884/sgLiiBuCxBXaSWjl.jpg" 
              alt="Sulfuric Acid Production Plant" 
              className="w-full h-auto"
            />
            <div className="bg-card border-t border-border p-4">
              <h4 className="font-bold text-accent mb-2">Sulfuric Acid Production Plant</h4>
              <p className="text-sm text-muted-foreground">
                Industrial sulfuric acid manufacturing facility showing the scale and complexity of modern chemical production operations.
              </p>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden border border-border">
            <img 
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663327230884/TyWofAhrOoJPMvrf.jpg" 
              alt="Industrial Chemical Reactor Equipment" 
              className="w-full h-auto"
            />
            <div className="bg-card border-t border-border p-4">
              <h4 className="font-bold text-accent mb-2">Chemical Reactor Equipment</h4>
              <p className="text-sm text-muted-foreground">
                Industrial chemical reactor systems used in the Contact process for sulfuric acid production with advanced control systems.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <div className="rounded-lg overflow-hidden border border-border">
            <img 
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663327230884/aQoREFlqWKcaQgpc.jpg" 
              alt="Valmet Sulfuric Acid Plant" 
              className="w-full h-auto"
            />
            <div className="bg-card border-t border-border p-4">
              <h4 className="font-bold text-accent mb-2">Modern Sulfuric Acid Plant</h4>
              <p className="text-sm text-muted-foreground">
                State-of-the-art sulfuric acid production facility with optimized process efficiency and environmental controls.
              </p>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden border border-border">
            <img 
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663327230884/qlmnQhfdzPlrWVfM.jpg" 
              alt="Industrial Piping and Valves" 
              className="w-full h-auto"
            />
            <div className="bg-card border-t border-border p-4">
              <h4 className="font-bold text-accent mb-2">Industrial Piping Systems</h4>
              <p className="text-sm text-muted-foreground">
                Complex network of stainless steel pipes, valves, and instrumentation used to transport and control chemical flows in production.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Model Section */}
      <section className="container py-16">
        <h2 className="text-3xl font-bold mb-2 text-accent">3D Process Model</h2>
        <div className="accent-line w-16 mb-8"></div>
        <p className="text-muted-foreground mb-8">
          Interactive 3D visualization of the sulfuric acid production process created by your team. Drag to rotate, scroll to zoom, and explore the equipment.
        </p>
        
        <div className="w-full rounded-lg overflow-hidden border border-border" style={{ aspectRatio: '16 / 9' }}>
          <iframe 
            title="Sulfuric Acid Process | Chemistry | D criterion" 
            frameBorder={0} 
            allowFullScreen 
            allow="autoplay; fullscreen; xr-spatial-tracking" 
            src="https://sketchfab.com/models/97bb289505dd4e0dbded8fa6105ba1be/embed"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        
        <div className="w-full mt-6 bg-secondary/20 border border-secondary rounded p-4">
          <p className="text-sm text-muted-foreground">
            <span className="highlight-accent">🎮 Interactive Controls:</span> Left-click and drag to rotate the model • Scroll wheel to zoom in/out • Right-click to pan • Use fullscreen button for immersive viewing
          </p>
        </div>
      </section>

      {/* Comprehensive Research Section */}
      <section className="container py-16">
        <h2 className="text-3xl font-bold mb-2 text-accent">Research & Analysis</h2>
        <div className="accent-line w-16 mb-8"></div>

        <div className="bg-card border border-border rounded-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-accent mb-4">Industrial Production of Sulfuric Acid: The Contact Process</h3>
          
          <h4 className="text-lg font-bold text-accent mt-6 mb-3">Introduction</h4>
          <p className="text-foreground mb-4 leading-relaxed">
            Sulfuric acid represents one of the most significant chemical compounds in modern industrial society. First patented in 1831 by British vinegar merchant Peregrine Phillips, the Contact Process revolutionized acid production by achieving conversion efficiencies exceeding 99.5 percent, compared to the crude methods of earlier centuries that achieved barely 1 percent conversion. Today, global sulfuric acid production exceeds 231 million tonnes annually, with the market valued at USD 14.4 billion in 2025 and projected to reach USD 21.1 billion by 2033. This industrial process is essential for addressing global challenges in agriculture, metallurgy, and chemical manufacturing.
          </p>

          <h4 className="text-lg font-bold text-accent mt-6 mb-3">The Contact Process: Chemical Principles</h4>
          <p className="text-foreground mb-4 leading-relaxed">
            The Contact Process operates through three distinct chemical stages, each governed by fundamental principles of thermodynamics and kinetics.
          </p>
          
          <div className="bg-secondary/20 border border-secondary rounded p-4 mb-4">
            <p className="text-foreground font-bold mb-2">Stage 1: Sulfur Dioxide Production</p>
            <p className="text-foreground text-sm mb-2">When elemental sulfur is used: S(s) + O₂(g) → SO₂(g)</p>
            <p className="text-foreground text-sm">When sulfide ores are utilized: 4FeS₂(s) + 11O₂(g) → 2Fe₂O₃(s) + 8SO₂(g)</p>
            <p className="text-foreground text-sm mt-2">This highly exothermic reaction generates temperatures exceeding 1300 Kelvin. The hot gases are passed through heat exchangers where thermal energy is recovered to produce high-pressure steam, making the process energy-efficient.</p>
          </div>

          <div className="bg-secondary/20 border border-secondary rounded p-4 mb-4">
            <p className="text-foreground font-bold mb-2">Stage 2: Catalytic Conversion (Most Critical)</p>
            <p className="text-foreground text-sm mb-2">2SO₂(g) + O₂(g) ⇌ 2SO₃(g), ΔH = -196 kJ/mol</p>
            <p className="text-foreground text-sm">This reversible, exothermic reaction demonstrates how scientific principles guide industrial optimization. The reaction is catalyzed by vanadium(V) oxide (V₂O₅) supported on silica with caesium sulfate as a promoter.</p>
          </div>

          <div className="bg-secondary/20 border border-secondary rounded p-4 mb-4">
            <p className="text-foreground font-bold mb-2">Stage 3: Absorption</p>
            <p className="text-foreground text-sm mb-2">SO₃(g) + H₂SO₄(l) → H₂S₂O₇(l), then H₂S₂O₇(l) + H₂O(l) → 2H₂SO₄(l)</p>
            <p className="text-foreground text-sm">The SO₃ cannot be directly hydrated with water as this produces a corrosive fog. Instead, SO₃ is dissolved in concentrated sulfuric acid to form oleum, then carefully reacted with water.</p>
          </div>

          <h4 className="text-lg font-bold text-accent mt-6 mb-3">Optimized Reaction Conditions</h4>
          <p className="text-foreground mb-4 leading-relaxed">
            The Contact Process operates at 400-450°C and 1-2 atmospheres pressure, representing a scientific compromise between competing factors. According to Le Chatelier's Principle, the exothermic forward reaction is favored at lower temperatures, meaning lower temperatures would produce higher percentages of SO₃ in the equilibrium mixture. However, reaction kinetics impose practical constraints. At lower temperatures, the reaction rate decreases substantially, and achieving practical conversion rates would require impractically long residence times. The selected temperature of 400-450°C achieves conversion rates exceeding 99.5 percent within the brief time gases remain in contact with the catalyst.
          </p>
          <p className="text-foreground mb-4 leading-relaxed">
            Similarly, although higher pressures would theoretically improve conversion efficiency, the marginal improvement in conversion does not justify the substantial capital and operational costs of high-pressure reactors. The inlet gas mixture maintains a 1:1 molar ratio of SO₂ to O₂, deliberately maintaining excess oxygen to shift equilibrium toward sulfur trioxide formation, improving conversion without significant additional cost.
          </p>

          <h4 className="text-lg font-bold text-accent mt-6 mb-3">Global Production and Industrial Applications</h4>
          <p className="text-foreground mb-4 leading-relaxed">
            China leads global production at 74 million tonnes annually, followed by the United States (37 million tonnes), India (16 million tonnes), Russia (14 million tonnes), and Morocco (7 million tonnes). Phosphate fertilizer production accounts for 50 percent of global sulfuric acid consumption, making the compound essential for global food security. Metal processing utilizes 10 percent, other industrial applications consume 24 percent, fiber production accounts for 5 percent, and remaining applications use 11 percent.
          </p>

          <h4 className="text-lg font-bold text-accent mt-6 mb-3">Future Developments and Innovations</h4>
          <p className="text-foreground mb-4 leading-relaxed">
            Global demand for sulfuric acid is projected to increase substantially through 2033, driven by agricultural expansion in developing nations and continued industrial development. Research institutions and chemical companies are actively exploring advanced catalyst formulations with improved SO₂ conversion rates, process electrification using renewable energy sources, and alternative production routes to enhance efficiency and reduce environmental impact. BASF and MECS are developing next-generation catalysts that extend lifespan and improve performance. Process electrification represents an emerging strategy to reduce carbon dioxide emissions associated with heat generation in sulfuric acid plants.
          </p>

          <h4 className="text-lg font-bold text-accent mt-6 mb-3">Conclusion</h4>
          <p className="text-foreground mb-4 leading-relaxed">
            The Contact Process demonstrates how scientific principles solve practical industrial challenges while balancing competing constraints. Sulfuric acid production is essential for global food security through phosphate fertilizer production and supports industrial development worldwide. However, the process also creates environmental costs, particularly acid rain from SO₂ emissions. The Contact Process will remain the dominant production method due to its efficiency, but future sustainability requires renewable energy integration and improved catalysts. As global demand increases, continued innovation is necessary to balance economic competitiveness with environmental responsibility.
          </p>

          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground font-bold mb-2">Sources (APA 7th Edition):</p>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Phillips, P. (1831). Patent No. 6096. British Patent Office.</li>
              <li>• Grand View Research. (2025). Sulfuric acid market analysis.</li>
              <li>• Essential Chemical Industry. (2016). Sulfuric acid production.</li>
              <li>• Clark, J. (2023). The Contact Process. LibreTexts Chemistry.</li>
              <li>• Sinophorus. (2025). Future innovations in sulfuric acid production.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Economic Evaluation */}
      <section className="container py-16">
        <h2 className="text-3xl font-bold mb-2 text-accent">Economic Evaluation</h2>
        <div className="accent-line w-16 mb-8"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-accent mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Advantages
            </h3>
            <ul className="space-y-3">
              <li className="process-step text-foreground">
                <span className="highlight-accent">Large-scale production:</span> Enables continuous, concentrated sulfuric acid manufacture with high yields, reducing cost per tonne
              </li>
              <li className="process-step text-foreground">
                <span className="highlight-accent">Low pressure operation:</span> Solid V₂O₅ catalyst at ~200 kPa reduces equipment costs compared to extreme-pressure processes
              </li>
              <li className="process-step text-foreground">
                <span className="highlight-accent">Heat recovery:</span> Exothermic reaction enables steam generation, improving overall energy efficiency
              </li>
              <li className="process-step text-foreground">
                <span className="highlight-accent">Established technology:</span> Proven process with mature supply chains and technical expertise
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-orange-500 mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Disadvantages
            </h3>
            <ul className="space-y-3">
              <li className="process-step text-foreground">
                <span className="highlight-orange">High capital costs:</span> Constructing plants with corrosion-resistant materials and safety systems requires significant investment
              </li>
              <li className="process-step text-foreground">
                <span className="highlight-orange">Hazardous materials:</span> Concentrated sulfuric acid and SO₂ are corrosive and toxic, requiring strict safety protocols
              </li>
              <li className="process-step text-foreground">
                <span className="highlight-orange">Catalyst maintenance:</span> V₂O₅ catalyst requires careful management and periodic replacement
              </li>
              <li className="process-step text-foreground">
                <span className="highlight-orange">Environmental compliance:</span> Emission control systems add operational complexity and cost
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Environmental Evaluation */}
      <section className="container py-16">
        <h2 className="text-3xl font-bold mb-2 text-accent">Environmental Evaluation</h2>
        <div className="accent-line w-16 mb-8"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="process-card">
            <h3 className="text-lg font-bold text-accent mb-3">Positive Impacts</h3>
            <ul className="space-y-2 text-foreground text-sm">
              <li className="process-step">
                <span className="highlight-accent">Waste valorization:</span> Sulfur from fossil fuel desulfurification converts polluting waste into useful raw material
              </li>
              <li className="process-step">
                <span className="highlight-accent">Emission control:</span> Modern absorption towers and tail-gas treatment minimize SO₂ and SO₃ atmospheric release
              </li>
              <li className="process-step">
                <span className="highlight-accent">Fertilizer production:</span> Enables phosphate fertilizer manufacture, supporting global food security
              </li>
              <li className="process-step">
                <span className="highlight-accent">Regulatory compliance:</span> Helps plants meet environmental standards and reduce acid rain precursors
              </li>
            </ul>
          </div>

          <div className="process-card">
            <h3 className="text-lg font-bold text-orange-500 mb-3">Negative Impacts</h3>
            <ul className="space-y-2 text-foreground text-sm">
              <li className="process-step">
                <span className="highlight-orange">Mining impacts:</span> Extraction of sulfur-containing ores damages ecosystems and landscapes
              </li>
              <li className="process-step">
                <span className="highlight-orange">Smelting emissions:</span> Associated smelting operations release heavy metals and SO₂
              </li>
              <li className="process-step">
                <span className="highlight-orange">Acid rain risk:</span> Accidental SO₂ releases can acidify soils and waters, harming aquatic life
              </li>
              <li className="process-step">
                <span className="highlight-orange">Health hazards:</span> Nearby populations face respiratory and health risks from exposure
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Future Outlook */}
      <section className="container py-16">
        <h2 className="text-3xl font-bold mb-2 text-accent">Future Outlook</h2>
        <div className="accent-line w-16 mb-8"></div>

        <div className="space-y-4">
          <div className="process-card">
            <h3 className="text-lg font-bold text-accent mb-2">Expected Growth</h3>
            <p className="text-foreground">
              The Contact process will continue as the dominant sulfuric acid production method due to steady global demand growth, particularly for fertilizer production driven by rising population and food security needs.
            </p>
          </div>

          <div className="process-card">
            <h3 className="text-lg font-bold text-accent mb-2">Technological Improvements</h3>
            <ul className="space-y-2 text-foreground text-sm">
              <li className="process-step">
                <span className="highlight-accent">Advanced catalysts:</span> Development of improved V₂O₅ formulations with higher activity, longer lifetime, and better poisoning resistance
              </li>
              <li className="process-step">
                <span className="highlight-accent">Lower temperatures:</span> New catalyst designs enabling operation at reduced temperatures while maintaining conversion
              </li>
              <li className="process-step">
                <span className="highlight-accent">Alternative supports:</span> New porous materials and reactor designs to increase per-pass conversion
              </li>
            </ul>
          </div>

          <div className="process-card">
            <h3 className="text-lg font-bold text-accent mb-2">Sustainability Focus</h3>
            <ul className="space-y-2 text-foreground text-sm">
              <li className="process-step">
                <span className="highlight-accent">Waste heat recovery:</span> Integration of advanced heat exchangers and steam generation systems
              </li>
              <li className="process-step">
                <span className="highlight-accent">Gas cleaning:</span> Enhanced purification and tail-gas treatment to minimize emissions
              </li>
              <li className="process-step">
                <span className="highlight-accent">Resource management:</span> Careful sulfur sourcing and circular economy approaches
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="container py-16">
        <h2 className="text-3xl font-bold mb-2 text-accent">Conclusion</h2>
        <div className="accent-line w-16 mb-8"></div>

        <div className="bg-card border border-border rounded-lg p-8">
          <p className="text-foreground mb-4 leading-relaxed">
            The Contact process represents a remarkable achievement in chemical engineering—a process that has remained essentially unchanged in principle for nearly two centuries, yet continues to evolve through incremental improvements in catalyst technology, equipment design, and environmental management.
          </p>
          <p className="text-foreground mb-4 leading-relaxed">
            As global demand for sulfuric acid grows with population and agricultural needs, the Contact process will remain central to industrial chemistry. The challenge ahead lies in improving efficiency, reducing environmental impact, and managing sulfur resources sustainably while maintaining the economic viability that has made this process the global standard.
          </p>
          <p className="text-foreground leading-relaxed">
            Understanding the Contact process provides insight into how industrial chemistry balances thermodynamic constraints, economic realities, and environmental responsibilities to produce one of the world's most essential chemicals.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-16">
        <div className="container py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-accent mb-3">Project</h4>
              <p className="text-sm text-muted-foreground">
                Industrial Processes School Project<br />
                NIS IB Astana, Kazakhstan
              </p>
            </div>
            <div>
              <h4 className="font-bold text-accent mb-3">Team</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>Suraganov Amanzhan</li>
                <li>Zhagipparov Alizar</li>
                <li>Uteseitov Ali</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-accent mb-3">Topic</h4>
              <p className="text-sm text-muted-foreground">
                Sulfuric Acid Manufacturing<br />
                Contact Process
              </p>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© 2026 Sulfuric Acid Production Project. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
