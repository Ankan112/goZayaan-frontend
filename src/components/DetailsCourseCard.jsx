import Image from "next/image";
import Link from "next/link";
import React from "react";

const DetailsCourseCard = ({ data }) => {
  console.log(data);
  if (!data) {
    return <p className="flex justify-center items-center">Loading...</p>;
  }
  const {
    id,
    image,
    courseName,
    price,
    discountPrice,
    enrolled,
    rating,
    subject,
    liveClass,
    lectureSheets,
    exam,
  } = data;
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
          <div className=" mt-5">
            <Link href={`courses/${id}`}>
              <button
                type="primary"
                className="w-full py-2 border-none bg-blue-500 text-white cursor-pointer rounded-none hover:bg-blue-400 duration-300"
                size="middle"
              >
                Enroll
              </button>
            </Link>
          </div>
          <div className="mt-5">
            <div className="flex items-center">
              <span>icon</span>
              <p>
                Total Enrolled <span>{enrolled}</span>
              </p>
            </div>
            <div className="flex items-center mt-3">
              <span>icon</span>
              <p>
                <span>{subject}</span> Subjects
              </p>
            </div>
            <div className="flex items-center mt-3">
              <span>icon</span>
              <p>
                <span>{liveClass}</span> Live Class
              </p>
            </div>
            <div className="flex items-center mt-3">
              <span>icon</span>
              <p>
                <span>{lectureSheets}</span> Lecture Sheets
              </p>
            </div>
            <div className="flex items-center mt-3">
              <span>icon</span>
              <p>
                <span>{exam.dailyExam}</span> Daily Exams
              </p>
            </div>
            <div className="flex items-center mt-3">
              <span>icon</span>
              <p>
                <span>{exam.weeklyExams}</span> Weekly Exams
              </p>
            </div>

            <div className="flex items-center mt-3">
              <span>icon</span>
              <p>
                <span>{exam.modelTest}</span> Final Model Tests
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCourseCard;
