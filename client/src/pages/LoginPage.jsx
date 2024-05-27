import React from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <>
      <div className="mt-4 flex grow items-center justify-around">
        <div className="mb-64">
          <h1 className="mb-4 text-center text-4xl">Login</h1>
          <form className="mx-auto max-w-md">
            <input type="email" placeholder="your@email.com" />
            <input type="password" placeholder="password" />
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
