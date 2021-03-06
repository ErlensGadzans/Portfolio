import React, { useEffect, useState } from "react";
import "./ScrollToTop.css";
import { ArrowUpCircle } from "react-bootstrap-icons";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top d-none d-lg-block">
      {isVisible && (
        <div onClick={scrollToTop}>
          <h2>
            <small>Go up </small>

            <ArrowUpCircle />
          </h2>
        </div>
      )}
    </div>
  );
}
