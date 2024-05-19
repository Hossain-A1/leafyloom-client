import Hero from "@/components/Hero";
import SpecialOffer from "@/components/SpecialOffer";
import ShopPage from "./shop/page";
import UserReview from "@/components/UserReview";
import Services from "@/components/Services";
import OurStory from "@/components/OurStory";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <SpecialOffer />
      <ShopPage />
      <OurStory />
      <UserReview />
      <Services />
    </main>
  );
}
