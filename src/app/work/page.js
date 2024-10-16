export default () => {
  return (
    <>
      <div className="container mx-auto py-16 px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            title: "Design",
            image: "/work_design.jpg",
          },
          {
            title: "Esports",
            image: "/work_esports.png",
          },
          {
            title: "Game Dev",
            image: "/work_gamedev.jpg",
          },
          {
            title: "IDK",
            image: "https://place-hold.it/500",
          },
          {
            title: "Photography",
            image: "/work_photography.jpg",
          },
          {
            title: "Art",
            image: "/work_art.jpg",
          },
        ].map((item) => (
          <section
            key={item.title}
            className="flex flex-col items-center bg-cover bg-center text-4xl md:text-5xl w-full h-96 lg:w-96 align-middle justify-center aspect-square border-4 border-white font-bold mx-auto"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            {item.title}
          </section>
        ))}
      </div>
    </>
  );
};
