import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <section className=' lg:h-[calc(100vh-7rem)] h-full w-full flex justify-center items-center bg-hero_bg'>
      <div className='container flex md:flex-row flex-col-reverse  gap-10  justify-center items-center h-full w-full p-5 '>
        <div className='flex flex-col items-start max-md:items-center gap-5  lg:w-[50vw] w-full  max-md:mt-80 sm:mt-[38rem] lg:mt-0 md:mt-0 '>
          {" "}
          {/* Added text-center class */}
          <span>Plants</span>
          <h1>Bird of Paradise Plant</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            provident laboriosam nostrum id quisquam ipsam, consequuntur ut
          </p>
          <div className='flex  max-md:flex-col max-md:items-center  gap-5 mt-5 h-full w-full'>
            <div className='flex gap-2.5 items-center'>
              <span>999</span>
              <span>99</span>
            </div>
            <Link
              href='/'
              className='uppercase py-3 block px-10 bg-btn_bg text-light  hover:bg-btn_bg/85 eq'
            >
              {" "}
              Add to Cart
            </Link>
          </div>
        </div>
        <div className='relative h-full lg:w-[50vw] w-full '>
          <figure className='absolute max-sm:h-72 max-sm:w-52 z-30 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:top-[50vh] max-sm:top-52 sm:h-[30rem] sm:w-[30rem] md:top-5 md:h-80 md:w-80 lg:h-[30rem] lg:w-[25rem] lg:top-60 xl:top-1/2'>
            <Image
              src='/images/plant_hero.png'
              alt='hero image'
              priority
              height={720}
              width={1280}
              className='h-full w-full object-fill'
            />
          </figure>
          <div className='absolute max-sm:top-32 left-1/2 -translate-x-[48%] z-10 max-sm:h-40 max-sm:w-40 rounded-full bg-gradient-to-tr from-light to bg-green sm:h-80 sm:w-80 sm:top-[30vh] sm:left-[55%] md:h-52 md:w-52  md:-top-20 lg:w-[18rem] lg:h-[18rem] lg:left-1/2 lg:top-28 xl:top-1/2 xl:-translate-y-1/2'></div>
          <div
            className='absolute  z-20 max-sm:left-1/2 max-sm:-translate-x-24  max-sm:top-52
  max-sm:transform max-sm:h-24 max-sm:w-24 rounded-full bg-gradient-to-tl from-light to bg-btn_bg sm:h-48 sm:w-48 sm:top-[50vh] sm:left-40 md:h-28 md:w-28 md:top-5 md:left-16 max-xl:top-80 lg:top-60 lg:left-16  lg:h-40 lg:w-40  xl:left-36 xl:top-[22rem] 2xl:left-36 2xl:top-[42rem]'
          ></div>
        </div>
      </div>
    </section>
  );
}
