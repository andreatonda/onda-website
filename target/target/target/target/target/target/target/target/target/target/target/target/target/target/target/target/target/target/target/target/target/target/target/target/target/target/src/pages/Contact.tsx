import { Header } from "@/components/Header";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <section className="py-20 md:py-32">
          <div className="shell">
            <div className="reveal max-w-3xl">
              <div className="text-xs uppercase tracking-wider text-accent mb-4">
                Get in touch
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Let's talk about your project.
              </h1>
              <p className="text-xl text-muted-foreground">
                Ready to grow your brand in Europe? Book a consultation to discuss
                your goals and how we can help.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
