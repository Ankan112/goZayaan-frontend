import CourseInstructor from "@/components/CourseInstructor";
import DetailsCourseCard from "@/components/DetailsCourseCard";
import RootLayout from "@/components/layout/RootLayout";
import { Rate } from "antd";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
import FAQ from "@/components/faq";

const CourseDetailsPage = ({ data }) => {
  return (
    <div className="main-container pt-14">
      <div className="flex flex-col md:flex-row gap-5">
        <div className="w-full md:w-1/3">
          <DetailsCourseCard data={data} />
        </div>
        <div className="w-full md:w-2/3 border border-gray-200 shadow border-solid p-5">
          <h2 className="mb-3">Course Overview</h2>
          <p className="text-gray-700 text-justify leading-6">
            Online courses are crucial for their accessibility, flexibility, and
            diverse content, breaking down geographical barriers and enabling
            global access to quality education. They offer personalized
            scheduling, catering to individual needs and busy lifestyles while
            being cost-effective, reducing financial burdens associated with
            traditional education. Moreover, these courses provide practical,
            hands-on learning experiences that contribute to real-world skill
            development, fostering a culture of lifelong learning by offering a
            wide range of subjects. With interactive elements and global
            networking opportunities, online courses create dynamic and
            collaborative learning environments, making them a pivotal component
            of modern education.
          </p>
          <h2 className="mt-10 mb-3">Course Instructor</h2>
          <CourseInstructor data={data} />
          <h2 className="mt-10">Course Syllabus</h2>
          <Link
            href={
              "https://docs.google.com/document/d/1Fi2orVIl6zq9NAEQEx49tUqym9smVRqZ27eA7Vx_tV4/edit?usp=sharing"
            }
            target="_blank"
            className="flex justify-between cursor-pointer w-[260px] no-underline hover:underline duration-300 mt-3 border-none rounded-none bg-blue-500 text-white py-2 px-4"
          >
            <p>View Syllabus</p>
            <FaExternalLinkAlt />
          </Link>
          <h2 className="mb-3 mt-10">Course Pre Requirement</h2>
          <div className="border border-solid border-blue-400 p-5">
            <h4>1. Stable Internet Connection</h4>
            <h4 className="mt-2">2. Smartphone, PC or Laptop</h4>
          </div>
          <h2 className="mb-3 mt-10">Frequently Asked Questions</h2>
          <FAQ />
          <h2 className="mb-3 mt-10">Course Ratings</h2>
          <div className="">
            <h5 className="mb-2">Average Rating {data.rating}</h5>
            <Rate disabled allowHalf defaultValue={data.rating} />
          </div>
        </div>
      </div>
    </div>
  );
};
export async function getStaticPaths() {
  const res = await fetch(`http://localhost:5000/courses`);
  const courses = await res.json();

  const paths = courses.map((course) => ({
    params: { courseId: course.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { courseId } = params;
  const res = await fetch(`http://localhost:5000/courses/${courseId}`);
  const data = await res.json();
  return { props: { data } };
}

export default CourseDetailsPage;

CourseDetailsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
