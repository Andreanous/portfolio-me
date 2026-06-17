import GalaxyBackground from "./components/GalaxyBackground";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        background: "#020617",
        overflow: "hidden",
      }}
    >
      <GalaxyBackground />

      {/* Dark Mask */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.15)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
        }}
      >
        <AppRouter />
      </div>  
    </div>
  );
}

export default App;