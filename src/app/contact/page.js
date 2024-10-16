export default () => {
  return (
    <>
      <section className="container mx-auto space-y-4 py-32">
        <h1 className="font-bold text-6xl">Contact Me</h1>
        <form
          action="https://formspree.io/f/mwpkkaen"
          method="POST"
          className="space-y-4"
        >
          <label className="block">
            <span className="text-lg">Name</span>
            <input
              type="text"
              name="name"
              className="block w-full border p-2 text-black"
              required
            />
          </label>
          <label className="block">
            <span className="text-lg">Email</span>
            <input
              type="email"
              name="email"
              className="block w-full border p-2 text-black"
              required
            />
          </label>
          <label className="block">
            <span className="text-lg">Message</span>
            <textarea
              name="message"
              className="block w-full border p-2 text-black"
              required
            ></textarea>
          </label>
          <label className="block">
            <span className="text-lg">
              Phone Number <span className="opacity-50">(optional)</span>
            </span>
            <input
              type="tel"
              name="phone"
              className="block w-full border p-2 text-black"
            />
          </label>
          <button
            type="submit"
            className="bg-[#0f0] text-black font-bold py-2 px-4"
          >
            Submit
          </button>
        </form>
      </section>
    </>
  );
};
