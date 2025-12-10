import { Link } from "react-router-dom";
import { Header } from "@/components/Header";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="shell max-w-3xl space-y-8">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Legal
            </p>
            <h1 className="text-3xl md:text-4xl font-bold">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground">
              This page explains how ONDA uses and protects the personal data you
              share with us, in particular through the consultation form.
            </p>
          </div>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Who we are</h2>
            <p className="text-muted-foreground">
              ONDA is a marketing and brand studio helping global brands work
              with creators and communities in Europe. You can contact us at{" "}
              <a
                href="mailto:andre@meetonda.com"
                className="text-accent underline-offset-2 hover:underline"
              >
                andre@meetonda.com
              </a>
              .
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">What data we collect</h2>
            <p className="text-muted-foreground">
              When you submit the consultation form, we collect:
            </p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Your role (brand or creator)</li>
              <li>Your name and email address</li>
              <li>Your company / brand / channel name (if provided)</li>
              <li>
                The message you send us about your needs, category and markets
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">How we use your data</h2>
            <p className="text-muted-foreground">
              We use this information only to:
            </p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Review your enquiry</li>
              <li>Contact you about potential collaboration or services</li>
            </ul>
            <p className="text-muted-foreground">
              We do not sell your data or share it with third parties for their
              own marketing purposes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Legal basis</h2>
            <p className="text-muted-foreground">
              Our legal basis for processing your personal data is{" "}
              <strong className="text-foreground">legitimate interest</strong> in responding to business
              enquiries and, where applicable, steps taken at your request prior
              to entering into a contract.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">How long we keep your data</h2>
            <p className="text-muted-foreground">
              We keep your data for as long as it is needed to handle your
              enquiry and any follow-up conversation. If you ask us to delete
              your data, we will do so unless we need to keep it for legal or
              compliance reasons.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Your rights</h2>
            <p className="text-muted-foreground">
              Subject to applicable data protection law, you may have the right
              to access, correct or delete your personal data, and to object to
              or restrict certain forms of processing.
            </p>
            <p className="text-muted-foreground">
              To exercise these rights, please email us at{" "}
              <a
                href="mailto:andre@meetonda.com"
                className="text-accent underline-offset-2 hover:underline"
              >
                andre@meetonda.com
              </a>
              .
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Updates</h2>
            <p className="text-muted-foreground">
              We may update this Privacy Policy from time to time. The latest
              version will always be available on this page.
            </p>
          </section>

          <div>
            <Link
              to="/"
              className="inline-flex items-center text-sm text-accent underline-offset-2 hover:underline"
            >
              ← Back to home
            </Link>
          </div>

          <p className="text-xs text-muted-foreground/70">
            This Privacy Policy is for general information only and does not
            constitute legal advice. Please consult a qualified lawyer to review
            it for your specific situation and jurisdiction.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Privacy;
