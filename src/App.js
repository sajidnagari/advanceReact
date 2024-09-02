// App.js
import React from "react";
import Home from "./containers/home";
import { MessageProvider } from "./MessageContext";

function App() {
  return (
    <MessageProvider>
      <div className="App">
        <Home />
      </div>
    </MessageProvider>
  );
}

export default App;
