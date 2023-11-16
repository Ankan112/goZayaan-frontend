import Banner from "@/components/Banner";
import Category from "@/components/Category";
import RootLayout from "@/components/layout/RootLayout";

export default function Home() {
  return (
    <>
      <Banner />
      <Category />
    </>
  );
}
Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
