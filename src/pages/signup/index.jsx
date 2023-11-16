import MainForm from "@/components/shared/Form";
import Navbar from "@/components/shared/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingUpPage = () => {
  const handleFormSubmit = (data) => {
    // console.log(data);
  };
  const fields = [
    { name: "name", label: "Name" },
    { name: "email", label: "Email", type: "email" },
    { name: "phone", label: "Phone" },
    { name: "address", label: "Address" },
    { name: "password", label: "Password", type: "password" },
  ];
  return (
    <>
      <Navbar />
      <div className="mt-14 main-container flex items-center flex-col-reverse md:flex-row">
        <div className="w-full md:w-1/2">
          <p className=" text-3xl mt-5 font-semibold">
            Welcome! Please Sign Up
          </p>
          <div className=" mt-10">
            <MainForm
              fields={fields}
              onSubmit={handleFormSubmit}
              toggle={
                <p className="mt-3">
                  Already have an account? Please{" "}
                  <Link href={"/login"}>Login</Link>
                </p>
              }
            />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <Image
            alt="auth"
            src={"/images/auth.png"}
            height={500}
            layout="responsive"
            width={300}
          />
        </div>
      </div>
    </>
  );
};

export default SingUpPage;
