import { useState, useEffect } from "react";

const FirstVisitLoader = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("ondaHasVisited");
    
    if (!hasVisited) {
      setIsVisible(true);
      
      // Start exit animation after 2.5s
      const exitTimer = setTimeout(() => {
        setIsAnimatingOut(true);
      }, 2500);
      
      // Hide completely and set flag after exit animation
      const hideTimer = setTimeout(() => {
        setIsVisible(false);
        localStorage.setItem("ondaHasVisited", "true");
      }, 3200);
      
      return () => {
        clearTimeout(exitTimer);
        clearTimeout(hideTimer);
      };
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-background transition-opacity duration-700 ${
        isAnimatingOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div
        className={`loader-logo ${isAnimatingOut ? "loader-exit" : "loader-enter"}`}
      >
        <img
          src="/onda-logo-light.png"
          alt="ONDA"
          className="h-16 md:h-20 w-auto"
        />
      </div>
      
      {/* Wave overlay effect */}
      <div className={`absolute inset-0 pointer-events-none ${isAnimatingOut ? "wave-reveal" : ""}`} />
    </div>
  );
};

export default FirstVisitLoader;
