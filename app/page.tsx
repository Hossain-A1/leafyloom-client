import Hero from "@/components/Hero";
import SpecialOffer from "@/components/SpecialOffer";
import ShopPage from "./shop/page";
import OurStory from "@/components/OurStory";
import OurStoryPage from "./our-story/page";

export default function HomePage() {
  return (
    <main>
      <Hero/>
      <SpecialOffer/>
      <ShopPage/>
      <OurStoryPage/>
    </main>
  )
}
