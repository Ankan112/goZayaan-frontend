import MainForm from "@/components/shared/Form";
import Navbar from "@/components/shared/Navbar";
import Image from "next/image";
import Link from "next/link";

const Login = () => {
  const handleFormSubmit = (data) => {
    console.log(data);
  };
  // Name is mandatory but label,type and placeholder are optional.
  const fields = [
    { name: "fullName", label: "Full Name" },
    { name: "password", label: "Password", type: "password" },
  ];
  return (
    <>
      <Navbar />
      <div className="mt-14 main-container flex items-center flex-col-reverse md:flex-row">
        <div className="w-full md:w-1/2">
          <p className=" text-3xl mt-5 font-semibold">
            Welcome Back! Please Login
          </p>
          <div className=" mt-10">
            <MainForm
              fields={fields}
              onSubmit={handleFormSubmit}
              toggle={
                <p className="mt-3">
                  Don&#39;t have an account? Please{" "}
                  <Link href={"/signup"}>SignUp</Link>
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

export default Login;
