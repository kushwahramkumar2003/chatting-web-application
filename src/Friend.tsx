import React from "react";

const Friend = () => {
  const imgUrl =
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80";
  const name = "RK";
  const lastMessage =
    "Hiilksjdfa skjdfl sksdfsdfsdfsdfsdf jflksjfks jfsdfasdfsfsdfsdsdlksdjf";
  const lastSeen = "2:00 PM";
  return (
    <div className="flex flex-row bg-[#ded9d9] hover:bg-slate-50 transition-all duration-300 scroll-smooth rounded-md cursor-pointer">
      <img
        src={imgUrl}
        alt="img"
        className="object-cover w-20 h-16 px-2 py-2 rounded-full"
      />
      <div className="flex flex-col items-start justify-start max-w-md p-3 overflow-hidden">
        <span className="font-bold ">{name}</span>
        <span className="text-zinc-700 text-[10px] overflow-hidden">
          {lastMessage}
        </span>
      </div>
      <div className="flex flex-col max-w-md p-3 overflow-hidden min-w-max">
        {lastSeen}
      </div>
    </div>
  );
};

export default Friend;
