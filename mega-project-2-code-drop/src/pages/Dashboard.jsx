import React from "react";
import Drawer from "../components/Drawer";
import { FaFileCode } from "react-icons/fa";

const Dashboard = () => {
  return (
    <Drawer>
      <div className="min-h-screen flex flex-col items-center justify-center text-primary-content text-center gap-4 p-4">
        <FaFileCode size={108} className="mx-auto" />
        <h1 className=" text-5xl font-bold">Hello, Vaibhav👋🏻</h1>
        <p>Start by creating/opening a new CodeDrop</p>
      </div>
    </Drawer>
  );
};

export default Dashboard;
