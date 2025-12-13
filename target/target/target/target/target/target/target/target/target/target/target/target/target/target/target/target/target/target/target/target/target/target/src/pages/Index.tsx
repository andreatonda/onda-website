import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ConsultationModal } from "@/components/ConsultationModal";

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* HERO SECTION */}
        <section className="py-20 md:py-[50px] bg-glossy-hero">
          <div className="shell">
            <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-12 items-start">
              <div className="reveal space-y-8">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
                  Brands · Creators · New Markets
                </div>

                <h1 className="text-5xl md:text-7xl font-bold leading-[1.1]">
                  Where brands meet the{" "}
                  <span className="text-gradient-cyan">right creators</span>{" "}
                  to grow in Europe.
                </h1>

                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  ONDA is a marketing and brand studio specialising in digital campaigns,
                  content production, influencer partnerships and community-driven retail
                  experiences. We connect global brands with local creators and audiences.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button
                    onClick={() => setModalOpen(true)}
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 btn-liquid"
                  >
                    Schedule a consultation
                    <span className="ml-2">↗</span>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-border/50 hover:border-accent/50">
                    <Link to="/services">
                      Explore our services
                    </Link>
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-6 pt-8">
                  <div>
                    <div className="text-sm font-semibold mb-2">WHAT WE DO</div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wide">
                      Strategy, content, campaigns & brand build.
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold mb-2">HOW WE WORK</div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wide">
                      Lean, senior team · creator-first.
                    </div>
                  </div>
                </div>
              </div>

              {/* Side card */}
              <div className="reveal lg:sticky lg:top-32">
                <div className="card-glass rounded-2xl p-8">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
                    Creator & brand matchmaking
                  </div>
                  <h3 className="text-2xl font-bold mb-6">
                    Local-first strategy.
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    We map the creator, culture and retail landscape for your category,
                    then design campaigns that feel native to each European market.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 rounded-full border border-accent/30 bg-accent/5 text-sm">
                      Influencers & ambassadors
                    </span>
                    <span className="px-4 py-2 rounded-full border border-accent/30 bg-accent/5 text-sm">
                      Creators with real communities
                    </span>
                    <span className="px-4 py-2 rounded-full border border-accent/30 bg-accent/5 text-sm">
                      Retail & pop-up partners
                    </span>
                    <span className="px-4 py-2 rounded-full border border-accent/30 bg-accent/5 text-sm">
                      Category experts & tastemakers
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CREATORS & COMMUNITIES SECTION */}
        <section className="py-20">
          <div className="shell">
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
              Creators & Communities
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="reveal">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Beyond impressions, into relationships
                </h2>
              </div>
              <div className="reveal space-y-6 text-muted-foreground">
                <p>
                  We treat creators as long-term partners, not just media placements.
                  Our work focuses on relevance, fit and credibility – on both sides.
                </p>
                <p>
                  We help brands find creators whose audience, values and aesthetic truly
                  align with what they stand for. That might be a niche specialist with deep
                  trust, or a wider-reach profile who can anchor a launch.
                </p>
                <p>
                  Once the match is right, we support briefing, content direction, workflow
                  and long-term relationship building – so collaborations feel smooth and
                  sustainable for everyone involved.
                </p>
              </div>
            </div>

            <div className="mt-16 reveal">
              <div className="bg-card border border-border/50 rounded-2xl p-10">
                <div className="text-xs uppercase tracking-wider text-accent mb-4">
                  Creator programs
                </div>
                <h3 className="text-3xl font-bold mb-6">
                  From one-off posts to owned communities
                </h3>
                <p className="text-muted-foreground mb-8 max-w-2xl">
                  We design creator programs that can start lean and scale over time:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>Creator & influencer mapping for priority markets</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>Campaign concepts & storytelling frameworks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span>Hybrid campaigns: digital + retail + product</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className="py-20">
          <div className="shell">
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
              What we offer
            </div>
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl">
                Services designed for modern brands
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl">
                From first market entry to ongoing growth, we blend strategy, creative and
                execution – with a strong focus on creator-led initiatives.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Strategy & Positioning",
                  description: "Market analysis, brand positioning, go-to-market frameworks and competitive landscape mapping.",
                },
                {
                  title: "Content & Campaigns",
                  description: "End-to-end campaign development from concept through production, launch and performance tracking.",
                },
                {
                  title: "Creator Partnerships",
                  description: "Matchmaking, contract negotiation, briefing, content direction and long-term relationship management.",
                },
                {
                  title: "Community Building",
                  description: "Building engaged communities around your brand through events, ambassador programs and digital spaces.",
                },
                {
                  title: "Retail Activations",
                  description: "Pop-up stores, retail partnerships, in-store experiences and community-driven commerce.",
                },
                {
                  title: "European Expansion",
                  description: "Local market entry strategy, partnerships, operations and growth across European markets.",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="reveal bg-card border border-border/50 rounded-2xl p-8 hover:border-accent/30 transition-colors"
                >
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button asChild size="lg" variant="outline" className="rounded-full px-8 border-border/50 hover:border-accent/50">
                <Link to="/services">
                  View all services
                  <span className="ml-2">→</span>
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <ConsultationModal open={modalOpen} onOpenChange={setModalOpen} />
    </div>
  );
};

export default Index;
