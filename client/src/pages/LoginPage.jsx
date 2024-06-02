import axios from "axios";
import React, { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { Link, Navigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUser } = useContext(UserContext);

  async function handleLoginSubmit(ev) {
    ev.preventDefault();
    try {
      const { data } = await axios.post("/login", { email, password });
      setUser(data);
      +alert("Login Successful");
      setRedirect(true);
    } catch (error) {
      console.log(error);
      alert("Login failed");
    }
  }

  if (redirect == true) {
    return <Navigate to={"/"} />;
  }

  return (
    <>
      <div className="mt-4 flex grow items-center justify-around">
        <div className="mb-64">
          <h1 className="mb-4 text-center text-4xl">Login</h1>
          <form className="mx-auto max-w-md" onSubmit={handleLoginSubmit}>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
            />
            <button className="primary">Login</button>
            <div className="py-2 text-center text-gray-500">
              Don't have an account yet?
              <Link to="/register" className="text-black underline">
                Register now
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
