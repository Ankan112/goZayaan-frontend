import RootLayout from "@/components/layout/RootLayout";

export default function Home() {
  return (
    <div>
      <h1 className="bg-red-400 main-container">body</h1>
    </div>
  );
}
Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
