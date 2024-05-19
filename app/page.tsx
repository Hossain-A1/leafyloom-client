import Hero from "@/components/Hero";
import SpecialOffer from "@/components/SpecialOffer";
import ShopPage from "./shop/page";
import OurStoryPage from "./our-story/page";
import UserReview from "@/components/UserReview";
import Services from "@/components/Services";

export default function HomePage() {
  return (
    <main>
      <Hero/>
      <SpecialOffer/>
      <ShopPage/>
      <OurStoryPage/>
      <UserReview/>
      <Services/>
    </main>
  )
}
