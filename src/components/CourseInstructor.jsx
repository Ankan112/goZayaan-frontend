import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const CourseInstructor = ({ data }) => {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {data?.instructors.map((instructor) => {
          const { institute, instructorId, name, image } = instructor;
          return (
            <div
              key={instructorId}
              className="border border-solid border-blue-300 text-center py-5"
            >
              <div>
                <Avatar size={64} icon={<UserOutlined />} />
              </div>
              <h3 className="mt-2">{name}</h3>
              <p>{institute}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseInstructor;
