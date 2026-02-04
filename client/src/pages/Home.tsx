import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronDown, Beaker, Zap, TrendingUp, Users } from "lucide-react";
import { useState } from "react";

/**
 * Industrial Minimalism Design System - Enhanced
 * - Deep navy (#0F1419) background with sulfur yellow (#FFD700) and acid orange (#FF8C00) accents
 * - Playfair Display for h1 (elegant serif), IBM Plex Mono for h2 (technical), IBM Plex Sans for h3-h6
 * - Roboto for body text (professional, readable)
 * - Multiple diagrams and industrial photos showing process equipment
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
          {["Suraganov Amanzhan", "Zhagipparov Alizar", "Uteseitov Ali"].map((name) => (
            <div key={name} className="team-member">
              <Users className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3>{name}</h3>
              <p className="text-sm text-muted-foreground">10F</p>
            </div>
          ))}
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
              src="https://private-us-east-1.manuscdn.com/sessionFile/cHEEmKNM7UU47jMzBNQjfs/sandbox/nSD48et9n9XZonDnJdtq5m-img-2_1770177262000_na1fn_Y2F0YWx5c3QtY29udmVydGVyLWRpYWdyYW0.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvY0hFRW1LTk03VVU0N2pNekJOUWpmcy9zYW5kYm94L25TRDQ4ZXQ5bjlYWm9uRG5KZHRxNW0taW1nLTJfMTc3MDE3NzI2MjAwMF9uYTFmbl9ZMkYwWVd4NWMzUXRZMjl1ZG1WeWRHVnlMV1JwWVdkeVlXMC5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=rL1OR8gv9Zj3o1h5PMpPmzDLPMSGbbADNTgIR6O3yezEUlA~Wd0VaFmKFCqtWa83M3IlcpMx-3uIJ~WAS-uRnkqe5Zsq-EdHVgP4NZaIHEK1jtSipxS3OUd-GEhoUt3B~r9Tkj-UveYwPptnb8o2dPBpPcRQPbBEDn3~0Y7yuQUKnPzret28ndtPgtbyQZbbJa-TlnqZ-1ji3tlBCUJCC4uYIPAPtfjCHl~4i84KWFy4GMr-WXQ381wl50OcJQ5fvYkFNfFuUfJ~BP~J0WPTrPUrASilDiCKxB5CFvyZVLRedjPvPTniRlgepbVZubP1Jt3tcsaAgjLXgGQJaU-3ZQ__" 
              alt="Catalytic Converter Diagram" 
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

              {/* Sulfur Burning Diagram */}
              <div className="rounded-lg overflow-hidden border border-border">
                <img 
                  src="https://private-us-east-1.manuscdn.com/sessionFile/cHEEmKNM7UU47jMzBNQjfs/sandbox/nSD48et9n9XZonDnJdtq5m-img-1_1770177266000_na1fn_c3VsZnVyLWJ1cm5pbmctZGlhZ3JhbQ.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvY0hFRW1LTk03VVU0N2pNekJOUWpmcy9zYW5kYm94L25TRDQ4ZXQ5bjlYWm9uRG5KZHRxNW0taW1nLTFfMTc3MDE3NzI2NjAwMF9uYTFmbl9jM1ZzWm5WeUxXSjFjbTVwYm1jdFpHbGhaM0poYlEuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=wGcDNaSipJdn5az9VzLmb1QPPUnc-7pMB7Qm1PE4rmty9Pw02-fK-ydC6kZTBPzPAPMvF9s0xFhssAX8yI70ABoF001htU4yu6cgdPSaa3BGZoMwl~fp5jWSH-GVpMIOPerf4-x2nugtBLXdQ2zIPTJxx9kzU1MM12CDS9lqKZEQVGhk41g8CI6wdAV6mwHcpNpg23-usa-b815ugpjDm3DHE2~JkvDYrLnox2IHEX1xwyM72nluruv-qzVDkpgXdIHq6UKjfycnX9XLIK-yFFx~zE5BDCHRAgvrkRrybH~RyZdUzCtkJPYXssekZuw52eC6trT~82gO4sQzdLhpAA__" 
                  alt="Sulfur Burning Furnace Process Diagram" 
                  className="w-full h-auto"
                />
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

              {/* Catalyst Converter Diagram */}
              <div className="rounded-lg overflow-hidden border border-border">
                <img 
                  src="https://private-us-east-1.manuscdn.com/sessionFile/cHEEmKNM7UU47jMzBNQjfs/sandbox/nSD48et9n9XZonDnJdtq5m-img-2_1770177262000_na1fn_Y2F0YWx5c3QtY29udmVydGVyLWRpYWdyYW0.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvY0hFRW1LTk03VVU0N2pNekJOUWpmcy9zYW5kYm94L25TRDQ4ZXQ5bjlYWm9uRG5KZHRxNW0taW1nLTJfMTc3MDE3NzI2MjAwMF9uYTFmbl9ZMkYwWVd4NWMzUXRZMjl1ZG1WeWRHVnlMV1JwWVdkeVlXMC5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=rL1OR8gv9Zj3o1h5PMpPmzDLPMSGbbADNTgIR6O3yezEUlA~Wd0VaFmKFCqtWa83M3IlcpMx-3uIJ~WAS-uRnkqe5Zsq-EdHVgP4NZaIHEK1jtSipxS3OUd-GEhoUt3B~r9Tkj-UveYwPptnb8o2dPBpPcRQPbBEDn3~0Y7yuQUKnPzret28ndtPgtbyQZbbJa-TlnqZ-1ji3tlBCUJCC4uYIPAPtfjCHl~4i84KWFy4GMr-WXQ381wl50OcJQ5fvYkFNfFuUfJ~BP~J0WPTrPUrASilDiCKxB5CFvyZVLRedjPvPTniRlgepbVZubP1Jt3tcsaAgjLXgGQJaU-3ZQ__" 
                  alt="Catalytic Converter for SO2 to SO3 Oxidation" 
                  className="w-full h-auto"
                />
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
                <p className="text-foreground mb-4 leading-relaxed">
                  The final product is purified by controlled absorption, cooling, and storage in corrosion-resistant tanks to obtain commercial sulfuric acid at approximately <span className="highlight-accent">98% concentration</span>.
                </p>
                <div className="bg-secondary/20 border border-secondary rounded p-4">
                  <p className="text-sm text-muted-foreground">
                    <span className="highlight-accent">Raw Materials:</span> Elemental sulfur (from natural deposits or fossil fuel desulfurization), oxygen (from air), and water (for dilution).
                  </p>
                </div>
              </div>

              {/* Absorption Tower Diagram */}
              <div className="rounded-lg overflow-hidden border border-border">
                <img 
                  src="https://private-us-east-1.manuscdn.com/sessionFile/cHEEmKNM7UU47jMzBNQjfs/sandbox/nSD48et9n9XZonDnJdtq5m-img-3_1770177272000_na1fn_YWJzb3JwdGlvbi10b3dlci1kaWFncmFt.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvY0hFRW1LTk03VVU0N2pNekJOUWpmcy9zYW5kYm94L25TRDQ4ZXQ5bjlYWm9uRG5KZHRxNW0taW1nLTNfMTc3MDE3NzI3MjAwMF9uYTFmbl9ZV0p6YjNKd2RHbHZiaTEwYjNkbGNpMWthV0ZuY21GdC5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ggQk9FnYQBZZDJLgFseFwyRdlFokQ9kboN9eh03Ppq4GnqNUaRDMGlhgFynRLr9S5JkeqN9M4um7vSv8worXVRAygcMdm2u-kDc7-eNbQM-k9ubOV-sAtLRrtm-iPkO4atkTkG~CIT6xD09C0DHAWjTx3hADOYVCjApA0ziYNihayb3lEo~biVGOYSDX~cPBEc1mhTsxA3nDLm8cslMIY77IjmQttZAzqdhWkXvtf6-wRtmLlQND6VCnu7~HdkJWMlxq28TFlAiLb3HiG39XIzicWrNfGcaeS4PktUKG0hRN45UqIMm19IfvZ0ldJHt~zKexgCGkZzADdtiUW1F-SA__" 
                  alt="SO3 Absorption Tower Diagram" 
                  className="w-full h-auto"
                />
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
          Real-world sulfuric acid production plants showing the scale and complexity of industrial operations.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-lg overflow-hidden border border-border">
            <img 
              src="https://private-us-east-1.manuscdn.com/sessionFile/cHEEmKNM7UU47jMzBNQjfs/sandbox/nSD48et9n9XZonDnJdtq5m-img-4_1770177270000_na1fn_aW5kdXN0cmlhbC1mYWNpbGl0eS1waG90bw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvY0hFRW1LTk03VVU0N2pNekJOUWpmcy9zYW5kYm94L25TRDQ4ZXQ5bjlYWm9uRG5KZHRxNW0taW1nLTRfMTc3MDE3NzI3MDAwMF9uYTFmbl9hVzVrZFhOMGNtbGhiQzFtWVdOcGJHbDBlUzF3YUc5MGJ3LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=gcAPcy8yFQ1d055P9km8mrwPSNhnURXK9os3GYSTi3kvqU0RqmyNfjGsXQ256iGcBrwTgMWGat7BXzuI6XCfxvG~DB2FkpD5bNi5ioS5eSfDSnptsJUX5zmdXqr6gcKgei52e5R0TaQVuE56pMtzunwQCPIChQx0lRF-gZWeQjvK0YHF6gagujFXF3-okJnQcCIT5GtZdABAQ-PmIS3gPscAVdyMdMQ5nm1ZZrf1TPoJ-xFXwDuZLjUv79ERRFHAGOGpYMFheZcwis9sY-dJV~rvOErHkoptM4J~YHDTpJ5NT8DZwc4HlGDsP32Rj5~OabZvvLb9qGISw5Je2AHN4Q__" 
              alt="Large-scale Sulfuric Acid Production Facility" 
              className="w-full h-auto"
            />
            <div className="bg-card border-t border-border p-4">
              <h4 className="font-bold text-accent mb-2">Large-Scale Production Facility</h4>
              <p className="text-sm text-muted-foreground">
                Multiple tall cylindrical reactors and distillation columns connected by extensive piping networks. Industrial lighting and safety railings visible.
              </p>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden border border-border">
            <img 
              src="https://private-us-east-1.manuscdn.com/sessionFile/cHEEmKNM7UU47jMzBNQjfs/sandbox/nSD48et9n9XZonDnJdtq5m-img-5_1770177271000_na1fn_cmVhY3Rvci1lcXVpcG1lbnQtcGhvdG8.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvY0hFRW1LTk03VVU0N2pNekJOUWpmcy9zYW5kYm94L25TRDQ4ZXQ5bjlYWm9uRG5KZHRxNW0taW1nLTVfMTc3MDE3NzI3MTAwMF9uYTFmbl9jbVZoWTNSdmNpMWxjWFZwY0cxbGJuUXRjR2h2ZEc4LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=IgrWyF06KnZxNs57QrNjvqOWhJXEftqvkBNPlqlzrUG85WiJs7Em2wahoC0r2fR76FrQqoOlwOj9uH~xEO~RiyBmJcUFD5NYM04pf0xenfNnZ8htBn-ml5tFT7vzLvFwx9dbVaWXDWy1lW--zb1v1rhJcjv1Slph9Ug5DT6yHFSI5dDr8pk81QqsX7PPUGDvLy8enKqyEeoM~8u6C30kjjkLEFw4QbcpMk2K4N2OcIfqkE7Aio4Kzm8mP3SCCQ3F84Ftz6ZBRDWSs0M1UFdJ~f8SvQ2MLq~0hxlzk84tWMR5wMYvfuGcNtqUMhCzriGhxxkzLRklMaPZAcafsqVd7A__" 
              alt="Reactor Equipment and Heat Exchanger" 
              className="w-full h-auto"
            />
            <div className="bg-card border-t border-border p-4">
              <h4 className="font-bold text-accent mb-2">Reactor Equipment & Heat Exchanger</h4>
              <p className="text-sm text-muted-foreground">
                Close-up of industrial reactor vessel with stainless steel construction. Pipes, valves, instrumentation, and yellow safety markings visible.
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
          Interactive visualization of the Contact process equipment and flow.
        </p>
        
        <div className="model-placeholder">
          <Beaker className="w-16 h-16 text-accent opacity-50" />
          <h3 className="text-xl font-bold text-accent">3D Model Integration</h3>
          <p>
            <span className="highlight-accent">To embed your 3D model here, you have several options:</span>
          </p>
          
          <div className="w-full mt-6 space-y-4 text-left">
            <div className="bg-card border border-border rounded p-4">
              <h4 className="font-bold text-accent mb-2">Option 1: Three.js / Babylon.js</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Create an interactive 3D visualization using JavaScript libraries. Perfect for custom models with animations.
              </p>
              <code className="text-xs bg-background p-2 rounded block text-accent">
                npm install three
              </code>
            </div>

            <div className="bg-card border border-border rounded p-4">
              <h4 className="font-bold text-accent mb-2">Option 2: Sketchfab Embed</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Upload your model to Sketchfab and embed it using an iframe. Easiest method for pre-made models.
              </p>
              <code className="text-xs bg-background p-2 rounded block text-accent overflow-x-auto">
                &lt;iframe src="https://sketchfab.com/models/..."&gt;&lt;/iframe&gt;
              </code>
            </div>

            <div className="bg-card border border-border rounded p-4">
              <h4 className="font-bold text-accent mb-2">Option 3: glTF/GLTF Format</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Export your model as .glb or .gltf and load it with Three.js GLTFLoader for optimized performance.
              </p>
              <code className="text-xs bg-background p-2 rounded block text-accent">
                model.glb (recommended format)
              </code>
            </div>

            <div className="bg-card border border-border rounded p-4">
              <h4 className="font-bold text-accent mb-2">Option 4: Model-Viewer Web Component</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Use Google's model-viewer for a lightweight, responsive 3D viewer with minimal setup.
              </p>
              <code className="text-xs bg-background p-2 rounded block text-accent">
                &lt;model-viewer src="model.glb"&gt;&lt;/model-viewer&gt;
              </code>
            </div>
          </div>

          <div className="w-full mt-6 bg-secondary/20 border border-secondary rounded p-4 text-left">
            <p className="text-sm text-muted-foreground">
              <span className="highlight-accent">Next Steps:</span> Prepare your 3D model file, choose your integration method, and replace this placeholder with your model. The model will be fully interactive and responsive on all devices.
            </p>
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
