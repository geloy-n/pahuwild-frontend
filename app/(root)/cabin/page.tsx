import { getAllCabins } from "@/actions/cabin-action";
import CabinCard from "@/components/cabins/cabin-card";

const Cabins = async () => {
  const cabins = await getAllCabins();

  return (
    <div className="w-full py-8 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-6">
          Discover Our Cabins
        </h2>

        <p className="text-sm text-muted-foreground mb-6">
          Showing {cabins.length} {cabins.length === 1 ? "cabin" : "cabins"}
        </p>

        {cabins.length > 0 ? (
          <div className="flex items-center justify-center">
            <div className="flex flex-wrap items-center justify-center gap-6 sm:w-full">
              {cabins.map((cabin) => (
                <CabinCard key={cabin.id} cabin={cabin} />
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              No cabins found matching your search.
            </p>
          </div>
        )}
      </div>

      <div></div>
    </div>
  );
};

export default Cabins;
