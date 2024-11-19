import React from "react";

const ScrollToTop = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling effect
    });
  };

  return (
    <div
      className="scrollToTop smooth-scroll"
      onClick={handleScrollToTop} // Attach the click handler
      style={{
        cursor: "pointer", // Make it look clickable
        position: "fixed", // Fix it to the viewport
        bottom: "20px", // Position it near the bottom
        right: "20px", // Position it to the right
        zIndex: 1000, // Ensure it's on top of other elements
      }}
    >
      <i className="fas fa-arrow-up" />
    </div>
  );
};

export default ScrollToTop;
