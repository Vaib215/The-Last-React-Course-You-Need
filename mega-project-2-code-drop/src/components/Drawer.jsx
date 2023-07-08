import { Query } from "appwrite";
import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { MdLogout, MdMenu } from "react-icons/md";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { account, databases, getCurrentUser } from "../helpers/appwrite";

const Drawer = ({ children }) => {
  const navigate = useNavigate();
  const [codeDrops, setCodeDrops] = useState([]);
  const [fetchingCD, setFetchingCD] = useState(false);
  const logout = () => {
    const promise = account.deleteSession("current");
    promise
      .then(() => {
        navigate("/landing");
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    const fetchCD = async () => {
      const user = await getCurrentUser();
      console.log(user);
      const promise = databases.listDocuments(
        "64a5a13d9ec76037b629",
        "64a5a1603893e38444c9",
        [Query.equal("owner", user.$id)]
      );
      promise
        .then((response) => {
          setCodeDrops(response.documents);
        })
        .catch((err) => alert(err))
        .finally(() => setFetchingCD(false));
    };
    fetchCD();
  }, [navigate, fetchingCD]);

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet context={[setFetchingCD]} />
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
          <Link to="/create" className="btn btn-primary">
            <FaPlus />
            <span>Create</span>
          </Link>
          <hr />
          {codeDrops.map((codeDrop) => {
            return (
              <li key={codeDrop.$id} className="bg-base-100 rounded-lg">
                <Link to={"/" + codeDrop.$id}>{codeDrop.title}</Link>
              </li>
            );
          })}

          <button className="btn btn-error mt-auto" onClick={logout}>
            <MdLogout />
            <span>Logout</span>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
