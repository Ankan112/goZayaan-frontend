import DashboardLayout from "@/components/layout/DashboardLayout";
import React from "react";

const Students = () => {
  return (
    <div>
      <h1>students</h1>
    </div>
  );
};

export default Students;
Students.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
