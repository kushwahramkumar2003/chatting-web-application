import React from "react";

const Message = ({ position, message, how }) => {
  if (position === "self-end") {
    return (
      <div
        id="right"
        className={` bg-[#3B82F6] p-2  text-white ${position}  rounded-s-3xl rounded-br-3xl  max-w-xl w-fit  inline-block relative text-right float-right mx-6`}
      >{`${how}: ${message}`}</div>
    );
  } else {
    return (
      <div
        className={` bg-[#30353c] p-2  text-white  ${position} rounded-e-3xl rounded-bl-3xl max-w-xl w-fit inline-block mx-6`}
      >{`You: ${message}`}</div>
    );
  }
};

export default Message;
