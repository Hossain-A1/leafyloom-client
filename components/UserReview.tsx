import Image from "next/image";
import Link from "next/link";

const UserReview = () => {
  return (
    <section >
      <div className="">
        <div className="pb-20 lg:pb-40 text-center ">
          <span>Maria Oliver</span>
        </div>
        <div className='bg-hero_bg sp grid md:grid-cols-2 gap-10 max-md:gap-20 grid-cols-1'>
          <div className="lg:pl-28 2xl:pl-80 md:pl-10 lg:w-[30rem] 2xl:w-[50rem] flex flex-col  items-center md:items-start justify-center gap-5 ">

          <figure className='h-28 w-28 rounded-full overflow-hidden '>
              <Image
                src='https://randomuser.me/api/portraits/women/31.jpg'
                alt='hero image'
                priority
                height={720}
                width={1280}
                className='h-full w-full object-cover'
              />
            </figure>

            <h3>{`“ Your plant website is a fantastic resource for plant enthusiasts of all levels! The detailed care guides and beautiful imagery make it a pleasure to explore. Keep up the great work! ”`}</h3>

            <h2 className="text-start">Give the Gift of Plants</h2>
            <p className="text-center md:text-justify">Give the Gift of Plants offers a unique and thoughtful way to celebrate any occasion with beautiful, curated plant gifts that bring joy and nature into any space.</p>

            <Link
              href='/'
              className='uppercase py-3 block px-10 bg-btn_bg text-light  hover:bg-btn_bg/85 eq'
            >
              {" "}
              buy gift card
            </Link>
          </div>

          <div>
            <figure className='lg:h-[55rem] md:h-[45rem] xl:w-[44rem] max-lg:h-[30rem] w-full'>
              <Image
                src='https://images.pexels.com/photos/6640443/pexels-photo-6640443.jpeg?auto=compress&cs=tinysrgb&w=600'
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
};

export default UserReview;
