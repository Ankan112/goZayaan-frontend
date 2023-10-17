import MainForm from "@/components/shared/Form";
import Navbar from "@/components/shared/Navbar";

const Login = () => {
  const handleFormSubmit = (data) => {
    console.log("Form data submitted:", data);
  };
  // Name is mandatory but label,type and placeholder are optional.
  const fields = [
    { name: "fullName", label: "Full Name" },
    { name: "password", label: "Password", type: "password" },
  ];
  return (
    <>
      <Navbar />
      <div className="mt-14 main-container">
        <p className="text-center text-3xl mt-5 font-semibold">Login page</p>
        <div className=" mt-10">
          <MainForm fields={fields} onSubmit={handleFormSubmit} />
        </div>
      </div>
    </>
  );
};

export default Login;
