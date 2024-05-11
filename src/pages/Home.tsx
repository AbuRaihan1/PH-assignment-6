import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import Mission from "../components/About/Mission";
import HeroSection from "../components/Hero/HeroSection";
import Testimonial from "../components/Testimonial/Testimonial";
import SuplyCard from "../components/supplies/SuplyCard";
import { useGetSuplliesQuery } from "../redux/api/api";
const Home = () => {
  const { data } = useGetSuplliesQuery(undefined);
  console.log(data);
  return (
    <div>
      <HeroSection />
      <div className="bg-gray-50 pt-6 pb-1 border px-3 rounded-lg">
        <div className="text-center text-2xl md:text-3xl font-bold mb-6">
          <h2>Essential Supplies</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data?.slice(0, 6).map((supply) => (
            <SuplyCard supply={supply} />
          ))}
        </div>

        <div className="flex justify-center items-center my-10">
          <Link to="/supplies">
            <Button className="w-60">View All</Button>
          </Link>
        </div>
      </div>
      <Mission />
      <Testimonial />
    </div>
  );
};

export default Home;
