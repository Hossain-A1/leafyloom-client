import SectionTitle from "@/components/shared/SectionTitle";
import Image from "next/image";
import Link from "next/link";
export default function OurStory() {
  return (
    <section className='lg:py-20 sp container'>
      <div className=' flex flex-col items-center gap-2.5'>
        <div className='lg:w-[50rem] w-full'>
          <SectionTitle
            subtitle='Our story'
            title='We are a family owned, retail and wholesale plant nursery, located in New York.'
          />
        </div>
        <div className='lg:w-[60rem] w-full flex flex-col items-center gap-2.5 lg:text-center text-justify '>
          <p>
            We are a family-owned plant nursery based in New York, specializing
            in both retail and wholesale. Our diverse selection caters to
            gardeners, landscapers, and plant enthusiasts alike. Committed to
            quality and service, we strive to provide the best plants for all
            your needs.
          </p>

          <div className='mt-2.5'>
            <Link
              href='/our-story'
              className='uppercase flex items-center justify-center py-3 px-10 bg-btn_bg text-light text-sm tracking-widest text-center w-44 h-auto hover:bg-btn_bg/85 eq'
            >
              reed more
            </Link>
          </div>
        </div>
      </div>

      {/* catagoryes picture */}

      <div className='catagory-pictures flex items-center gap-5 mt-20  lg:mt-40 '>
        <Link href='/shop' className="lg:h-[45rem] block w-1/2 2xl:w-full 2xl:h-full  relative overflow-hidden">
          <Image
            src='https://images.pexels.com/photos/1201798/pexels-photo-1201798.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='hero image'
            priority
            height={720}
            width={1280}
            className='h-full w-full object-fill'
          />
       <span className="absolute py-1  bg-light text-dark bottom-5 left-2.5 right-2.5 flex justify-center items-center flex-col ">
        <b className="text-sm  uppercase font-extrabold">cacti</b>
        <small className="text-dark/70">4 Products</small>
       </span>
        </Link>
        <Link href='/shop'  className="lg:h-[45rem] block w-1/2 2xl:w-full 2xl:h-full relative overflow-hidden">
          <Image
            src='https://images.pexels.com/photos/6903989/pexels-photo-6903989.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='hero image'
            priority
            height={720}
            width={1280}
            className='h-full w-full object-fill'
          />
          <span className="absolute py-1  bg-light text-dark bottom-5 left-2.5 right-2.5 flex justify-center items-center flex-col ">
        <b className="text-sm  uppercase font-extrabold">Plants</b>
        <small className="text-dark/70">8 Products</small>
       </span>
        </Link>
      </div>
    </section>
  );
}
