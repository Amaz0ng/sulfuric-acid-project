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
              Sulfuric acid represents one of the most significant chemical compounds in modern industrial society. First patented in 1831 by British vinegar merchant Peregrine Phillips, the Contact Process revolutionized acid production by achieving conversion efficiencies exceeding 99.5 percent, compared to crude methods of earlier centuries that achieved barely 1 percent conversion.
            </p>
            <p className="text-foreground mb-4 leading-relaxed">
              Today, global sulfuric acid production exceeds 231 million tonnes annually. The compound enables phosphate fertilizer production, supporting agriculture for billions of people worldwide. Sulfuric acid is also essential for metal refining, petroleum processing, chemical synthesis, and numerous industrial applications that form the backbone of modern manufacturing.
            </p>
            <p className="text-foreground mb-4 leading-relaxed">
              This industrial process is essential for addressing global challenges in agriculture, metallurgy, and chemical manufacturing. The Contact Process demonstrates how scientific principles can be systematically applied to solve practical industrial challenges while balancing competing constraints of thermodynamics, kinetics, economics, and environmental responsibility.
            </p>
            <div className="stats-grid">
              <div className="stat-box">
                <div className="stat-number">231M</div>
                <div className="stat-label">Tonnes/Year Global Production</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">$21.1B</div>
                <div className="stat-label">Market Value by 2033</div>
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
                  In the first stage, elemental sulfur or sulfur-containing materials are burned in dry air to produce sulfur dioxide. When elemental sulfur is used: S(s) + O2(g) → SO2(g). When sulfide ores are utilized: 4FeS2(s) + 11O2(g) → 2Fe2O3(s) + 8SO2(g).
                </p>
                <div className="bg-card border border-border rounded p-4 mb-4">
                  <p className="text-center font-mono text-accent text-sm mb-2">S(s) + O₂(g) → SO₂(g)</p>
                  <p className="text-center font-mono text-accent text-sm">4FeS₂(s) + 11O₂(g) → 2Fe₂O₃(s) + 8SO₂(g)</p>
                </div>
                <p className="text-foreground mb-4 leading-relaxed">
                  This highly exothermic reaction generates temperatures exceeding 1300 Kelvin. The hot gases are passed through heat exchangers where thermal energy is recovered to produce high-pressure steam, making the process energy-efficient. The gas mixture is then cooled and passed through purification units, where dust and impurities such as arsenic compounds are removed to prevent catalyst poisoning in subsequent steps.
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
                    According to Le Chatelier's Principle, the exothermic forward reaction is favored at lower temperatures. However, reaction kinetics impose practical constraints. At lower temperatures, reaction rate decreases substantially. The 400-450°C temperature achieves conversion rates exceeding 99.5 percent within the brief time gases remain in contact with the catalyst. Multiple catalyst beds with cooling between them maintain optimal temperature while maximizing conversion efficiency.
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
                  <p className="text-center font-mono text-accent text-sm mb-2">SO₃ + H₂SO₄ → H₂S₂O₇</p>
                  <p className="text-center font-mono text-accent text-sm">H₂S₂O₇ + H₂O → 2H₂SO₄</p>
                </div>
                <p className="text-foreground mb-4 leading-relaxed">
                  <span className="highlight-orange">Why not react SO₃ directly with water?</span> Direct reaction of sulfur trioxide with water forms a dense mist of acid droplets that is difficult to condense and handle safely. Absorption in concentrated acid avoids this hazard and provides better control over the highly exothermic reaction.
                </p>
                <p className="text-foreground leading-relaxed">
                  The final product is purified by controlled absorption, cooling, and storage in corrosion-resistant tanks to obtain commercial sulfuric acid at approximately <span className="highlight-accent">98% concentration</span>. The inlet gas mixture maintains a 1:1 molar ratio of SO₂ to O₂, deliberately maintaining excess oxygen to shift equilibrium toward sulfur trioxide formation, improving conversion without significant additional cost.
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

      {/* Optimized Reaction Conditions */}
      <section className="container py-16">
        <h2 className="text-3xl font-bold mb-2 text-accent">Optimized Reaction Conditions</h2>
        <div className="accent-line w-16 mb-8"></div>
        
        <p className="text-foreground mb-6 leading-relaxed">
          The Contact Process operates at 400-450 degrees Celsius and 1-2 atmospheres pressure, representing a scientific compromise between competing factors. According to Le Chatelier's Principle, the exothermic forward reaction is favored at lower temperatures, meaning lower temperatures would produce higher percentages of SO3 in the equilibrium mixture. However, reaction kinetics impose practical constraints.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-bold text-accent mb-3">Temperature: 400-450 Celsius</h3>
            <p className="text-foreground text-sm mb-3">
              At lower temperatures, the reaction rate decreases substantially, requiring impractically long residence times. The selected temperature achieves conversion rates exceeding 99.5 percent within brief contact time with the catalyst.
            </p>
            <div className="bg-secondary/20 rounded p-3">
              <p className="text-xs text-muted-foreground"><span className="highlight-accent">Why this range?</span> Optimal balance between thermodynamic equilibrium and reaction kinetics</p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-bold text-accent mb-3">Pressure: 1-2 Atmospheres</h3>
            <p className="text-foreground text-sm mb-3">
              Although higher pressures would theoretically improve conversion efficiency to perhaps 99.7 percent, the marginal improvement does not justify the substantial capital and operational costs of high-pressure reactors.
            </p>
            <div className="bg-secondary/20 rounded p-3">
              <p className="text-xs text-muted-foreground"><span className="highlight-accent">Why this range?</span> Cost-benefit analysis favors low pressure with existing 99.5% efficiency</p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-bold text-accent mb-3">Oxygen Excess: 1:1 Molar Ratio</h3>
            <p className="text-foreground text-sm mb-3">
              The inlet gas mixture maintains a 1:1 molar ratio of SO2 to O2, deliberately maintaining excess oxygen to shift equilibrium toward sulfur trioxide formation, improving conversion without significant additional cost.
            </p>
            <div className="bg-secondary/20 rounded p-3">
              <p className="text-xs text-muted-foreground"><span className="highlight-accent">Why this ratio?</span> Leverages Le Chatelier's Principle for equilibrium optimization</p>
            </div>
          </div>
        </div>

        <div className="bg-secondary/20 border border-secondary rounded-lg p-6">
          <h4 className="text-lg font-bold text-accent mb-3">Catalyst System</h4>
          <p className="text-foreground mb-3">
            The reaction is catalyzed by vanadium(V) oxide (V2O5) supported on silica with caesium sulfate as a promoter. This catalyst system enables the efficient conversion of SO2 to SO3 without being consumed in the reaction.
          </p>
          <p className="text-foreground text-sm text-muted-foreground">
            Modern catalysts are engineered to resist poisoning from trace impurities, maintain activity over extended operating periods, and provide consistent performance across varying feed compositions and operating conditions.
          </p>
        </div>
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

      {/* Global Production and Industrial Applications */}
      <section className="container py-16">
        <h2 className="text-3xl font-bold mb-2 text-accent">Global Production and Industrial Applications</h2>
        <div className="accent-line w-16 mb-8"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-accent mb-4">Global Production Leaders</h3>
            <div className="space-y-3">
              <div className="bg-card border border-border rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-foreground">China</span>
                  <span className="text-accent font-bold">74 Million Tonnes/Year</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2 mt-2">
                  <div className="bg-accent h-2 rounded-full" style={{width: '100%'}}></div>
                </div>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-foreground">United States</span>
                  <span className="text-accent font-bold">37 Million Tonnes/Year</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2 mt-2">
                  <div className="bg-accent h-2 rounded-full" style={{width: '50%'}}></div>
                </div>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-foreground">India</span>
                  <span className="text-accent font-bold">16 Million Tonnes/Year</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2 mt-2">
                  <div className="bg-accent h-2 rounded-full" style={{width: '22%'}}></div>
                </div>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-foreground">Russia</span>
                  <span className="text-accent font-bold">14 Million Tonnes/Year</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2 mt-2">
                  <div className="bg-accent h-2 rounded-full" style={{width: '19%'}}></div>
                </div>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-foreground">Morocco</span>
                  <span className="text-accent font-bold">7 Million Tonnes/Year</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2 mt-2">
                  <div className="bg-accent h-2 rounded-full" style={{width: '9.5%'}}></div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-accent mb-4">Industrial Applications</h3>
            <div className="space-y-3">
              <div className="bg-card border border-border rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-accent font-bold">50%</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Phosphate Fertilizers</h4>
                    <p className="text-sm text-muted-foreground">Essential for global food security and agriculture</p>
                  </div>
                </div>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-accent font-bold">24%</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Other Industrial Uses</h4>
                    <p className="text-sm text-muted-foreground">Chemical synthesis and manufacturing</p>
                  </div>
                </div>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-accent font-bold">10%</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Metal Processing</h4>
                    <p className="text-sm text-muted-foreground">Ore leaching and metal refining</p>
                  </div>
                </div>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-accent font-bold">11%</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Remaining Applications</h4>
                    <p className="text-sm text-muted-foreground">Petroleum processing and other industries</p>
                  </div>
                </div>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-accent font-bold">5%</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Fiber Production</h4>
                    <p className="text-sm text-muted-foreground">Textile and synthetic fiber manufacturing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-secondary/20 border border-secondary rounded-lg p-6">
          <h4 className="text-lg font-bold text-accent mb-3">Market Outlook</h4>
          <p className="text-foreground mb-3">
            Global sulfuric acid market is valued at USD 14.4 billion in 2025 and is projected to reach USD 21.1 billion by 2033, driven by agricultural expansion in developing nations and continued industrial development worldwide.
          </p>
          <p className="text-foreground text-sm text-muted-foreground">
            The compound's critical role in fertilizer production makes it indispensable for global food security, supporting agriculture for billions of people worldwide.
          </p>
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

        {/* 3D Model Component Explanations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-6 bg-orange-500 rounded"></div>
              <h3 className="text-lg font-bold text-accent">1) Orange Box - Sulfur Burner</h3>
            </div>
            <p className="text-foreground text-sm mb-3"><span className="highlight-accent">What it does:</span> Sulfur is burned in air inside this box. Oxygen reacts with sulfur.</p>
            <p className="text-foreground text-sm mb-3"><span className="highlight-accent">What is produced:</span> Sulfur dioxide gas (SO2)</p>
            <p className="text-foreground text-sm"><span className="highlight-accent">Why it is needed:</span> SO2 is the starting material for making sulfuric acid.</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-6 bg-blue-500 rounded"></div>
              <h3 className="text-lg font-bold text-accent">2) Blue Cylinder - Catalytic Converter</h3>
            </div>
            <p className="text-foreground text-sm mb-3"><span className="highlight-accent">What it does:</span> The hot SO2 gas passes through layers of catalyst. Oxygen is present while the gas flows through.</p>
            <p className="text-foreground text-sm mb-3"><span className="highlight-accent">What happens inside:</span> SO2 is changed into SO3 (sulfur trioxide).</p>
            <p className="text-foreground text-sm"><span className="highlight-accent">Why it is needed:</span> SO3 is much more reactive and is needed to make sulfuric acid.</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-6 bg-green-500 rounded"></div>
              <h3 className="text-lg font-bold text-accent">3) Green Tower - Absorption Tower</h3>
            </div>
            <p className="text-foreground text-sm mb-3"><span className="highlight-accent">What it does:</span> SO3 gas enters this tall tower. It is absorbed into concentrated sulfuric acid flowing inside.</p>
            <p className="text-foreground text-sm mb-3"><span className="highlight-accent">What happens inside:</span> The gas dissolves safely into the acid. This prevents dangerous reactions with water.</p>
            <p className="text-foreground text-sm"><span className="highlight-accent">Why it is needed:</span> This step allows sulfuric acid to be made safely and efficiently.</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-6 bg-yellow-500 rounded"></div>
              <h3 className="text-lg font-bold text-accent">4) Yellow Tank - Sulfuric Acid Tank</h3>
            </div>
            <p className="text-foreground text-sm mb-3"><span className="highlight-accent">What it does:</span> The sulfuric acid is collected and stored here. The acid can be diluted to the required concentration.</p>
            <p className="text-foreground text-sm mb-3"><span className="highlight-accent">Final product:</span> Sulfuric acid (H2SO4) ready for industrial use.</p>
          </div>
        </div>

        <div className="mt-8 bg-secondary/20 border border-secondary rounded-lg p-6">
          <h4 className="text-lg font-bold text-accent mb-3">Process Summary</h4>
          <p className="text-foreground">
            Sulfur is burned to form SO2, SO2 is converted into SO3 using a catalyst, SO3 is absorbed into acid, and sulfuric acid is collected. This integrated process demonstrates how the three stages of the Contact Process work together to safely and efficiently produce one of the world's most important industrial chemicals.
          </p>
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
                <span className="highlight-accent">Large-scale production:</span> The Contact Process achieves conversion rates exceeding 99.5 percent, enabling continuous manufacture with exceptional yields. This high efficiency dramatically reduces cost per tonne, making sulfuric acid affordable for global fertilizer production.
              </li>
              <li className="process-step text-foreground">
                <span className="highlight-accent">Low pressure operation:</span> Solid V₂O₅ catalyst operates at approximately 200 kPa, significantly reducing equipment costs compared to extreme-pressure processes. This moderate pressure makes plant construction economically viable.
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
            The Contact Process demonstrates how scientific principles solve practical industrial challenges while balancing competing constraints. Sulfuric acid production is essential for global food security through phosphate fertilizer production and supports industrial development worldwide. However, the process also creates environmental costs, particularly acid rain from SO2 emissions. The Contact Process will remain the dominant production method due to its efficiency, but future sustainability requires renewable energy integration and improved catalysts. As global demand increases, continued innovation is necessary to balance economic competitiveness with environmental responsibility.
          </p>
        </div>
      </section>

      {/* Bibliography */}
      <section className="container py-16">
        <h2 className="text-3xl font-bold mb-2 text-accent">Bibliography</h2>
        <div className="accent-line w-16 mb-8"></div>

        <div className="bg-card border border-border rounded-lg p-8">
          <h3 className="text-lg font-bold text-accent mb-4">References (APA 7th Edition)</h3>
          <div className="space-y-4 text-sm text-foreground">
            <p>[1] Phillips, P. (1831). Patent No. 6096: Improvements in the manufacture of sulphuric acid. British Patent Office. Retrieved from https://www.gracesguide.co.uk/Peregrine_Phillips</p>
            
            <p>[2] Grand View Research. (2025). Sulfuric acid market size, share & trends analysis report by application, by region, and segment forecasts, 2025-2033. Retrieved from https://www.grandviewresearch.com/industry-analysis/sulfuric-acid-market</p>
            
            <p>[3] Essential Chemical Industry. (2016). Sulfuric acid. Retrieved from https://www.essentialchemicalindustry.org/chemicals/sulfuric-acid.html</p>
            
            <p>[4] Clark, J. (2023). The Contact Process. LibreTexts Chemistry. Retrieved from https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Equilibria/Le_Chateliers_Principle/The_Contact_Process</p>
            
            <p>[5] Essential Chemical Industry. (2016). Catalysts used in the Contact Process. Retrieved from https://www.essentialchemicalindustry.org/chemicals/sulfuric-acid.html</p>
            
            <p>[6] Essential Chemical Industry. (2016). Absorption of sulfur trioxide. Retrieved from https://www.essentialchemicalindustry.org/chemicals/sulfuric-acid.html</p>
            
            <p>[7] LibreTexts Chemistry. (2023). Temperature effects on equilibrium. Retrieved from https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Equilibria/Le_Chateliers_Principle/The_Contact_Process</p>
            
            <p>[8] Clark, J. (2023). Optimization of Contact Process conditions. LibreTexts Chemistry. Retrieved from https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Equilibria/Le_Chateliers_Principle/The_Contact_Process</p>
            
            <p>[9] LibreTexts Chemistry. (2023). Pressure effects on equilibrium reactions. Retrieved from https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Equilibria/Le_Chateliers_Principle/The_Contact_Process</p>
            
            <p>[10] Clark, J. (2023). Excess oxygen in Contact Process. LibreTexts Chemistry. Retrieved from https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Equilibria/Le_Chateliers_Principle/The_Contact_Process</p>
            
            <p>[11] Essential Chemical Industry. (2016). Global sulfuric acid production statistics. Retrieved from https://www.essentialchemicalindustry.org/chemicals/sulfuric-acid.html</p>
            
            <p>[12] Essential Chemical Industry. (2016). Uses of sulfuric acid. Retrieved from https://www.essentialchemicalindustry.org/chemicals/sulfuric-acid.html</p>
            
            <p>[13] Baymineral. (2025). Sulfuric acid uses in industry: Fertilizers, mining & chemicals. Retrieved from https://www.baymineral.com/en/blogDetail/what-is-sulfur-and-what-is-it-used-for</p>
            
            <p>[14] Grand View Research. (2025). Capital requirements and operational costs in sulfuric acid production. Retrieved from https://www.grandviewresearch.com/industry-analysis/sulfuric-acid-market</p>
            
            <p>[15] Essential Chemical Industry. (2016). Heat recovery in sulfuric acid production. Retrieved from https://www.essentialchemicalindustry.org/chemicals/sulfuric-acid.html</p>
            
            <p>[16] United States Environmental Protection Agency. (2025). What is acid rain? Retrieved from https://www.epa.gov/acidrain/what-is-acid-rain</p>
            
            <p>[17] Sinophorus. (2025). Future innovations in sulfuric acid production and catalysis. Retrieved from https://en.sinophorus.com/blog/innovations-in-sulfuric-acid-production/</p>
          </div>
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
