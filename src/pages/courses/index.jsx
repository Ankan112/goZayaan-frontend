import CoursesBanner from "@/components/CoursesBanner";
import CoursesCard from "@/components/CoursesCard";
import RootLayout from "@/components/layout/RootLayout";
import React from "react";

const AllCourse = ({ data }) => {
  return (
    <>
      <CoursesBanner />
      <CoursesCard data={data} />
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return { props: { data } };
}

export default AllCourse;

AllCourse.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
