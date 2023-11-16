import RootLayout from "@/components/layout/RootLayout";

const Payment = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <h1>This page is under construction ...</h1>
    </div>
  );
};

export default Payment;
Payment.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
