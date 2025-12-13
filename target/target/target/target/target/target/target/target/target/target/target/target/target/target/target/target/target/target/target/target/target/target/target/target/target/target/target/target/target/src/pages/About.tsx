import { Header } from "@/components/Header";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <section className="py-20 md:py-32">
          <div className="shell">
            <div className="reveal max-w-3xl">
              <div className="text-xs uppercase tracking-wider text-accent mb-4">
                About ONDA
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Marketing, brand creation & creator strategy under one roof.
              </h1>
              <p className="text-xl text-muted-foreground">
                ONDA specialises in helping brands enter, grow and stay relevant in the
                European market – with a strong focus on creator-led marketing and
                community-driven retail.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
