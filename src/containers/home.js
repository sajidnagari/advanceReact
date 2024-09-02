import React, { useContext } from "react";
import { MessageContext } from "../MessageContext";

const Home = () => {
  const { message, setMessage } = useContext(MessageContext);

  return (
    <div>
      <h1>Home Component</h1>
      <button onClick={() => setMessage("Hi!")}>Click Me</button>
      <p>Message: {message}</p>
    </div>
  );
};

export default Home;
