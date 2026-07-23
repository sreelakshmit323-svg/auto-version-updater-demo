import { useState } from "react";
import "./Login.css";

function Login({ setPage }) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {

    // Demo
    const correctUsername = "admin";
    const correctPassword = "admin123";

    if (
      username === correctUsername &&
      password === correctPassword
    ) {

      setPage("dashboard");

    } else {

      alert("Invalid username or password");

    }

  };


  return (
    <div className="login-container">

      <h1>
        Electron Auto Update Demo
      </h1>


      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />


      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />


      <button onClick={login}>
        Login
      </button>

    </div>
  );
}

export default Login;