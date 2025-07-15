import Section from "@/components/section/Section";
import Banner from "@/components/common/ui/banner/Banner";
import FeaturedCategories from "@/components/homePage/featured-categories/FeaturedCategories";

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
        <FeaturedCategories/>
      </Section>
    </>
  );
}
