import React from "react";
import { FaFileCode } from "react-icons/fa";

const Landing = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        background:
          "url(https://th.bing.com/th/id/OIG.qu8IrkIB_i3mApx3m9Xj?pid=ImgGn)",
      }}
    >
      <div className="hero-overlay bg-opacity-10"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md text-white bg-black p-8 rounded-xl bg-opacity-50 backdrop-blur-sm flex flex-col gap-4">
          <FaFileCode size={108} className="mx-auto" />
          <h1 className=" text-5xl font-bold">Code Drop</h1>
          <p>
            An open source code sharing platform with amazing powers of React
            and Appwrite.
          </p>
          <button className="btn btn-primary rounded-3xl">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
