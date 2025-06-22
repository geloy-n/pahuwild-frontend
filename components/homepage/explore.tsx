import Link from "next/link";
import SectionTitle from "../shared/section-title";
import { Button } from "../ui/button";

const Explore = () => {
  return (
    <section className="py-20 bg-amber-50">
      <div className="flex flex-col items-center justify-center container mx-auto">
        <SectionTitle
          title="Ready for Your Next Adventure?"
          subTitle="Book your perfect wilderness retreat today and create memories that will last a lifetime. Plus, with our flexible policy, you can cancel anytime. Your plans, your peace of mind!"
        />
        <Button
          asChild
          size="lg"
          className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 text-lg"
        >
          <Link href="/cabin">Start Exploring</Link>
        </Button>
      </div>
    </section>
  );
};

export default Explore;
