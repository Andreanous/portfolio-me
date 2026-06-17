import { useEffect, useState } from "react";

function StatCircle({ value, label, progress }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;

    const interval = setInterval(() => {
      current++;

      if (current >= value) {
        current = value;
        clearInterval(interval);
      }

      setCount(current);
    }, 80);

    return () => clearInterval(interval);
  }, [value]);

  const radius = 55;
  const circumference = 2 * Math.PI * radius;

  return (
    <div
      style={{
        position: "relative",
        width: "150px",
        height: "150px",
      }}
    >
      <svg width="150" height="150">
        <defs>
          <linearGradient
            id={`gradient-${label}`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="50%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#9333ea" />
          </linearGradient>
        </defs>

        <circle
          cx="75"
          cy="75"
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,.08)"
          strokeWidth="8"
        />

        <circle
          cx="75"
          cy="75"
          r={radius}
          fill="none"
          stroke={`url(#gradient-${label})`}
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={
            circumference -
            (progress / 100) * circumference
          }
          transform="rotate(-90 75 75)"
          style={{
            transition:
              "stroke-dashoffset 2s ease",
          }}
        />
      </svg>

      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            color: "white",
            fontSize: "38px",
            margin: 0,
            fontWeight: "800",
          }}
        >
          {count}+
        </h2>

        <p
          style={{
            color: "#94a3b8",
            fontSize: "14px",
            marginTop: "6px",
          }}
        >
          {label}
        </p>
      </div>
    </div>
  );
}

export default StatCircle;