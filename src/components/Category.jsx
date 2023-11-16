import Image from "next/image";
import Link from "next/link";
import React from "react";

const Category = () => {
  const categories = [
    {
      id: 1,
      categoryName: "Technology",
      image: "url_to_technology_image.jpg",
    },
    {
      id: 2,
      categoryName: "Science",
      image: "url_to_science_image.jpg",
    },
    {
      id: 3,
      categoryName: "Business",
      image: "url_to_business_image.jpg",
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
          const { id, categoryName, image } = category;
          return (
            <div
              key={id}
              className="border border-solid shadow border-gray-200 hover:border-blue-400"
            >
              <Link href={"/courses"} className="no-underline text-black">
                <div className="w-full flex justify-center items-center">
                  <Image
                    src="/images/1.jpg"
                    alt="course-image"
                    layout="responsive"
                    height={200}
                    width={380}
                  />
                </div>

                <h2 className="text-xl font-semibold p-5">Science</h2>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
