import Link from "next/link";
import { FaFacebookF, FaInstagramSquare } from "react-icons/fa";
import { RiTwitterFill } from "react-icons/ri";
export default function Footer() {
  const footerContents = [
    { href: "/shop-all", label: "shop all" },
    {
      href: "/plants",
      label: "plants",
    },
    {
      href: "/cacti",
      label: "cacti",
    },
    {
      href: "/cart",
      label: "cart",
    },
    {
      href: "/our-story",
      label: "our story",
    },
    {
      href: "/contact-us",
      label: "contact us",
    },
  ];

  return (
    <footer className='bg-hero_bg '>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-10  sp container'>
        <div className='flex flex-col items-start max-md:items-center gap-2.5'>
          <span className='text-btn_bg font-extrabold text-3xl'>LeafyLoom</span>
          <small className='tracking-widest text-[0.8rem] text-dark/50'>
            PLANTS
          </small>
          <p>
            LeafyLoom is a website offering reliable, high-quality plants,
            ensuring each one is healthy and well-cared for before delivery.
          </p>
        </div>
        <div className='flex items-start max-md:items-center flex-col gap-5'>
          <h4>Quick Links </h4>

          <ul className=' space-y-1'>
            {footerContents.map((item) => (
              <li
                className='   flex flex-col  items-start  text-[0.9rem] text-btn_bg eq hover:text-green  capitalize'
                key={item.label}
              >
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='flex flex-col gap-5 items-start max-md:items-center'>
          <h4>Our Socials</h4>
          <div className='flex items-center justify-center gap-2.5'>
            <span>
              <FaFacebookF className='text-dark bg-light h-10 w-10 p-2' />
            </span>
            <span>
              <FaInstagramSquare className='text-dark bg-light h-10 w-10 p-2' />
            </span>
            <span>
              <RiTwitterFill className='text-dark bg-light h-10 w-10 p-2' />
            </span>
          </div>
        </div>
        <div className='flex flex-col items-start max-md:items-center gap-5 max-md:mt-10'>
          <h4 className='text-start'>Subscribe to Our Newsletter</h4>

          <input
            type='text'
            placeholder='Your email address..'
            className='py-3 px-6'
          />

          <Link
            href='/'
            className='uppercase py-3 block px-10 bg-btn_bg text-light tracking-widest  hover:bg-btn_bg/85 eq'
          >
            {" "}
            subscribe
          </Link>
        </div>
      </div>

      <div className='border-t-2 sp container max-md:text-center'>
        <p>
          Copyright &copy; {new Date().getFullYear()} LeafyLoom Plants | Powered
          by LeafyLoom Plants
        </p>
      </div>
    </footer>
  );
}
