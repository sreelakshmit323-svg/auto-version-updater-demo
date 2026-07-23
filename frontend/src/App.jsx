import { useState } from "react";
import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard";

function App() {

  const [page, setPage] = useState("login");

  return (
    <>
      {
        page === "login"
        ?
        <Login setPage={setPage}/>
        :
        <Dashboard setPage={setPage}/>
      }
    </>
  );
}

export default App;