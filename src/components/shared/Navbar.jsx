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
    <div className="relative">
      <div className=" h-14 flex justify-center items-center fixed top-0 w-full bg-opacity-70 bg-white backdrop-blur-lg">
        <div className="main-container flex justify-between items-center">
          <h1>Ankan Halder</h1>
          <div className="hidden md:block">
            <div className="flex justify-center items-center">
              <Link
                href={"/home"}
                className="no-underline flex items-center text-lg cursor-pointer mr-5"
              >
                <span className="text-black text-lg font-semibold">Home</span>
              </Link>
              <Link
                href={"/about"}
                className="no-underline flex items-center text-lg cursor-pointer mr-5"
              >
                <span className="text-black text-lg font-semibold">
                  About Us
                </span>
              </Link>
              <Link
                href={"/contact"}
                className="no-underline flex items-center text-lg cursor-pointer mr-5"
              >
                <span className="text-black text-lg font-semibold">
                  Contact
                </span>
              </Link>
              <Link href={"/login"} className="">
                <Button type="primary" className="font-semibold">
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
          <Link href={"/home"} className="no-underline text-black">
            <p className="mb-3 font-medium">Home</p>
          </Link>
          <Link href={"/home"} className="no-underline text-black">
            <p className="mb-3 font-medium">About</p>
          </Link>
          <Link href={"/home"} className="no-underline text-black">
            <p className="mb-3 font-medium">Contact</p>
          </Link>
          <Link href={"/home"} className="no-underline text-black">
            <p className="mb-3 font-medium">Blog</p>
          </Link>
          <Link href={"/home"} className="no-underline text-black">
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
