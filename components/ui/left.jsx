"use client";
import { useEffect, useState } from "react";

export default function useDynamicRight() {
  const [right, setRight] = useState(0);

  useEffect(() => {
    function updateRight() {
      const screenWidth = window.innerWidth;

      // Positive shift to the right as screen gets smaller
      const shift = (1440 - screenWidth) *0.5 // 1px shift per pixel reduction
      setRight(shift);
    }

    updateRight();
    window.addEventListener("resize", updateRight);

    return () => window.removeEventListener("resize", updateRight);
  }, []);

  return right;
}
