import React from "react"
import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContextProvider from "./context/userContextProvider";

function App() {
  return (
    <UserContextProvider>
      <h1>ABM Mejbha</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
