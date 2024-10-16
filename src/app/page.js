export default () => {
  return (
    <>
      <video
        autoPlay
        loop
        muted
        className="object-cover h-screen w-screen fixed top-0 left-0 z-[-1]"
      >
        <source src="/photonacut.mp4" type="video/mp4" />
      </video>
      <section className="h-screen flex flex-col justify-center items-center text-center text-2xl md:text-4xl space-y-8">
        <h1 className="text-6xl md:text-8xl font-bold">Grayson Hermelin</h1>
        <div className="space-y-4">
          <p className="text-4xl md:text-5xl">Lighting Artist</p>
          <p>Esports Manager</p>
          <p>Game Developer</p>
        </div>
        <a
          href="/work"
          className="px-2 py-1 font-bold border-2 border-white hover:bg-white hover:text-black transition-colors duration-300 ease-in-out"
        >
          {"See Work >"}
        </a>
      </section>
    </>
  );
};
