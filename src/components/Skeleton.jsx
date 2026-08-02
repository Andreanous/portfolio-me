function SkeletonBox({ width = "100%", height = "16px", style = {} }) {
  return (
    <div
      style={{
        width,
        height,
        borderRadius: "8px",
        background: "rgba(255,255,255,0.08)",
        position: "relative",
        overflow: "hidden",
        ...style,
      }}
    >
      <div className="skeleton-shimmer" />
    </div>
  );
}

function SkeletonCard({ type = "project" }) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "24px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <SkeletonBox height={type === "project" ? "180px" : "220px"} />
      <SkeletonBox width="70%" height="20px" />
      <SkeletonBox width="100%" height="14px" />
      <SkeletonBox width="90%" height="14px" />
      <SkeletonBox width="60%" height="14px" />
    </div>
  );
}

function SkeletonGrid({ count = 3, type = "project" }) {
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "35px",
        }}
      >
        {Array.from({ length: count }).map((_, index) => (
          <SkeletonCard key={index} type={type} />
        ))}
      </div>

      <style>{`
        .skeleton-shimmer {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255,255,255,0.08) 50%,
            transparent 100%
          );
          animation: skeletonSlide 1.4s infinite;
        }

        @keyframes skeletonSlide {
          from { transform: translateX(-100%); }
          to { transform: translateX(100%); }
        }
      `}</style>
    </>
  );
}

export default SkeletonGrid;
export { SkeletonBox, SkeletonCard };
