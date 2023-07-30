import { Client, Databases, ID } from "appwrite";
import { convertToRaw, EditorState } from "draft-js";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("64c1615a6a3cf1083f40");

const databases = new Databases(client);

const createRoom = async () => {
  const room = await databases.createDocument(
    "64c162157bd61ca00828",
    "64c1621d3e2895736357",
    ID.unique(),
    {
      kaagaz: "",
    }
  );
  return room.$id;
};

const updateRoom = async (roomId, kaagaz) => {
  if (!roomId) return;
  await databases.updateDocument(
    "64c162157bd61ca00828",
    "64c1621d3e2895736357",
    roomId,
    {
      kaagaz,
    }
  );
};

const joinRoom = async (roomId) => {
  if (!roomId) return;
  const room = await databases.getDocument(
    "64c162157bd61ca00828",
    "64c1621d3e2895736357",
    roomId
  );
  return room.kaagaz;
};

export { createRoom, updateRoom, joinRoom, client };
