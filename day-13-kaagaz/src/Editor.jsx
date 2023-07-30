import { convertFromRaw, convertToRaw, EditorState } from "draft-js";
import { useEffect } from "react";
import { useState } from "react";
import { Editor as RDEditor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { client, joinRoom, updateRoom } from "./appwrite";

// eslint-disable-next-line react/prop-types
const Editor = ({ roomId }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const getData = async () => {
    const data = await joinRoom(roomId);
    const kaagazAsObj = convertFromRaw(JSON.parse(data));
    setEditorState(EditorState.createWithContent(kaagazAsObj));
  };
  useEffect(() => {
    getData();
    const unsubscribe = client.subscribe('documents', response => {
      if (response.events.includes('databases.*.collections.*.documents.' + roomId + '.update')) {
        const kaagazAsObj = convertFromRaw(JSON.parse(response.payload.kaagaz));
        setEditorState(EditorState.createWithContent(kaagazAsObj));
      }
    });
    return () => unsubscribe();
  }, [roomId]);

  const saveKaagaz = () => {
    const kaagazAsString = JSON.stringify((convertToRaw(editorState.getCurrentContent())));
    updateRoom(roomId, kaagazAsString);
  }
  return (
    <>
      <RDEditor
        editorState={editorState}
        toolbarClassName="bg-black rounded-md"
        wrapperClassName="flex-1 flex flex-col"
        editorClassName="border-white border rounded-md px-2 text-white caret-white flex-1"
        onEditorStateChange={setEditorState}
        editorStyle={{}}
      />
      <button onClick={saveKaagaz} className="bg-white p-2 py-1 rounded">Save</button>
    </>
  );
};

export default Editor;
