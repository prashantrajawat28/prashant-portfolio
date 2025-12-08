import React from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const [hidden, setHidden] = React.useState(true);
  const [clicked, setClicked] = React.useState(false);

  React.useEffect(() => {
    const mMove = (el: MouseEvent) => {
      setPosition({ x: el.clientX, y: el.clientY });
    };

    const mEnter = () => {
      setHidden(false);
    };

    const mLeave = () => {
      setHidden(true);
    };

    const mDown = () => {
      setClicked(true);
    };

    const mUp = () => {
      setClicked(false);
    };

    document.addEventListener("mousemove", mMove);
    document.addEventListener("mouseenter", mEnter);
    document.addEventListener("mouseleave", mLeave);
    document.addEventListener("mousedown", mDown);
    document.addEventListener("mouseup", mUp);

    return () => {
      document.removeEventListener("mousemove", mMove);
      document.removeEventListener("mouseenter", mEnter);
      document.removeEventListener("mouseleave", mLeave);
      document.removeEventListener("mousedown", mDown);
      document.removeEventListener("mouseup", mUp);
    };
  }, []);

  return (
    <>
      <div
        className={`pointer-events-none fixed left-0 top-0 z-[9999] hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary transition-transform duration-100 ease-out md:block ${
          hidden ? "opacity-0" : "opacity-100"
        } ${clicked ? "scale-75 bg-primary/20" : "scale-100"}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      <div
        className={`pointer-events-none fixed left-0 top-0 z-[9999] hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary transition-opacity duration-150 ease-out md:block ${
          hidden ? "opacity-0" : "opacity-100"
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  );
}
