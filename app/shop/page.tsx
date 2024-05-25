"use client";
import AllPlants from "@/components/AllPlants";
import Shop from "@/components/Shop";
import Sort from "@/components/Sort";
import Error from "@/components/shared/Error";
import Loading from "@/components/shared/Loading";
import SectionTitle from "@/components/shared/SectionTitle";
import useFetch from "@/hooks/useFetch";
import { PlantType } from "@/types/plants.type";
import Link from "next/link";
import { RiEqualizerFill } from "react-icons/ri";

export default function ShopPage() {

  return (
    <main className='sp container'>
      {/* <div>
        <SectionTitle subtitle='shop' title='Most Popular Plants' />
      </div> */}

      <div>
        <Link href='/'>home /</Link>
      </div>

      {/* oparation short */}

      <div className="flex justify-between items-center">
        {/* filter by price */}
        <div className='filter-price flex items-center gap-1 cursor-pointer'>
<h4><RiEqualizerFill/></h4>
<p>Filter</p>
        </div>
       <div>

      <Sort/>
       </div>
      </div>

      {/* ----------------------------------- */}
      <div className='flex justify-center items-center'>
 
      </div>
      <div className='px-6 pt-14'>
       <AllPlants/>
      </div>
    </main>
  );
}
