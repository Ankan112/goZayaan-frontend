import Image from "next/image";
import Link from "next/link";
import React from "react";

const CoursesCard = ({ data }) => {
  console.log(data);
  return (
    <div className="main-container mb-20">
      <div className="text-center my-10">
        <h1>all course cards</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data?.map((course) => {
          const {
            id,
            image,
            courseName,
            price,
            discountPrice,
            enrolled,
            rating,
          } = course;
          return (
            <div
              key={id}
              className="border border-solid shadow border-gray-200 hover:border-blue-400"
            >
              <div className="w-full flex justify-center items-center">
                <Image
                  src="/images/1.jpg"
                  alt="course-image"
                  height={200}
                  width={380}
                  responsive={true}
                />
              </div>
              <div className="p-5">
                <div>
                  <h2 className="text-xl font-semibold">{courseName}</h2>
                  <span className="text-lg mr-2 font-medium text-primary">
                    {discountPrice} Taka
                  </span>{" "}
                  <del>{price} Taka</del>
                  <div className="flex justify-between items-center mt-1">
                    <div className="flex justify-between items-center">
                      <span>icon</span>
                      <p>
                        Total Enrolled <span>{enrolled}</span>
                      </p>
                    </div>
                    <div>
                      <span>icon</span>
                      <span>{rating}</span>
                    </div>
                  </div>
                </div>
                <div className=" mt-5">
                  <Link href={`courses/${id}`}>
                    <button
                      type="primary"
                      className="w-full py-2 border-none bg-blue-500 text-white cursor-pointer rounded-none hover:bg-blue-400 duration-300"
                      size="middle"
                    >
                      Check Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CoursesCard;
