"use client";
import Shop from "@/components/Shop";
import Error from "@/components/shared/Error";
import Loading from "@/components/shared/Loading";
import SectionTitle from "@/components/shared/SectionTitle";
import useFetch from "@/hooks/useFetch";
import { PlantType } from "@/types/plants.type";

export default function ShopPage() {
  const { data: plants, error, isLoading } = useFetch("/api/plants");

  return (
    <main>
   
      <div>
        <SectionTitle subtitle='shop' title='Most Popular Plants' />
      </div>

      <div className="flex justify-center items-center">
      {isLoading && <Loading isLoading={isLoading} />}
      {error && <Error error={error.message} />}
      </div>
      <div className='p-6'>
        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 max-sm:gap-4 md:gap-6'>
          {plants &&
            plants.map((plant: PlantType) => (
              <Shop key={plant._id} plant={plant} />
            ))}
        </div>
      </div>
    </main>
  );
}
