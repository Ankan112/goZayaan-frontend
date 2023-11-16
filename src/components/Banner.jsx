import { Button } from "antd";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="banner-bg">
      <div className="main-container flex items-center text-white h-[80vh]">
        <div>
          <h1 className="w-full md:w-1/2">
            The digital gateway to endless possibilities, connecting learners
            with knowledge, anytime, anywhere.
          </h1>
          <Link href={"/courses"}>
            <Button
              type="primary"
              size="large"
              className="mt-5 rounded-sm px-8 "
            >
              Explore
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
