import Banner from "@/components/Banner";
import Category from "@/components/Category";
import RootLayout from "@/components/layout/RootLayout";

export default function Home() {
  return (
    // Margin Top 56 px (mt-14) must add otherwise banner section goes to inside the navbar.
    <div className="main-container">
      <Banner />
      <Category />
    </div>
  );
}
Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
