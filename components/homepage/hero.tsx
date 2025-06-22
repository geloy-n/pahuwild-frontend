import Link from "next/link";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>{" "}
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight">
          Escape to the <span className="text-amber-400">Wild</span>
        </h1>
        <p className="text-md md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
          Discover your perfect wilderness retreat. Book unique cabins in
          breathtaking locations for an unforgettable getaway.
        </p>
        <div className="flex flex-col sm:flex-row justify-center">
          <Button
            asChild
            size="lg"
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg"
          >
            <Link href="/cabin">Explore Cabins</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
