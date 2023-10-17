import RootLayout from "@/components/layout/RootLayout";

export default function Home() {
  return (
    // Margin Top 56 px (mt-14) must add otherwise banner section goes to inside the navbar.
    <div className="bg-orange-200 mt-14">
      <h1 className="main-container">body</h1>
    </div>
  );
}
Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
