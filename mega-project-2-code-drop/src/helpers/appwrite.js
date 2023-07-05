import { Account, Client, Databases, ID } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("64a2a98a24405aadf890");

const account = new Account(client);

const databases = new Databases(client);

const getCurrentUser = async () => {
  const promise = account.get();
  const result = promise
    .then((user) => {
      return user;
    })
    .catch(() => {
      return null;
    });
  return result;
};

const addCodeDropToDB = async (codeDropData) => {
  const user = await getCurrentUser();
  if (!user) {
    return null;
  }
  const promise = databases.createDocument(
    "64a5a13d9ec76037b629",
    "64a5a1603893e38444c9",
    ID.unique(),
    {
      ...codeDropData,
      users: { id: user.$id },
    }
  );
  const result = promise.then((response) => response).catch(() => null);
  return result
};

export { client, account, addCodeDropToDB, databases};
