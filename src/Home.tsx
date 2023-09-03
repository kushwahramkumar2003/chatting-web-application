import React from "react";
import { AiOutlineSetting } from "react-icons/ai";
import "./Home.css";
import Friend from "./Friend";

const Home = () => {
  return (
    <div className="flex flex-col content-center justify-center mx-4 my-5 text-center">
      {/* left section  */}
      <div className="flex flex-col">
        {/* my profile section  */}
        <div className="max-w-sm mx-2 my-3 overflow-hidden profile-section ">
          <div className="flex flex-row justify-between">
            <h1 className="flex flex-row px-3 py-2 font-bold text-md ">
              My Profile
            </h1>

            <span className="flex flex-row flex-shrink-0 float-right px-1 py-1 m-auto mx-3 gear">
              <AiOutlineSetting />
            </span>
          </div>

          <div className="w-full h-[1px] bg-black"></div>
          <div className="flex flex-row bg-[#ded9d9] overflow-hidden justify-start content-center text-center">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
              alt="img"
              className="object-cover w-16 h-16 px-2 py-2 rounded-full"
            />
            <span className="flex flex-row content-center justify-center px-2 mx-1 my-1 font-mono text-lg text-center place-items-center">
              Ramkumar
            </span>
          </div>
        </div>
        {/* friends section  */}

        <div className="max-w-sm mx-2 my-3 overflow-hidden profile-section">
          <div className="flex flex-row justify-between">
            <span className="flex flex-row px-3 py-2 font-bold text-md">
              Discussion
            </span>
            <span className="flex flex-row float-right px-1 py-1 m-auto mx-3 gear">
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
      <div className="flex flex-col profile-section">
        {/* header section  */}
        <div className="">
          <h1>Conversation</h1>
          <div>
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
              alt="img"
              className="object-cover w-16 h-16 px-2 py-2 rounded-full"
            />
            <span>Ramkumar</span>
          </div>
        </div>
        {/* chat section */}
        <div></div>
      </div>
    </div>
  );
};

export default Home;
