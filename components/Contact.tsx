import Link from "next/link";

export default function Contact() {
  const backgroundImageUrl =
    "https://images.pexels.com/photos/1407305/pexels-photo-1407305.jpeg?auto=compress&cs=tinysrgb&w=600";
  return (
    <main className='pb-80'>
      <div className='relative h-[calc(100vh-5rem)] w-full '>
        <div
          className='absolute z-10 top-0 left-0 right-0 bottom-0 h-[30rem]'
          style={{
            backgroundImage: `url(${backgroundImageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        <div className='absolute text-center md:top-40 top-20 z-20 left-1/2 transform -translate-x-1/2 text-light space-y-10'>
          <h1>contact</h1>
          <h4>
            If you'd like to get in touch with us, please don't hesitate lorem
            ipsum dolor sit amet, consectetur adipisicing eli sed do eiusmod
            tempor.
          </h4>
        </div>

        <div className='absolute max-md:hidden z-30 top-full left-10   '>
          <h3>Contact Info</h3>
          <p>Email: info@example.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>Address: 123 Fifth Avenue, New York, NY 10160</p>
        </div>
        <div className=' lg:px-20  absolute z-40  right-0   top-[26rem] md:w-[25rem] lg:w-[40rem]   h-[20rem]'>
          <div className='flex flex-col gap-5 p-20  bg-green/50 text-dark'>
            <div className='flex flex-wrap gap-5'>
              <input
                type='text'
                placeholder='First Name'
                className='py-2 px-4 outline-none bg-light text-dark'
              />
              <input
                type='text'
                placeholder='Last Name'
                className='py-2 px-4 outline-none bg-light text-dark'
              />
            </div>
            <input
              type='eamil'
              placeholder='Email Address'
              className='py-2 px-4 outline-none bg-light text-dark'
            />
            <input
              type='text'
              placeholder='Subject'
              className='py-2 px-4 outline-none  bg-light text-dark'
            />

            <textarea
              name='message'
              cols={20}
              rows={5}
              className='outline-none py-2 px-4 text-dark resize-none'
            >
              Your Message
            </textarea>
            <Link
              href='/'
              className='uppercase flex items-center justify-center py-3 px-10 bg-btn_bg text-light text-sm tracking-widest text-center eq h-auto hover:bg-btn_bg/85 eq'
            >
              Submit
            </Link>
          </div>
        </div>

     
      </div>
    </main>
  );
}
