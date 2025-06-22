import SectionTitle from "../shared/section-title";
import { Button } from "../ui/button";
import CabinCard from "./cabin-card";
import { getFeaturedCabins } from "@/actions/cabin-action";

const FeaturedCabins = async () => {
  const featuredCabins = await getFeaturedCabins();

  return (
    <section className="py-10 container mx-auto">
      <SectionTitle
        title="Featured Cabins"
        subTitle="Discover our most popular wilderness retreats, each offering a unique experience in nature"
      />

      <div className="flex flex-wrap justify-center items-center gap-6">
        {featuredCabins.map((cabin) => (
          <CabinCard key={cabin.id} cabin={cabin} />
        ))}
      </div>

      <div className="text-center mt-12">
        <Button
          asChild
          size="lg"
          variant="outline"
          className="border-amber-600 text-amber-700 hover:bg-amber-50 hover:text-amber-900"
        ></Button>
      </div>
    </section>
  );
};

export default FeaturedCabins;
