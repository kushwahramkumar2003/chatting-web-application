import React, { useState } from "react";
import { AiOutlineSetting } from "react-icons/ai";
import "./Home.css";
import { VscSend } from "react-icons/vsc/index";
import Friend from "./Friend";
import Message from "./Message";
import ReactScrollToBottom from "react-scroll-to-bottom";

const arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 4, 3, 5, 7, 4, 6, 3, 6, 3, 65, 76, 54, 0,
];
const Home = () => {
  const [myMasseage, setMyMasseage] = useState("");

  return (
    <div className="flex flex-row w-full h-full mx-5 my-5 ">
      {/* left section */}
      <div className="flex flex-col w-1/4 overflow-hidden max-w-fit" id="myDiv">
        {/* my profile section */}
        <div className="max-w-sm mx-2 my-3 overflow-hidden profile-section">
          <div className="flex flex-row justify-between">
            <h1 className="flex flex-row px-3 py-2 font-bold text-md ">
              My Profile
            </h1>
            <span className="flex flex-row flex-shrink-0 float-right px-1 py-1 m-auto mx-3 gear gearHover">
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

        {/* friends section */}
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

      {/* right section */}
      <div className="flex flex-col flex-grow max-w-[68rem] mx-2 my-3 myBorder">
        {/* header section */}
        <div className="flex flex-col overflow-hidden myBorder">
          <h1 className="p-4 m-3 text-4xl font-bold">Conversation</h1>
          <div className="flex flex-row bg-[#ded9d9] overflow-hidden justify-start content-center text-center ">
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

        {/* chat section */}
        <ReactScrollToBottom className="h-[27rem]">
          <div className="flex flex-col flex-grow">
            {arr.map((item, i) => {
              const positionClass = i % 2 === 0 ? "self-start" : "self-end";
              return (
                <Message
                  key={i}
                  position={positionClass}
                  message={"Hello"}
                  how={"RAM"}
                />
              );
            })}
          </div>
        </ReactScrollToBottom>
        {/* input section  */}
        <div>
          <div className="box-border flex m-2 h-11 myBorder2 rounded-3xl pe-4">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
              alt="img"
              className="object-cover w-12 p-1 rounded-full h-11"
            />
            <input
              type="text"
              id="chatInput"
              className="w-full outline-none p-2 text-1.2vmax box-border bg-white  border-gray-800 "
              value={myMasseage}
              onChange={(e) => {
                setMyMasseage(e.target.value);
              }}
            />
            <button className="flex flex-col w-10 p-2 ">
              <VscSend className="w-8 h-8 sendLogo" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
