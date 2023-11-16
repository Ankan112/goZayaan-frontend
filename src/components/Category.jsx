import Image from "next/image";
import Link from "next/link";
import React from "react";

const Category = () => {
  const categories = [
    {
      id: 1,
      image: "/images/science.jpg",
    },
    {
      id: 2,
      image: "/images/business-studies.jpg",
    },
    {
      id: 3,
      image: "/images/humanities.jpg",
    },
  ];
  return (
    <div className="main-container my-10">
      <div className="text-center">
        <h1>Our Top Categories</h1>
        <p className="mt-3 text-gray-600 w-full md:w-1/2 mx-auto">
          Online courses offer flexibility, accessibility, and personalized
          learning, enabling skill development and education from any location.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
        {categories.map((category) => {
          const { id, image } = category;
          return (
            <div
              key={id}
              className="border border-solid shadow border-gray-200 hover:shadow-lg duration-300"
            >
              <Link href={"/courses"} className="no-underline text-black">
                <div className="w-full flex justify-center items-center">
                  <Image
                    src={image}
                    alt="course-image"
                    layout="responsive"
                    height={200}
                    width={380}
                  />
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
