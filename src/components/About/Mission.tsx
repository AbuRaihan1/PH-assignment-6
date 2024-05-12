import aboutImg from "../../assets/aboutBanner2.jpg";
const Mission = () => {
  return (
    <div className="grid md:grid-cols-2 justify-center gap-10 grid-cols-1 my-12  rounded-xl p-4 border">
      <div className="">
        <img
          className="w-full rounded-ss-full rounded-ee-full h-[350px]"
          src={aboutImg}
          alt=""
        />
      </div>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-gray-500">About US</h2>
          <p className="text-justify text-gray-700 font-semibold">
            At Food Distribution, we believe in the power of compassion and
            collective action. Our mission is simple: to alleviate hunger and
            nourish hope. We envision a world where no one goes to bed hungry,
            where every plate is filled, and every heart is warmed.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2 text-gray-500">Our Story</h2>
          <p className="text-justify text-gray-700 font-semibold">
            Driven by empathy and fueled by purpose, our journey began with a
            single act of kindness. What started as a small initiative to
            provide meals to those in need has grown into a movement. We’ve
            witnessed the transformative impact of a warm meal on a cold night,
            the joy in a child’s eyes when they receive their daily sustenance,
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
