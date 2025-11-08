import React, { useEffect, useState } from "react";
import { getProfile } from "../../../services/manager.services";
import ManagerNavbar from "../components/ManagerNavbar";

const Dashboard = () => {
  const [user, setUser] = useState({ firstname: "", lastname: "" });

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    const res = await getProfile();
    if (res?.success) {
      setUser(res.data.user);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <ManagerNavbar managerName={`${user.firstname} ${user.lastname}`} />

      <div className="pt-20 px-8 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900">
          Manager Dashboard
        </h1>

        <div className="mt-6 bg-white p-6 rounded-lg shadow">
          Dashboard content will be added step by step.
        </div>
      </div>
    </div>
  );
};

export default Dashboard;