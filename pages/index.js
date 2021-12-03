import { useEffect } from "react";
import Navbar from "../components/Navbar";

export default function Home() {
  useEffect(() => {
    window.nameFade = setInterval(() => {
      var el = document.getElementById("main");
      var val = parseFloat(el.style.opacity);

      if (val < 1) {
        console.log("go: " + val);
        el.style.opacity = val + 0.01;
      }
    }, 20);
  });

  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          zIndex: "-99",
        }}
      >
        <video
          autoPlay
          playsInline
          muted
          loop
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            objectFit: "cover",
          }}
          poster="/photonacut-poster1.png"
        >
          <source src="/photonacut.mp4" type="video/mp4" />
        </video>
      </div>

      <Navbar />

      <main
        id="main"
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          margin: "auto",
          textAlign: "center",
          padding: "2rem",
          width: "fit-content",
          opacity: 0,
        }}
      >
        <h1 style={{ margin: 0, fontSize: "6rem" }}>Grayson Hermelin</h1>
        <h2 style={{ margin: 0, fontSize: "4rem" }}>Lighting Designer</h2>
      </main>
    </div>
  );
}
