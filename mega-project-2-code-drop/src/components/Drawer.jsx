import React from "react";
import { FaPlus } from "react-icons/fa";
import { MdLogout, MdMenu } from "react-icons/md";

const Drawer = ({ children }) => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {children}
        <label
          htmlFor="my-drawer-2"
          className="absolute p-2 top-2 left-2 btn btn-ghost rounded-full drawer-button lg:hidden"
        >
          <MdMenu size={32} />
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu gap-4 p-4 w-80 h-full bg-base-200 text-base-content">
          <button className="btn btn-primary">
            <FaPlus />
            <span>Create</span>
          </button>
          <hr />
          <li className="bg-base-100 rounded-lg">
            <a>index.html</a>
          </li>
          <li className="bg-base-100 rounded-lg">
            <a>index.html</a>
          </li>
          <li className="bg-base-100 rounded-lg">
            <a>index.html</a>
          </li>
          <li className="bg-base-100 rounded-lg">
            <a>index.html</a>
          </li>
          <li className="bg-base-100 rounded-lg">
            <a>index.html</a>
          </li>
          <button className="btn btn-error mt-auto">
            <MdLogout />
            <span>Logout</span>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
