import Image from "next/image";
import { PlantType } from "@/types/plants.type";

interface ShopProps {
  plant: PlantType;
}

export default function Shop({ plant }: ShopProps) {
  return (
    <div className='border rounded-lg  overflow-hidden'>
      <div className='relative w-full xl:h-[28rem] md:h-[22rem] max-sm:h-48 sm:h-80'>
        <Image
          src={plant.cover[0]}
          alt={plant.title}
          layout='fill'
          priority
          className='w-full h-full '
        />
        {/* Sale Badge */}
        {plant.isOnSale && (
          <div className='absolute top-2 left-2 bg-white text-red text-sm font-bold px-2 py-1 rounded-full'>
            Sale!
          </div>
        )}
      </div>
      <div className='p-4'>
        <p className='text-gray-500 text-sm'>{plant.category}</p>
        <h2 className='text-xl text-start font-semibold'>{plant.title}</h2>
        <div className='text-yellow-500 my-2'>
          {"★".repeat(plant.rating) + "☆".repeat(5 - plant.rating)}
        </div>
        <div className='text-lg font-bold'>
          {plant.isOnSale ? (
            <>
              <span className='line-through text-gray-500 mr-2'>
                ${plant.originalPrice?.toFixed(2)}
              </span>
              <span className='text-red-500'>${plant.price.toFixed(2)}</span>
            </>
          ) : (
            <span>${plant.price.toFixed(2)}</span>
          )}
        </div>
      </div>
    </div>
  );
}
