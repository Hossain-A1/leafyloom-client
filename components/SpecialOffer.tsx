import React from "react";
import SectionTitle from "./shared/SectionTitle";
import Image from "next/image";

export default function SpecialOffer() {
  return (
    <section className='sp container'>
      <div className="flex flex-col gap-10 lg:gap-20">
        <SectionTitle
          subtitle='Special Offers'
          title='Unique deals & offers every single day'
        />

        <div className='flex lg:gap-40 gap-20 max-md:flex-col-reverse'>
          <figure className='lg:h-[55rem] lg:w-[42rem]'>
            <Image
              src='https://images.pexels.com/photos/2718447/pexels-photo-2718447.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt='hero image'
              priority
              height={720}
              width={1280}
              className='h-full w-full object-fill'
            />
          </figure>

          <div>
            <figure className=''>
              <Image
                src='https://images.pexels.com/photos/1903965/pexels-photo-1903965.jpeg?auto=compress&cs=tinysrgb&w=600'
                alt='hero image'
                priority
                height={720}
                width={1280}
                className='h-full w-full object-fill'
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
