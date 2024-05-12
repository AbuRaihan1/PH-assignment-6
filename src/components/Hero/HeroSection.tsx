import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const bannerImg = "bg-[url('../src/assets/bannerPhoto.jpg')]";
  return (
    <div className="mt-6 relative pb-12">
      <div
        className={`${bannerImg} p-5 rounded-xl bg-cover bg-no-repeat h-[500px] bg-fixed relative `}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl"></div>

        <h2 className="text-3xl md:text-5xl text-white font-bold relative mt-20">
          No Empty Plates. <br />
          <span className="md:text-4xl text-2xl">No Hungry Hearts.</span>
        </h2>
        <p className="py-5 md:w-1/2 w-full text-white font-semibold relative ">
          We are on a mission to create lasting change. Our commitment? No empty
          plates, no hungry hearts. Join us in the fight against hunger, because
          together, we can nourish hope and build a brighter future for all.
        </p>
        <Link to="/about" className="inline relative">
          <Button className="inline">See more</Button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
