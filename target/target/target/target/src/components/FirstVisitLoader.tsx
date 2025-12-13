import { useState, useEffect, useRef } from "react";

const FirstVisitLoader = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const turbulenceRef = useRef<SVGFETurbulenceElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const hasVisited = localStorage.getItem("ondaHasVisited");
    
    if (!hasVisited) {
      setIsVisible(true);
      
      // Animate turbulence for wave effect
      let startTime: number;
      const animateTurbulence = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        
        if (turbulenceRef.current && elapsed < 2000) {
          // Create wave motion by animating baseFrequency
          const progress = elapsed / 2000;
          const frequency = 0.015 + Math.sin(progress * Math.PI * 4) * 0.008;
          turbulenceRef.current.setAttribute('baseFrequency', `${frequency} ${frequency * 0.5}`);
          animationRef.current = requestAnimationFrame(animateTurbulence);
        }
      };
      
      animationRef.current = requestAnimationFrame(animateTurbulence);
      
      // Start exit animation after 2.5s
      const exitTimer = setTimeout(() => {
        setIsAnimatingOut(true);
      }, 2500);
      
      // Hide completely and set flag after exit animation
      const hideTimer = setTimeout(() => {
        setIsVisible(false);
        localStorage.setItem("ondaHasVisited", "true");
      }, 3300);
      
      return () => {
        clearTimeout(exitTimer);
        clearTimeout(hideTimer);
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-800 ${
        isAnimatingOut ? "opacity-0" : "opacity-100"
      }`}
      style={{
        background: "linear-gradient(135deg, hsl(var(--background)) 0%, hsl(220 20% 8%) 50%, hsl(var(--background)) 100%)"
      }}
    >
      {/* SVG Filter for wave distortion */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <filter id="wave-distortion" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence
              ref={turbulenceRef}
              type="fractalNoise"
              baseFrequency="0.015 0.008"
              numOctaves="2"
              seed="42"
              result="turbulence"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="turbulence"
              scale="25"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      <div
        className={`loader-logo-container ${isAnimatingOut ? "loader-exit" : "loader-enter"}`}
        style={{
          filter: isAnimatingOut ? "none" : "url(#wave-distortion)",
          width: "clamp(200px, 50vw, 600px)"
        }}
      >
        <img
          src="/onda-logo-light.png"
          alt="ONDA"
          className="w-full h-auto"
          style={{ imageRendering: "auto" }}
        />
      </div>
    </div>
  );
};

export default FirstVisitLoader;
