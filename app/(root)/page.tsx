import Explore from "@/components/homepage/explore";
import FeaturedCabins from "@/components/cabins/featured-cabins";
import FeaturesSection from "@/components/homepage/features";
import Hero from "@/components/homepage/hero";

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedCabins />
      <FeaturesSection />
      <Explore />
    </>
  );
};

export default HomePage;
