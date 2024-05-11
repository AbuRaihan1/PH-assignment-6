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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data?.slice(0, 6).map((supply) => (
          <SuplyCard supply={supply} />
        ))}
      </div>
      <Mission />
      <Testimonial />
    </div>
  );
};

export default Home;
