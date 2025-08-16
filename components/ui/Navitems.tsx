"use client";
import React, { useState, useEffect } from "react";
import { BiHomeAlt, BiUser, BiMessageDetail, BiMailSend } from "react-icons/bi";

export default function TopFloatingNav() {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [timeoutId, setTimeoutId] = useState<ReturnType<typeof setTimeout> | null>(null);

  const navItems = [
    { name: "About", link: "#about", icon: <BiHomeAlt className="w-5 h-5" /> },
    { name: "Projects", link: "#projects", icon: <BiUser className="w-5 h-5" /> },
    { name: "Testimonials", link: "#testimonials", icon: <BiMessageDetail className="w-5 h-5" /> },
    { name: "Contact", link: "#contact", icon: <BiMailSend className="w-5 h-5" /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling down -> hide
        setShowNav(false);
      } else {
        // scrolling up -> show
        setShowNav(true);

        // auto-hide again after 2s
        if (timeoutId) clearTimeout(timeoutId);
        const id = setTimeout(() => setShowNav(false), 2000);
        setTimeoutId(id);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [lastScrollY, timeoutId]);

  return (
    <div
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-[60] w-full flex justify-center transition-transform duration-500 ${
        showNav ? "translate-y-0" : "-translate-y-20"
      }`}
    >
      <nav className="flex justify-center items-center space-x-6 bg-neutral-900 backdrop-blur-md px-6 py-3 rounded-md border-2 border-neutral-800 shadow-lg mt-4 mx-4 max-w-4xl">
        {navItems.map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            className="flex flex-col items-center text-white hover:text-pink-500 transition-colors duration-300"
          >
            <div>{item.icon}</div>
            <span className="text-xs mt-1">{item.name}</span>
          </a>
        ))}
      </nav>
    </div>
  );
}
