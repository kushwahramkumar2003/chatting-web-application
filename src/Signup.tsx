import React from "react";
import { useState } from "react";
function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [phone, setPhone] = useState("");

  const submit = () => {};

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
            <input
              type="text"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
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
