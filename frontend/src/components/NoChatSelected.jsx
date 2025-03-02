import { useState } from "react";

const NoChatSelected = () => {
  const [hover, setHover] = useState(false);

  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-base-100/50">
      <div className="max-w-md text-center space-y-6">

        <div className="flex justify-center gap-4 mb-4">
          <div className="relative">
            <div
          className={`h-10 w-10 rounded-lg bg-gradient-to-r from-blue-200 via-purple-300 to-pink-200 flex items-center justify-center transition-all duration-500 ${
            hover ? "animate-pulse scale-110 shadow-md" : ""
          }`}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <img
            src="/chat_bubble_message_conversation_icon_264208.ico"
            alt="Chat Icon"
            className="h-6 w-6"
          />
        </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold">Welcome to ZING!</h2>
        <p className="text-base-content/60">
          Select a conversation from the sidebar to start chatting
        </p>
      </div>
    </div>
  );
};

export default NoChatSelected;
