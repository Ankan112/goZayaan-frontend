import Link from "next/link";
import { useForm } from "react-hook-form";

const MainForm = ({ fields, onSubmit, btnName, style, toggle }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleFormSubmit = (data) => {
    onSubmit(data);
    reset();
  };

  return (
    <div
      className={`p-10 rounded-xl border border-solid border-gray-300 mx-auto ${
        style ? style : "w-full"
      }`}
    >
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        {fields?.map((field) => (
          <div key={field.name} className="mb-3">
            {/* Label for Input */}
            {field.label && (
              <label htmlFor={field.name} className="block text-lg font-medium">
                {field.label}
              </label>
            )}
            {/* Input Field */}
            <input
              placeholder={field?.placeholder}
              type={field.type || "text"}
              name={field.name}
              {...register(`${field.name}`, {
                required: `${field.label} is required*`,
              })}
              aria-invalid={errors[field.name] ? "true" : "false"}
              className={`w-full border-2 p-2 border-solid
            border-gray-500 text-base outline-none my-1 rounded ${
              errors[field.name] ? "border-red-500" : ""
            }`}
            />
            {/* Error message for input */}
            {errors[field.name] && (
              <p className="text-red-500">{errors[field.name].message}</p>
            )}
          </div>
        ))}

        <button
          type="submit"
          className="bg-blue-500 w-full mt-3 border-none text-white cursor-pointer py-3 px-4 rounded"
        >
          {btnName ? btnName : "Submit"}
        </button>
      </form>
      {toggle}
    </div>
  );
};

export default MainForm;
