import Footer from "@/components/Footer";
import Services from "@/components/Services";
import Link from "next/link";

export default function OurStoryPage() {
  const backgroundImageUrl =
    "https://images.pexels.com/photos/1407305/pexels-photo-1407305.jpeg?auto=compress&cs=tinysrgb&w=600";

  return (
    <main className='sp h-[calc(100vh-7rem)] w-full relative'>
      <div
        className='h-full w-full fixed top-28 z-10 left-0 right-0 bottom-auto'
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <div className='absolute h-full w-full z-20   '>
        <div className='md:h-60 h-36 md:mt-20 mt-28 w-full text-light text-center '>
          <h1 className=''>Our Story</h1>
        </div>

        <div className=''>
          <div className='flex flex-col items-start  sp bg-light'>
            <div className='container'>
              <div className='flex flex-col items-start text-start lg:py-20 py-10 border-b-2'>
                <span>Who we are</span>
                <h2 className='text-start'>
                  We are a family owned, retail and wholesale plant nursery,
                  located in New York.
                </h2>
              </div>
              <div className='grid lg:grid-cols-3 grid-cols-1 lg-py:20 py-10'>
                <span className='col-span-1'>About us</span>
                <div className=' flex flex-col gap-10 col-span-2 '>
                  <div className=' flex flex-col items-start gap-2.5'>
                    <h4 className='text-start'>
                      We've started our business lorem ipsum dolor sit amet.
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum. Sed ut
                      perspiciatis unde omnis iste natus error sit voluptatem.
                    </p>
                  </div>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum. Sed ut perspiciatis
                    unde omnis iste natus.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='py-48   text-light flex flex-col  items-center  justify-center '>
            <div className='flex flex-col items-center gap-10 w-2/3 '>
              <span className='text-light'>Delightful plants</span>
              <h2>
                If you’ve always wanted to have plants at home, why not start
                today?
              </h2>
              <Link
                href='/our-story'
                className='uppercase flex items-center justify-center py-3 px-10 bg-btn_bg text-light text-sm tracking-widest text-center  h-auto hover:bg-btn_bg/85 eq'
              >
                start shopping
              </Link>
            </div>
          </div>
          <div className='bg-light'>
            <Services />
            <Footer/>
          </div>
        </div>
      </div>
    </main>
  );
}
