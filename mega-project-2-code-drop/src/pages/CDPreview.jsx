import MDEditor from "@uiw/react-md-editor";
import React, { useEffect, useState } from "react";
import { FaEdit, FaLink } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import Drawer from "../components/Drawer";
import { databases } from "../helpers/appwrite";

const CDPreview = () => {
  const { id } = useParams();
  const [codeDrop, setCodeDrop] = useState({});
  const navigate = useNavigate();

  const deleteCodeDrop = () => {
    const isConfirm = confirm("Are you sure you want to delete?");
    if (!isConfirm) return;
    const promise = databases.deleteDocument(
      "64a5a13d9ec76037b629",
      "64a5a1603893e38444c9",
      id
    );
    promise
      .then(() => {
        alert("CodeDrop deleted Successfully");
        navigate("/");
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    const promise = databases.getDocument(
      "64a5a13d9ec76037b629",
      "64a5a1603893e38444c9",
      id
    );
    promise
      .then((response) => {
        setCodeDrop(response);
      })
      .catch(() => {
        alert("Unable to find that document");
        navigate("/");
      });
  }, [id, navigate]);

  return (
    <Drawer>
      <div className="min-h-screen w-full flex flex-col p-4 py-16 lg:py-8 gap-4">
        <h1 className="text-3xl flex gap-2 items-end">
          <span>{codeDrop.title}</span>
          <button
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              alert("Link copied to your clipboard")
            }}
            className="btn btn-ghost rounded-full btn-sm"
          >
            <FaLink />
          </button>
        </h1>
        <div className="div flex-1 bg-base-200 p-4 rounded-lg">
          <MDEditor.Markdown
            style={{ background: "transparent", fontSize: 24 }}
            source={codeDrop.codeDrop}
          />
        </div>
        <div className="grid grid-cols-2 max-w-xs gap-4">
          <button disabled={!codeDrop} className={`btn btn-info`}>
            <FaEdit />
            Edit
          </button>
          <button onClick={deleteCodeDrop} className="btn btn-error">
            <MdDeleteForever size={20} />
            Delete
          </button>
        </div>
      </div>
    </Drawer>
  );
};

export default CDPreview;
