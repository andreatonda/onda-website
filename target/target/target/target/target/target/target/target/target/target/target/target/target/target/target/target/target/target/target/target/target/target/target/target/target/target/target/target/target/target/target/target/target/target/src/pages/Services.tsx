import { Header } from "@/components/Header";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <section className="py-20 md:py-32">
          <div className="shell">
            <div className="reveal max-w-3xl">
              <div className="text-xs uppercase tracking-wider text-accent mb-4">
                Our Services
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Everything you need to grow in Europe.
              </h1>
              <p className="text-xl text-muted-foreground">
                We blend strategy, creative and execution with a focus on creator-led marketing
                and community-driven growth.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Services;
