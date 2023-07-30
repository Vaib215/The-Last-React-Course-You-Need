import { useRef, useState } from "react";
import Editor from "./Editor";
import { createRoom } from "./appwrite";

function App() {
  const [roomId, setRoomId] = useState("");
  const roomRef = useRef(null);
  return (
    <div className="bg-black min-h-screen flex flex-col items-center gap-4 p-4">
      <div className="flex gap-4">
        <button
          className="text-black bg-white rounded-md text-3xl font-bold w-12 aspect-square"
          onClick={async () => setRoomId(await createRoom())}
        >
          +
        </button>
        <input
          type="text"
          placeholder="Enter room id..."
          className="rounded-md text-black p-2 caret-black"
          ref={roomRef}
        />
        <button
          className="text-black bg-white rounded-md text-3xl w-12 aspect-square"
          onClick={() => {
            setRoomId(roomRef.current.value);
          }}
        >
          &gt;
        </button>
      </div>
      {roomId && <h1 className="text-white text-lg">Room: {roomId}</h1>}
      <Editor roomId={roomId} />
    </div>
  );
}

export default App;
