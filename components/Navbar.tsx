import Link from "next/link";

const Navber = () => {
  const navContents = [
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
      href: "/our-story",
      label: "our story",
    },
    {
      href: "/contact-us",
      label: "contact us",
    },
  ];

  return (
    <header className='h-28 flex justify-center items-center border-b max-md:hidden'>
      <nav className=' flex justify-between  items-center container'>
        <div className='flex justify-center items-center gap-10'>
          <div className='flex flex-col items-center gap-2.5'>
            <span className='text-btn_bg font-extrabold text-3xl'>
              LeafyLoom
            </span>
            <small className='tracking-widest text-[0.8rem] text-dark/50'>
              PLANTS
            </small>
          </div>

          <ul className='lg:flex origin-top justify-center items-center max-lg:bg-white  duration-700  lg:gap-10  '>
            {navContents.slice(0, 3).map((item) => (
              <li
                className='   flex justify-center items-center text-[0.9rem]  uppercase'
                key={item.label}
              >
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <ul className='lg:flex origin-top justify-center items-center max-lg:bg-white  duration-700  lg:gap-10  '>
          {navContents.slice(3, 5).map((item) => (
            <li
              className='max-lg:py-5    flex justify-center items-center text-[0.9rem]  uppercase '
              key={item.label}
            >
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navber;
