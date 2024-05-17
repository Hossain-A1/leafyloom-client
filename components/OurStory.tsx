import SectionTitle from "@/components/shared/SectionTitle";
import Link from "next/link";
export default function OurStory() {
  return (
    <section className=''>
      <div className=' flex flex-col items-center gap-2.5'>
        <div className='lg:w-[50rem] w-full'>
          <SectionTitle
            subtitle='Our story'
            title='We are a family owned, retail and wholesale plant nursery, located in New York.'
          />
        </div>
        <div className='lg:w-[60rem] w-full flex flex-col items-center gap-2.5 lg:text-center text-start '>
          <p>
            We are a family-owned plant nursery based in New York, specializing
            in both retail and wholesale. Our diverse selection caters to
            gardeners, landscapers, and plant enthusiasts alike. Committed to
            quality and service, we strive to provide the best plants for all
            your needs.
          </p>

       <div className="mt-2.5">
       <Link
            href='/our-story'
            className='uppercase flex items-center justify-center py-3 px-10 bg-btn_bg text-light text-center w-46 h-auto hover:bg-btn_bg/85 eq'
          >
            reed more
          </Link>
       </div>
        </div>
      </div>
    </section>
  );
}
