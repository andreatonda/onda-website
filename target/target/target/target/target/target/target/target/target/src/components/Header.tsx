import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ConsultationModal } from "@/components/ConsultationModal";
import logo from "@/assets/logo.png";

export const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-20 backdrop-blur-xl bg-background/95 border-b border-white/[0.04]">
        <div className="shell py-0">
          <nav className="flex items-center justify-between py-0">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="ONDA logo"
                className="h-20 w-32 object-cover object-center drop-shadow-[0_0_12px_rgba(0,180,216,0.55)] border-0"
              />
            </Link>

            <div className="flex items-center gap-8">
              <Link to="/services" className="text-foreground hover:text-accent transition-colors">
                Services
              </Link>
              <Link to="/about" className="text-foreground hover:text-accent transition-colors">
                About
              </Link>
              <Link to="/services#creators" className="text-foreground hover:text-accent transition-colors">
                Creators
              </Link>
              <Button
                onClick={() => setModalOpen(true)}
                className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full"
              >
                Book a consultation
                <span className="ml-1">↗</span>
              </Button>
            </div>
          </nav>
        </div>
      </header>

      <ConsultationModal open={modalOpen} onOpenChange={setModalOpen} />
    </>
  );
};
