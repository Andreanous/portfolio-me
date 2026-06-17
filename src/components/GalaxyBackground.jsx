"use client";
import { Suspense, lazy } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

export default function GalaxyBackground() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {/* Spline 3D scene */}
      <Suspense fallback={<div style={{ width: "100%", height: "100%", background: "#000" }} />}>
        <Spline
          style={{
            width: "100%",
            height: "100%",
            pointerEvents: "auto",
          }}
          scene="https://prod.spline.design/us3ALejTXl6usHZ7/scene.splinecode"
        />
      </Suspense>

      {/* Gradient overlay — fade edges & bottom */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `
            linear-gradient(to right, rgba(0,0,0,0.8), transparent 30%, transparent 70%, rgba(0,0,0,0.8)),
            linear-gradient(to bottom, transparent 80%, rgba(0,0,0,0.9))
          `,
          pointerEvents: "none",
        }}
      />
    </div>
  );
}