import React from "react";
import { AiOutlineSetting } from "react-icons/ai";
import "./Home.css";
import Friend from "./Friend";

const Home = () => {
  return (
    <div className="flex flex-col content-center justify-center text-center mx-4 my-5">
      {/* left section  */}
      <div>
        {/* my profile section  */}
        <div className="profile-section overflow-hidden mx-2 my-3 max-w-sm ">
          <div className="flex flex-row justify-between">
            <h1 className="flex flex-row py-2 px-3 font-bold text-md ">
              My Profile
            </h1>

            <span className="gear flex flex-row py-1 px-1 float-right mx-3 flex-shrink-0 m-auto">
              <AiOutlineSetting />
            </span>
          </div>

          <div className="w-full h-[1px] bg-black"></div>
          <div className="flex flex-row bg-[#ded9d9] overflow-hidden justify-start content-center text-center">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
              alt="img"
              className="h-16 w-16 rounded-full object-cover px-2 py-2"
            />
            <span className="font-mono text-lg my-1 mx-1 px-2 justify-center content-center text-center flex flex-row place-items-center">
              Ramkumar
            </span>
          </div>
        </div>
        {/* friends section  */}

        <div className="profile-section overflow-hidden mx-2 my-3 max-w-sm">
          <div className="flex flex-row  justify-between">
            <span className="flex flex-row py-2 px-3 font-bold text-md">
              Discussion
            </span>
            <span className="gear flex flex-row py-1 px-1 m-auto float-right mx-3">
              <AiOutlineSetting />
            </span>
          </div>
          <div className="w-full h-[1px] bg-black"></div>
          <div className="w-full max-h-[30rem] overflow-y-scroll">
            <Friend />
            <Friend />
            <Friend />
            <Friend />
            <Friend />
            <Friend />
            <Friend />
            <Friend />
            <Friend />
            <Friend />
            <Friend />
            <Friend />
            <Friend />
          </div>
        </div>
      </div>
      {/* right section  */}
      <div>
        {/* header section  */}
        <div></div>
        {/* chat section */}
        <div></div>
      </div>
    </div>
  );
};

export default Home;
