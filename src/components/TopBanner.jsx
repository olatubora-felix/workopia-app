import Title from "./Title";

const TopBanner = () => {
  return (
    <section className="bg-blue-900 text-white py-6 text-center  px-2">
      <div className="container mx-auto">
        <Title className="text-3xl">Unlock Your Career Potential</Title>
        <p className="text-lg mt-2">
          Discover the perfect job opportunity for you.
        </p>
      </div>
    </section>
  );
};

export default TopBanner;
