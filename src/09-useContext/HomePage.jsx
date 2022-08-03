import { useContext } from "react";
import { UserContext } from "./context/userContext";

export const HomePage = () => {
  const infoFromContext = useContext(UserContext);
  const { user } = infoFromContext;

  return (
    <>
      <h1>
        Home Page
        <br />
        <small>{user?.name}</small>
      </h1>
      <hr></hr>
      <pre aria-label="pre">{JSON.stringify(user, null, 3)}</pre>
    </>
  );
};
