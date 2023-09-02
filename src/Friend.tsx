import React from "react";

const Friend = () => {
  const imgUrl =
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80";
  const name = "RK";
  const lastMessage =
    "Hiilksjdfa skjdfl sksdfsdfsdfsdfsdf jflksjfks jfsdfasdfsfsdfsdsdlksdjf";
  const lastSeen = "2:00 PM";
  return (
    <div className="flex flex-row">
      <img
        src={imgUrl}
        alt="img"
        className="h-16 w-20 rounded-full object-cover px-2 py-2"
      />
      <div className="flex flex-col p-3 overflow-hidden max-w-md items-start justify-start">
        <span className="font-bold ">{name}</span>
        <span className="text-zinc-700 text-[10px] overflow-hidden">
          {lastMessage}
        </span>
      </div>
      <div className="flex flex-col p-3 overflow-hidden max-w-md  min-w-max">
        {lastSeen}
      </div>
    </div>
  );
};

export default Friend;
