import { ID } from "appwrite";
import Auth from "../components/Auth";
import { account } from "../helpers/appwrite";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const SignupBtn = ({ onClick }) => {
  return (
    <button onClick={onClick} className="btn btn-primary">
      Sign Up
    </button>
  );
};

const Signup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const createAccount = async () => {
    const promise = account.create(ID.unique(), email, password, name);

    promise
      .then(() => {
        navigate("/login");
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <Auth
      title={"Create an account"}
      description={"Start your journey with CodeDrop by creating an account"}
      button={<SignupBtn onClick={createAccount} />}
      bottomQuestion={"Already have an account?"}
      bottomLabel={"Login instead"}
      bottomLink={"/login"}
      email={email}
      name={name}
      password={password}
      setEmail={setEmail}
      setName={setName}
      setPassword={setPassword}
    />
  );
};

export default Signup;
