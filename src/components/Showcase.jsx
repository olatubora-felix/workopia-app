import SearchShowcase from "./SearchShowcase";

const Showcase = () => {
  return (
    <section className="bg-showcase relative bg-cover bg-center bg-no-repeat h-72 flex items-center">
      <div className="overlay"></div>
      <div className="container mx-auto text-center z-10">
        <h2 className="text-4xl text-white font-bold mb-4">
          Find Your Dream Job
        </h2>
        <SearchShowcase />
      </div>
    </section>
  );
};

export default Showcase;
