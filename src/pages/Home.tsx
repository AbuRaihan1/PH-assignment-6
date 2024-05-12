import Mission from "../components/About/Mission";
import Statistics from "../components/About/Statistics";
import AboutFaq from "../components/Faq/AboutFaq";
import HeroSection from "../components/Hero/HeroSection";
import Testimonial from "../components/Testimonial/Testimonial";
import HomeSuplliesSec from "../components/supplies/HomeSuplliesSec";
import { useGetSuplliesQuery } from "../redux/api/api";

const Home = () => {
  const { data } = useGetSuplliesQuery(undefined);
  return (
    <div>
      <HeroSection />
      <HomeSuplliesSec data={data} />
      <Mission />
      <AboutFaq />
      <Statistics />
      <Testimonial />
    </div>
  );
};

export default Home;
