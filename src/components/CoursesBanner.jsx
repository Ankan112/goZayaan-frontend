import { Input } from "antd";
import FilterDrawer from "./FilterDrawer";

const CoursesBanner = () => {
  const { Search } = Input;
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  return (
    <div className="course-banner-bg">
      <div className="main-container h-[60vh] flex justify-center items-center">
        <div>
          <h1 className="text-white text-center">
            Unlocking knowledge, empowering minds, and bridging <br /> the gap
            to education, effortlessly.
          </h1>
          <div className="mt-4 flex justify-center items-center">
            <Search
              className="overflow-hidden"
              size="large"
              placeholder="Search on Category, Instructors, and Ratings"
              onSearch={onSearch}
              enterButton
            />
            <div className="ml-3">
              <FilterDrawer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesBanner;
