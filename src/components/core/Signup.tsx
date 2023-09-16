import React from "react";
import { useState } from "react";
import config from "../../config/config";
import { useEffect } from "react/cjs/react.production.min";
function Signup() {
  const [name, setName] = useState("");

  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div>
      <form action="">
        <div>
          <div>
            <h1 className="bg-orange-300">Name</h1>
            <input
              type="text"
              className="block w-full py-2 text-gray-900 border-0 rounded-md shadow-sm outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
              placeholder="janesmith"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
            />
          </div>
          <div>
            <h1>Email</h1>
            <input type="text" />
          </div>
          <div>
            <h1>Phone</h1>
            <input
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={phone}
            />
          </div>
          <div>
            <h1>Password</h1>
            <input
              type="text"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
            />
          </div>
          <div>
            <h1>RetypePassword</h1>
            <input
              type="text"
              onChange={(e) => {
                setRetypePassword(e.target.value);
              }}
              value={retypePassword}
            />
          </div>
          <button className="">SignUp</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
