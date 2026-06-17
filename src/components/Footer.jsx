'use client';
import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

import { Frame } from "lucide-react";
import catGif from "../assets/cat.gif";

// ─── Data ─────────────────────────────────────────────────────────────────────
const footerLinks = [
  {
    label: "Portfolio",
    links: [],
  },

  {
    label: "Resources",
    links: [
      { title: "Blog", href: "/blog" },
      { title: "Changelog", href: "/changelog" },
      { title: "Brand", href: "/brand" },
      { title: "Help", href: "/help" },
    ],
  },

  {
    label: "Social Links",
    links: [
      {
        title: "Facebook",
        href: "#",
        icon: FaFacebook,
      },

      {
        title: "Instagram",
        href: "#",
        icon: FaInstagram,
      },

      {
        title: "Github",
        href: "#",
        icon: FaGithub,
      },

      {
        title: "LinkedIn",
        href: "#",
        icon: FaLinkedin,
      },
    ],
  },
];

// ─── Animated Container ───────────────────────────────────────────────────────
function AnimatedContainer({ className, delay = 0.1, children }) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) return <>{children}</>;

  return (
    <motion.div
      initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Cat Goodbye Column ───────────────────────────────────────────────────────
function GoodbyeColumn() {
  return (
    <AnimatedContainer delay={0.1} className="flex flex-col items-start gap-3">
      {/* "goodbye" dalam font geometry */}
      <p
        style={{
          fontFamily: "'Orbitron', 'Exo 2', 'Rajdhani', sans-serif",
          fontWeight: 900,
          letterSpacing: '0.15em',
          fontSize: '0.65rem',
          textTransform: 'uppercase',
          background: 'linear-gradient(90deg, #a78bfa, #60a5fa, #34d399)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: '6px',
        }}
      >   
        Thanks For Visiting!
      </p>

      {/* Cat meme GIF */}
      <div className="rounded-xl overflow-hidden border border-white/10 shadow-lg shadow-black/40"
        style={{ width: '140px', height: '140px' }}>
        <img
  src={catGif}
  alt="Cute Cat"
  style={{
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  }}
/>
      </div>
    </AnimatedContainer>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
export function Footer() {
  return (
    <>
      {/* Load Orbitron dari Google Fonts untuk efek geometry */}
      <link
        href="https://fonts.googleapis.com/css2?family=Orbitron:wght@900&display=swap"
        rel="stylesheet"
      />

    <footer
  className="relative w-full border-t py-12 lg:py-16"
  style={{
    background:
      "linear-gradient(to bottom, rgba(2,6,23,0.88), rgba(2,6,23,0.98))",

    backdropFilter: "blur(20px)",

    borderColor: "rgba(255,255,255,0.06)",

    overflow: "hidden",
  }}
>
    <div
  style={{
    width: "100%",
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "0 40px",
  }}
>
        {/* Top glow line */}
        <div
          className="absolute top-0 h-px w-1/3 rounded-full blur"
          style={{
              left: '50%',
              transform: 'translateX(-50%) translateY(-50%)',
              background: 'rgba(255,255,255,0.2)',
            }}
            />

        <div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">

          {/* Brand + copyright */}
          <AnimatedContainer className="space-y-4">
            <Frame className="size-8 text-white/70" />
            <p className="text-white/40 mt-8 text-xs md:mt-0">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </AnimatedContainer>

          {/* Links grid */}
          <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0">

            {/* Kolom 1: Cat goodbye */}
            <GoodbyeColumn />

            {/* Kolom 2, 3, 4: Company (kosong), Resources, Social */}
            {footerLinks.map((section, index) => (
                <AnimatedContainer key={section.label} delay={0.2 + index * 0.1}>
                <div className="mb-10 md:mb-0">
                  <h3
                    className="text-white/50"
                    style={{ fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}
                  >
                    {section.label}
                  </h3>
                  <ul className="mt-4 space-y-2 text-sm">
                    {section.links.length === 0 ? (
                        // Company sengaja kosong — tampilkan placeholder halus
                      <li className="text-white/20 text-xs italic">—</li>
                    ) : (
                        section.links.map((link) => (
                            <li key={link.title}>
                          <a
                            href={link.href}
                            className="inline-flex items-center gap-1 text-white/50 hover:text-white transition-all duration-300 text-xs"
                            >
                            {link.icon && <link.icon className="size-3.5" />}
                            {link.title}
                          </a>
                        </li>
                      ))
                    )}
                  </ul>
                </div>
              </AnimatedContainer>
            ))}
          </div>

        </div>
            </div>
        
      </footer>
    </>
  );
}

export default Footer;