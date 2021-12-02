import { useEffect } from "react";

export default function Navbar(props) {
  useEffect(() => {
    document.querySelectorAll("#mainNavigation nav a").forEach((element) => {
      if (element.getAttribute("href").substring(1) === props.active) {
        element.classList.add("activeLink");
      }
    });
  });

  return (
    <div
      id="mainNavigation"
      style={{
        backgroundColor: "rgba(0,0,0,0.75)",
        backdropFilter: "blur(5px)",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: "100",
      }}
    >
      <nav
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          height: "64px",
          fontSize: "3rem",
        }}
      >
        <span style={{ color: "grey" }}>Projects</span>
        <span style={{ color: "grey" }}>Photography</span>
        <a href="/about">About</a>
      </nav>
    </div>
  );
}
