"use client";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, Zap, Link, Code2, Layers, Database, Globe, Cpu, GitBranch, Lightbulb, Users, MessageSquare, Target, Brain, Rocket } from "lucide-react";

// ─── Utility ─────────────────────────────────────────────────────────────────
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

// ─── Badge ────────────────────────────────────────────────────────────────────
function Badge({ className, children, ...props }) {
  return (
    <div className={cn("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors", className)} {...props}>
      {children}
    </div>
  );
}

// ─── Button ───────────────────────────────────────────────────────────────────
function Button({ className, variant = "default", size = "default", children, ...props }) {
  const sizes = { default: "h-10 px-4 py-2", sm: "h-9 px-3", icon: "h-10 w-10" };
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
        variant === "outline" && "border border-white/20 bg-transparent hover:bg-white/10 text-white/80 hover:text-white",
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

// ─── Card ─────────────────────────────────────────────────────────────────────
function Card({ className, children, ...props }) {
  return <div className={cn("rounded-xl border shadow-sm", className)} {...props}>{children}</div>;
}
function CardHeader({ className, children, ...props }) {
  return <div className={cn("flex flex-col space-y-1.5 p-5", className)} {...props}>{children}</div>;
}
function CardTitle({ className, children, ...props }) {
  return <h3 className={cn("text-base font-bold leading-none tracking-tight", className)} {...props}>{children}</h3>;
}
function CardContent({ className, children, ...props }) {
  return <div className={cn("p-5 pt-0", className)} {...props}>{children}</div>;
}

// ─── Color map per category ───────────────────────────────────────────────────
const CATEGORY_COLORS = {
  Frontend:   { orb: "from-cyan-500 via-blue-500 to-indigo-600",   ring: "rgba(99,179,237,0.6)",  badge: "bg-cyan-500/20 border-cyan-400/50 text-cyan-300",   glow: "shadow-cyan-500/40",   bar: "from-cyan-400 to-blue-500"    },
  Backend:    { orb: "from-green-500 via-emerald-500 to-teal-600", ring: "rgba(52,211,153,0.6)",  badge: "bg-emerald-500/20 border-emerald-400/50 text-emerald-300", glow: "shadow-emerald-500/40", bar: "from-emerald-400 to-teal-500" },
  Database:   { orb: "from-orange-500 via-amber-500 to-yellow-500",ring: "rgba(251,146,60,0.6)",  badge: "bg-orange-500/20 border-orange-400/50 text-orange-300", glow: "shadow-orange-500/40",  bar: "from-orange-400 to-amber-500" },
  DevOps:     { orb: "from-violet-500 via-purple-500 to-fuchsia-600", ring: "rgba(167,139,250,0.6)", badge: "bg-violet-500/20 border-violet-400/50 text-violet-300", glow: "shadow-violet-500/40", bar: "from-violet-400 to-fuchsia-500" },
  Soft:       { orb: "from-pink-500 via-rose-500 to-red-500",      ring: "rgba(251,113,133,0.6)", badge: "bg-pink-500/20 border-pink-400/50 text-pink-300",     glow: "shadow-pink-500/40",   bar: "from-pink-400 to-rose-500"    },
  Leadership: { orb: "from-yellow-400 via-orange-400 to-red-500",  ring: "rgba(250,204,21,0.6)",  badge: "bg-yellow-500/20 border-yellow-400/50 text-yellow-300", glow: "shadow-yellow-500/40", bar: "from-yellow-400 to-orange-500" },
};

// ─── Skills Data ──────────────────────────────────────────────────────────────
const skillsData = [
  {
    id: 1,
    title: "Frontend",
    date: "React · Next.js",
    content: "Membangun UI modern dengan React, Next.js, Tailwind CSS, dan animasi Framer Motion. Fokus pada performa dan aksesibilitas.",
    category: "Frontend",
    icon: Code2,
    relatedIds: [2, 3],
    status: "completed",
    energy: 90,
    tags: ["React", "Next.js", "Tailwind", "Framer Motion"],
  },
  {
    id: 2,
    title: "Backend",
    date: "Node · Express",
    content: "Merancang REST API dan GraphQL dengan Node.js, Express, dan NestJS. Terbiasa dengan autentikasi JWT dan middleware.",
    category: "Backend",
    icon: Layers,
    relatedIds: [1, 3],
    status: "completed",
    energy: 82,
    tags: ["Node.js", "Express", "NestJS", "GraphQL"],
  },
  {
    id: 3,
    title: "Database",
    date: "SQL · NoSQL",
    content: "Desain skema dan query di PostgreSQL, MySQL, dan MongoDB. Pengalaman dengan ORM seperti Prisma dan Mongoose.",
    category: "Database",
    icon: Database,
    relatedIds: [2, 4],
    status: "completed",
    energy: 78,
    tags: ["PostgreSQL", "MongoDB", "Prisma", "Redis"],
  },
  {
    id: 4,
    title: "DevOps",
    date: "CI/CD · Cloud",
    content: "Deploy aplikasi ke AWS dan Vercel menggunakan Docker dan GitHub Actions. Familiar dengan monitoring dan logging.",
    category: "DevOps",
    icon: GitBranch,
    relatedIds: [3, 5],
    status: "in-progress",
    energy: 65,
    tags: ["Docker", "AWS", "GitHub Actions", "Vercel"],
  },
  {
    id: 5,
    title: "Problem Solving",
    date: "Soft Skill",
    content: "Kemampuan analitis yang kuat dalam memecahkan masalah kompleks dengan pendekatan sistematis dan kreatif.",
    category: "Soft",
    icon: Brain,
    relatedIds: [6, 8],
    status: "completed",
    energy: 88,
    tags: ["Analytical", "Creative", "Systematic", "Critical Thinking"],
  },
  {
    id: 6,
    title: "Komunikasi",
    date: "Soft Skill",
    content: "Menyampaikan ide teknis kepada tim non-teknis secara jelas. Berpengalaman dalam presentasi dan dokumentasi.",
    category: "Soft",
    icon: MessageSquare,
    relatedIds: [5, 7],
    status: "completed",
    energy: 85,
    tags: ["Presentasi", "Dokumentasi", "Storytelling", "Writing"],
  },
  {
    id: 7,
    title: "Leadership",
    date: "Soft Skill",
    content: "Memimpin tim kecil dalam proyek end-to-end. Fokus pada kolaborasi, delegasi, dan pengembangan anggota tim.",
    category: "Leadership",
    icon: Users,
    relatedIds: [6, 8],
    status: "in-progress",
    energy: 72,
    tags: ["Team Lead", "Delegasi", "Mentoring", "Agile"],
  },
  {
    id: 8,
    title: "Web & API",
    date: "HTTP · REST",
    content: "Memahami protokol HTTP, desain RESTful API yang baik, dan integrasi layanan pihak ketiga seperti Stripe dan Firebase.",
    category: "Frontend",
    icon: Globe,
    relatedIds: [1, 2],
    status: "completed",
    energy: 80,
    tags: ["REST API", "HTTP", "Stripe", "Firebase"],
  },
];

// ─── RadialOrbitalTimeline ────────────────────────────────────────────────────
function RadialOrbitalTimeline({ timelineData }) {
  const [expandedItems, setExpandedItems] = useState({});
  const [rotationAngle, setRotationAngle] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const [pulseEffect, setPulseEffect] = useState({});
  const [activeNodeId, setActiveNodeId] = useState(null);
  const [activeSkill, setActiveSkill] = useState(skillsData[0]);
  const containerRef = useRef(null);
  const orbitRef = useRef(null);
  const nodeRefs = useRef({});

  const handleContainerClick = (e) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const getRelatedItems = (itemId) => {
    const item = timelineData.find((i) => i.id === itemId);
    return item ? item.relatedIds : [];
  };

  const toggleItem = (id) => {
    setExpandedItems((prev) => {
      const newState = {};
      Object.keys(prev).forEach((k) => (newState[parseInt(k)] = false));
      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);
        const pulse = {};
        getRelatedItems(id).forEach((r) => (pulse[r] = true));
        setPulseEffect(pulse);
        const idx = timelineData.findIndex((i) => i.id === id);
        setRotationAngle(270 - (idx / timelineData.length) * 360);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }
      return newState;
    });
  };

  useEffect(() => {
    if (!autoRotate) return;
    const t = setInterval(() => setRotationAngle((p) => Number(((p + 0.25) % 360).toFixed(3))), 50);
    return () => clearInterval(t);
  }, [autoRotate]);

  const calcPos = (index, total) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radian = (angle * Math.PI) / 180;
    const radius =
  window.innerWidth < 640
    ? 120
    : window.innerWidth < 1024
    ? 160
    : 200;
    return {
      x: radius * Math.cos(radian),
      y: radius * Math.sin(radian),
      zIndex: Math.round(100 + 50 * Math.cos(radian)),
      opacity: Math.max(0.35, Math.min(1, 0.35 + 0.65 * ((1 + Math.sin(radian)) / 2))),
    };
  };

  const isRelated = (id) => activeNodeId && getRelatedItems(activeNodeId).includes(id);

  return (
    <div
  className="w-full min-h-screen overflow-hidden"
  style={{
    background:
      "transparent",
  }}
>
  <div
  className="
    grid lg:grid-cols-2 grid-cols-1 items-center gap-12 px-5 md:px-8 lg:px-12 py-20 lg:min-h-screen
  "
>
      {/* Section heading */}
      {/* <div className="absolute top-10 left-0 right-0 text-center pointer-events-none select-none">
        <p className="text-xs uppercase tracking-[0.3em] text-white/30 mb-1">Portfolio</p>
        <h2 className="text-3xl font-black tracking-tight">
          <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
            My Skills
          </span>
        </h2>
        <p className="text-white/40 text-xs mt-1">Klik node untuk detail · Klik area kosong untuk reset</p>
      </div> */}

     <div
  className="
    rounded-3xl border border-white/10 backdrop-blur-xl p-6 md:p-8 lg:p-10 order-2 lg:order-1
  "
  style={{
    background: "rgba(255,255,255,.03)",
  }}
>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
      My Skills
  </h2>

  <p className="text-slate-400 mb-10">
    Click any skill node on Right content to view detailed information.
  </p>

<h3 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-4">
      {activeSkill.title}
  </h3>

  <p className="text-slate-300 leading-8 mb-8">
    {activeSkill.content}
  </p>

  <div className="flex justify-between text-white mb-2">
    <span>Proficiency</span>
    <span>{activeSkill.energy}%</span>
  </div>

  <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
    <div
      className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-violet-500"
      style={{
        width: `${activeSkill.energy}%`,
      }}
    />
  </div>

  <div className="flex flex-wrap gap-2 mt-8">
    {activeSkill.tags.map((tag) => (
      <span
        key={tag}
        className="
  px-3 py-1
  rounded-full
  bg-cyan-500/10
  text-cyan-300
  text-xs
  md:text-sm
  border border-cyan-500/20
"
      >
        {tag}
      </span>
    ))}
  </div>
</div>

<div
  className="
    relative w-full flex items-center justify-center min-h-[500px] md:min-h-[600px] lg:min-h-[750px] order-1 lg:order-2
  "
>        <div
  className="
    absolute
    rounded-full
    w-[320px]
    h-[320px]
    md:w-[450px]
    md:h-[450px]
    lg:w-[575px]
    lg:h-[575px]
  "
  style={{
    background: "#12071f",
    boxShadow: "0 0 80px rgba(139,92,246,0.25)",
  }}
/>
        <div className="absolute w-full h-full flex items-center justify-center" ref={orbitRef}>

          {/* Decorative rings */}
`         <div className="absolute w-52 h-52 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full border border-white/5"></div>
          <div
  className="
    absolute
    w-[260px]
    h-[260px]
    md:w-[340px]
    md:h-[340px]
    lg:w-[420px]
    lg:h-[420px]
    rounded-full
    border
    border-white/[0.03]
  "
  style={{ borderStyle: "dashed" }}
></div>

          {/* Center orb */}
          <div className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-violet-600 via-fuchsia-500 to-pink-500 flex items-center justify-center z-10"
            style={{ boxShadow: "0 0 40px rgba(167,139,250,0.5), 0 0 80px rgba(167,139,250,0.2)" }}>
            <div className="absolute w-20 h-20 rounded-full border border-violet-400/30 animate-ping opacity-60"></div>
            <div className="absolute w-28 h-28 rounded-full border border-fuchsia-400/20 animate-ping opacity-40"
              style={{ animationDelay: "0.7s" }}></div>
            <Cpu size={22} className="text-white drop-shadow-lg" />
          </div>

          {/* Nodes */}
          {timelineData.map((item, index) => {
            const pos = calcPos(index, timelineData.length);
            const expanded = expandedItems[item.id];
            const related = isRelated(item.id);
            const pulsing = pulseEffect[item.id];
            const Icon = item.icon;
            const colors = CATEGORY_COLORS[item.category] || CATEGORY_COLORS.Soft;

            return (
              <div
                key={item.id}
                ref={(el) => (nodeRefs.current[item.id] = el)}
                className="absolute transition-all duration-700 cursor-pointer"
                style={{
                  transform: `translate(${pos.x}px, ${pos.y}px)`,
                  zIndex: expanded ? 200 : pos.zIndex,
                  opacity: expanded ? 1 : pos.opacity,
                }}
                onClick={(e) => {
  e.stopPropagation();
  setActiveSkill(item);
}}
              >
                {/* Glow aura */}
                <div
                  className={cn("absolute rounded-full", pulsing && "animate-pulse")}
                  style={{
                    background: `radial-gradient(circle, ${colors.ring} 0%, transparent 70%)`,
                    width: `${item.energy * 0.45 + 44}px`,
                    height: `${item.energy * 0.45 + 44}px`,
                    left: `-${(item.energy * 0.45 + 44 - 40) / 2}px`,
                    top: `-${(item.energy * 0.45 + 44 - 40) / 2}px`,
                    opacity: expanded ? 0.9 : 0.5,
                  }}
                ></div>

                {/* Icon button */}
                <div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300",
                    expanded
                      ? `bg-gradient-to-br ${colors.orb} border-white/60 scale-150 shadow-xl ${colors.glow}`
                      : related
                      ? `bg-gradient-to-br ${colors.orb} border-white/40 animate-pulse`
                      : "bg-white/5 border-white/20 hover:border-white/40"
                  )}
                >
                  <Icon size={15} className={expanded || related ? "text-white" : "text-white/70"} />
                </div>

                {/* Label */}
                <div className={cn(
                  "absolute whitespace-nowrap text-[10px] font-bold tracking-widest uppercase transition-all duration-300 left-1/2 -translate-x-1/2",
                  expanded ? "text-white top-14 scale-110" : "text-white/50 top-12"
                )}>
                  {item.title}
                </div>

               
              </div>
            );
          })}
        </div>
      </div>
    </div>
    </div>
  );
}

// ─── Skills Section Export ────────────────────────────────────────────────────
export default function Skills() {
  return <RadialOrbitalTimeline timelineData={skillsData} />;
}