import { useContext } from "react";
import { UserContext } from "./context/userContext";

export const LoginPage = () => {
  const infoFromContext = useContext(UserContext);
  const { user, setUser } = infoFromContext;

  return (
    <>
      <h1>
        Login Page
        <br />
        <pre aria-label="pre">{JSON.stringify(user, null, 3)}</pre>
      </h1>
      <hr></hr>
      <button
        className="btn btn-primary"
        onClick={() => setUser({ id: 123, name: "Pablo Ariel" })}
      >
        Set User
      </button>
    </>
  );
};
