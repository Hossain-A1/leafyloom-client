import { PlantType } from "@/types/plants.type";
import React from "react";
import CurrencyFormatter from "./shared/CurrencyFormatter";
import Link from "next/link";
import Image from "next/image";
import { RiShoppingBasketLine } from "react-icons/ri";
import { BiSolidShow } from "react-icons/bi";

interface ListViewProps {
  plant: PlantType;
}

export default function ListView({ plant }: ListViewProps) {
  return (
    <div className=' shadow-sm rounded-lg flex justify-center items-center  overflow-hidden'>
      <Link
        href={`/shop/${plant._id}`}
        className='relative block w-80 xl:h-80 md:h-64 max-sm:h-48 sm:h-80 group eq '
      >
        <Image
          src={plant.cover[0]}
          alt={plant.title}
          layout='fill'
          priority
          className='w-full h-full border-b-[1px]'
        />
        {/* Action Buttons */}
        <abbr
          title='Add to cart'
          className='absolute top-2 right-2 hidden group-hover:block eq'
        >
          <Link href='/cart'>
            <RiShoppingBasketLine className='text-xl text-green shadow-lg bg-light w-8 h-8 p-1 rounded-full' />
          </Link>
        </abbr>
        <abbr
          title='Quick View'
          className='absolute top-12 right-2 hidden group-hover:block eq'
        >
          <Link href={`/shop/${plant._id}`}>
            <BiSolidShow className='text-xl text-dark bg-light shadow-lg w-8 h-8 p-1 rounded-full' />
          </Link>
        </abbr>
        {/* Sale Badge */}
        {plant.price <= 79 && (
          <div className='absolute top-2 left-2 bg-white shadow-lg text-dark text-sm font-bold px-2 py-1 rounded-full'>
            Sale!
          </div>
        )}
      </Link>
      <div className='p-4 w-full'>
        <p className='text-gray-500 text-sm'>{plant.category}</p>
        <h2 className='text-xl text-start font-semibold'>{plant.title}</h2>
        <div className='text-yellow-500 my-2'>
          {"★".repeat(plant.rating) + "☆".repeat(5 - plant.rating)}
        </div>
        <div className='text-lg font-bold'>
        
            <span><CurrencyFormatter amount={plant.price}/></span>
            <p>{plant.description.substring(0,200)}...</p>
          
        </div>
      </div>
    </div>
  );
}
