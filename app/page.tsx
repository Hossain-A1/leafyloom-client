import Hero from "@/components/Hero";
import SpecialOffer from "@/components/SpecialOffer";
import ShopPage from "./shop/page";
import OurStoryPage from "./our-story/page";
import UserReview from "@/components/UserReview";

export default function HomePage() {
  return (
    <main>
      <Hero/>
      <SpecialOffer/>
      <ShopPage/>
      <OurStoryPage/>
      <UserReview/>
    </main>
  )
}
