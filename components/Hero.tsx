import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <section className=' lg:h-[calc(100vh-7rem)] h-full w-full flex justify-center items-center bg-hero_bg'>
      <div className='container flex md:flex-row flex-col-reverse  gap-10  justify-center items-center h-full w-full p-5 '>
        <div className='flex flex-col items-start max-md:items-center gap-5  lg:w-[50vw] w-full  max-md:mt-80'>
          {" "}
          {/* Added text-center class */}
          <span >Plants</span>
          <h1>Bird of Paradise Plant</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            provident laboriosam nostrum id quisquam ipsam, consequuntur ut
          </p>
          <div className="flex  max-md:flex-col max-md:items-center  gap-5 mt-5 h-full w-full">
            <div className="flex gap-2.5 items-center">
            <span>999</span>
            <span>99</span>
            </div>
            <Link href='/' className="uppercase py-3 block px-10 bg-btn_bg text-light"> Add to Cart</Link>
          </div>
        </div>
        <div className='relative  h-full lg:w-[50vw] w-full '>
        
          <figure className='absolute z-30 lg:left-1/2 max-md:left-1/2 transform -translate-x-1/2 top-1/2 max-md:top-56 -translate-y-1/2 lg:h-[40rem] lg:w-[30rem] max-lg:h-[24rem] max-lg:w-[24rem] max-md:h-[15rem] max-md:w-[10rem] max-lg:top-2 max-lg:left-48'>
            <Image
              src='/images/plant_hero.png'
              alt='hero image'
              priority
              height={720}
              width={1280}
              className='h-full w-full object-fill'
            />
          </figure>
          <div className='absolute z-10 left-1/2  top-40 max-lg:top-20 max-md:top-40 transform -translate-x-1/2 lg:h-80 lg:w-80 max-md:h-28 max-md:w-28 rounded-full bg-gradient-to-tr from-light to-green'></div>
          <div className='absolute z-20 xl:left-20 max-lg:left-72 max-md:left-1/2 max-md:transform max-md:-translate-x-20 md:left-10 max-md:top-[15rem]  top-[20rem]    lg:h-48 lg:w-48 max-md:h-16 max-md:w-16 rounded-full bg-gradient-to-t from-light to-btn_bg'></div>
        </div>
      </div>
    </section>
  );
}
