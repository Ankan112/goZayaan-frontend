import DashboardLayout from "@/components/layout/DashboardLayout";
import React from "react";

const Dashboard = () => {
  return (
    <div>
      <h1>Welcome to Dashboard !</h1>
    </div>
  );
};

export default Dashboard;

Dashboard.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
