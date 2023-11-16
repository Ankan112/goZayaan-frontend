import Image from "next/image";
import Link from "next/link";
import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { IoBookOutline } from "react-icons/io5";
import { RiLiveLine } from "react-icons/ri";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { PiExamLight } from "react-icons/pi";

const DetailsCourseCard = ({ data }) => {
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
          src={image}
          alt="course-image"
          layout="responsive"
          height={200}
          width={380}
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
            <Link href={`/payment`}>
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
              <span>
                <UserOutlined />
              </span>
              <p className="ml-1">
                Total Enrolled <span>{enrolled}</span>
              </p>
            </div>
            <div className="flex items-center mt-3">
              <IoBookOutline />

              <p className="ml-1">
                <span>{subject}</span> Subjects
              </p>
            </div>
            <div className="flex items-center mt-3">
              <RiLiveLine />
              <p className="ml-1">
                <span>{liveClass}</span> Live Class
              </p>
            </div>
            <div className="flex items-center mt-3">
              <MdOutlineLibraryBooks />
              <p className="ml-1">
                <span>{lectureSheets}</span> Lecture Sheets
              </p>
            </div>
            <div className="flex items-center mt-3">
              <PiExamLight />

              <p className="ml-1">
                <span>{exam.dailyExam}</span> Daily Exams
              </p>
            </div>
            <div className="flex items-center mt-3">
              <PiExamLight />

              <p className="ml-1">
                <span>{exam.weeklyExams}</span> Weekly Exams
              </p>
            </div>

            <div className="flex items-center mt-3">
              <PiExamLight />

              <p className="ml-1">
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
