import { Button } from "antd";
import Link from "next/link";
import { useState } from "react";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="relative mb-14">
      <div className=" h-14 flex justify-center items-center fixed top-0 w-full bg-opacity-70 bg-white backdrop-blur-lg">
        <div className="main-container flex justify-between items-center">
          <h1>Easy Education</h1>
          <div className="hidden md:block">
            <div className="flex justify-center items-center">
              <Link
                href={"/"}
                className="no-underline hover:underline flex items-center text-lg cursor-pointer mr-5"
              >
                <span className="text-black text-lg font-semibold">Home</span>
              </Link>
              <Link
                href={"/courses"}
                className="no-underline hover:underline flex items-center text-lg cursor-pointer mr-5"
              >
                <span className="text-black text-lg font-semibold">
                  Courses
                </span>
              </Link>
              <Link
                href={"/dashboard"}
                className="no-underline hover:underline flex items-center text-lg cursor-pointer mr-5"
              >
                <span className="text-black text-lg font-semibold">
                  Dashboard
                </span>
              </Link>
              <Link href={"/login"} className="">
                <Button type="primary" className="font-semibold rounded">
                  Login
                </Button>
              </Link>
            </div>
          </div>
          <div className="block md:hidden">
            {toggle ? (
              <CloseOutlined className="text-lg" onClick={handleToggle} />
            ) : (
              <MenuOutlined className="text-lg" onClick={handleToggle} />
            )}
          </div>
        </div>
      </div>
      <div
        className={`bg-white transition-transform transform ${
          toggle ? "translate-x-0" : "-translate-x-full"
        } w-full fixed top-14 left-0`}
      >
        <div className="main-container text-center py-5">
          <Link href={"/"} className="no-underline hover:underline text-black">
            <p className="mb-3 font-medium">Home</p>
          </Link>
          <Link
            href={"/courses"}
            className="no-underline hover:underline text-black"
          >
            <p className="mb-3 font-medium">Courses</p>
          </Link>
          <Link
            href={"/dashboard"}
            className="no-underline hover:underline text-black"
          >
            <p className="mb-3 font-medium">Dashboard</p>
          </Link>
          <Link href={"/login"} className="no-underline text-black">
            <Button type="primary" className="mb-3 font-medium">
              Login
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
