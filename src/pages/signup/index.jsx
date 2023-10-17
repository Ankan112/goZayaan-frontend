import MainForm from "@/components/shared/Form";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const SingUpPage = () => {
  const handleFormSubmit = (data) => {
    console.log(data);
  };
  // Name is mandatory but label,type and placeholder are optional.
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
      <div className="mt-14 main-container">
        <p className="text-center text-3xl mt-5 font-semibold">sign up page</p>
        <div className="mt-10">
          <MainForm
            fields={fields}
            onSubmit={handleFormSubmit}
            btnName={"Sign Up"}
          />
        </div>
      </div>
    </>
  );
};

export default SingUpPage;
