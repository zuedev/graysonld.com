import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div id="about">
      <Navbar active={"about"} />

      <main>
        <img
          src="/gray2.jpg"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -99,
          }}
        />
        <p
          style={{
            fontSize: "1.5rem",
            margin: "50vh auto",
            padding: "3rem",
            width: "50vw",
            backgroundColor: "rgba(0,0,0,0.75)",
            backdropFilter: "blur(5px)",
          }}
        >
          My name is Grayson Hermelin and I am a Lighting Designer currently
          based in South Carolina, USA. I recently completed my education at the
          University of North Carolina School of the Arts receiving a BFA in
          Lighting Design under Clifton Taylor and Al Crawford. I am aspiring to
          move to the United Kingdom after the Covid-19 pandemic is resolved.
          Through professional as well as educational experiences, I have had
          the opportunity to design for Contemporary Ballet, Contemporary Dance,
          Opera, Theatrical Plays, lighting installations, lighting/projection
          showcases and more. I have always been interested in lighting. From
          the moment I stepped on stage as an actor as a child, I knew I wanted
          to know more. Through the teachings of Norman Coates, Clifton Taylor
          and Al Crawford, as well as an experience at Williamstown Theatre
          Festival, I was graciously given insight into the professional design
          process. Feel free to reach out to me by email for any inquires.
        </p>
      </main>
    </div>
  );
}
