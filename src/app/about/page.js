export default () => {
  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-screen bg-cover bg-center z-[-1]"
        style={{ backgroundImage: "url(/about.jpg)" }}
      >
        <div className="fixed top-0 left-0 w-full h-screen backdrop-blur-[2px] z-[-1]"></div>
      </div>

      <section className="container mx-auto py-16 px-8 text-2xl text-justify space-y-8">
        <h1 className="text-8xl">About Me</h1>
        <p>Hello! Thank you for taking the time to look through my work. :)</p>
        <p>
          I am a Lighting Artist currently based in Colchester, United Kingdom.
          Through both professional and educational experience, I’ve had the
          opportunity to design for a variety of performance art forms,
          including Contemporary Ballet, Contemporary Dance, Opera, and
          Theatrical Plays. My work extends beyond traditional formats, as I
          have also engaged in lighting installations and lighting/projection
          showcases, allowing for innovative explorations of space and movement.
          Each project has contributed to my understanding of how lighting can
          enhance storytelling and evoke emotional responses, emphasizing the
          importance of light as a fundamental element in the visual narrative
          of any performance.
        </p>
        <p>
          I hold a Bachelors of Fine Arts for Lighting Design from the
          University of North Carolina School of the Arts.
        </p>
        <p>Feel free to reach out on the contact page.</p>
        <p>Pronouns: He/Him/His</p>
      </section>
    </>
  );
};
