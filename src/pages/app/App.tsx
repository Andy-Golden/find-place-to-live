import React from "react";

import { useAppPrepareHook } from "./helper";

import "./App.scss";

const App = (): JSX.Element => {
  const { users } = useAppPrepareHook();

  return (
    <div className="App">
      {users.map((user) => (
        <ul key={user.id}>
          <li>{user.fullname}</li>
          <li>{user.email}</li>
          <li>{user.role}</li>
        </ul>
      ))}
    </div>
  );
};

export default App;
