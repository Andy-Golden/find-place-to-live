import React, { useContext } from "react";

import { ToastContext } from "@providers";

import { useAppPrepareHook } from "./helper";

import "./App.scss";

const App = (): JSX.Element => {
  const { users } = useAppPrepareHook();

  const toast = useContext(ToastContext);

  const handleShow = (): void => {
    toast.open("Error toast");
  };

  return (
    <div className="App">
      {users.map((user) => (
        <ul key={user.id}>
          <li>{user.fullname}</li>
          <li>{user.email}</li>
          <li>{user.role}</li>
        </ul>
      ))}
      <button onClick={handleShow}>show toast</button>
    </div>
  );
};

export default App;
