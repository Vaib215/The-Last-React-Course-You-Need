import { useState } from "react";
import Drawer from "../components/Drawer";
import MDEditor from "@uiw/react-md-editor";
import { FaAsterisk, FaSave } from "react-icons/fa";
import { TiCancel } from "react-icons/ti";
import { addCodeDropToDB } from "../helpers/appwrite";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [codeDrop, setCodeDrop] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const createCodeDrop = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await addCodeDropToDB({
      title,
      codeDrop,
    });
    if (!response) {
      alert(
        "Unable to create CodeDrop. Please try again or try logging in again."
      );
      setLoading(false);
      return;
    }
    setLoading(false);
    navigate("/");
  };

  return (
    <Drawer>
      <form
        onSubmit={createCodeDrop}
        className="min-h-screen w-full flex flex-col p-4 py-16 lg:py-4 gap-4"
      >
        <h1 className="text-3xl">Create a CodeDrop</h1>
        <div className="form-control gap-2">
          <label htmlFor="title" className="flex">
            Title <FaAsterisk size={8} className="mt-1" color="red" />
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="input border-white bg-base-200 max-w-lg"
          />
        </div>
        <div className="form-control gap-2">
          <label htmlFor="codeDrop" className="flex">
            CodeDrop <FaAsterisk size={8} className="mt-1" color="red" />
          </label>
          <MDEditor
            value={codeDrop}
            onChange={setCodeDrop}
            preview="edit"
            height={400}
            visibleDragbar={false}
            id="codeDrop"
          />
        </div>
        <div className="grid grid-cols-2 max-w-xs gap-4">
          <button
            disabled={!codeDrop}
            className={`btn btn-success ${loading ? "loading" : ""}`}
          >
            <FaSave />
            Save
          </button>
          <button className="btn btn-warn">
            <TiCancel size={22}/>
            Cancel
            </button>
        </div>
      </form>
    </Drawer>
  );
};

export default Create;
