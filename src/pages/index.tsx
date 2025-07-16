import Section from "@/components/section/Section";
import Banner from "@/components/common/ui/banner/Banner";
import FeaturedCategories from "@/components/homePage/featured-categories/FeaturedCategories";
import MiniProductSlider from "@/components/homePage/mini-product-slider/MiniProductSlider";
import SimpleProductCard from "@/components/common/product/product-card/SimpleProductCard";

export default function Home() {
  return (
    <>
      <Section>
        <Banner />
      </Section>

      <Section>
        <div>
          <h2 className="text-4xl text-[#253D4E] font-quickSand "> Featured Categories</h2>
        </div>
        <FeaturedCategories />
      </Section>

      <Section>
        <MiniProductSlider />
      </Section>

      <Section>
        <div>
          <h2 className="text-4xl text-[#253D4E] font-quickSand "> Popular Products</h2>
        </div>
        <SimpleProductCard/>
      </Section>

      <Section>
        <div>
          <h2 className="text-4xl text-[#253D4E] font-quickSand "> Popular Fruits</h2>
        </div>
        <SimpleProductCard />
      </Section>

    </>
  );
}
