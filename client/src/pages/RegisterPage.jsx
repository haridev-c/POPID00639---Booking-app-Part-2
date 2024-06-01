import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(ev) {
    ev.preventDefault();
    try {
      await axios.post("/register", {
        name,
        email,
        password,
      });

      alert("Registration Successful. Now you can login");
    } catch (error) {
      alert("registration failed. please try again");
    }
  }
  return (
    <>
      <div
        className="mt-4 flex grow items-center justify-around"
        onSubmit={registerUser}
      >
        <div className="mb-64">
          <h1 className="mb-4 text-center text-4xl">Register</h1>
          <form className="mx-auto max-w-md">
            <input
              type="text"
              placeholder="John Doe"
              name="name"
              value={name}
              onChange={(ev) => setName(ev.target.value)}
            />
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
            <button className="primary">Register</button>
            <div className="py-2 text-center text-gray-500">
              Already a member?
              <Link to="/login" className="text-black underline">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
