import React, { useState } from "react";
import Shop from "./Shop";
import ListView from "./ListView";
import useFetch from "@/hooks/useFetch";
import { PlantType } from "@/types/plants.type";
import Loading from "./shared/Loading";
import Error from "./shared/Error";

export default function AllPlants() {
  const { data: plants, error, isLoading } = useFetch("/api/plants");
  const [grid_view, setGrid_view] = useState(true);
  if (error) {
    return error && <Error error={error.message} />;
  }
  if (isLoading) {
    return isLoading && <Loading isLoading={isLoading} />;
  }

  if (grid_view) {
    return (
      <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 max-sm:gap-4 md:gap-6'>
        {plants &&
          plants.map((plant: PlantType) => (
            <Shop key={plant._id} plant={plant} />
          ))}
      </div>
    );
  }
  if (!grid_view) {
    return (
      <div className='grid  grid-cols-1 lg:grid-cols-2 max-sm:gap-4 md:gap-6'>
        {plants &&
          plants.map((plant: PlantType) => (
            <ListView key={plant._id} plant={plant} />
          ))}
      </div>
    );
  }
}
