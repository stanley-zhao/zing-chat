import NoChatSelected  from "../components/NoChatSelected.jsx";
import { Sidebar } from "../components/Sidebar.jsx";
import { useChatStore } from "../store/useChatStore.js";
import { ChatContainer } from "../components/ChatContainer.jsx";
import { MouseTracker } from "../components/mouseTracker.jsx";

export const HomePage = () => {
  const { selectedUser } = useChatStore();

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-gray-100 to-gray-200 bg-opacity-70 backdrop-blur-lg">
      <MouseTracker />

      <div className="flex-grow flex items-center justify-center p-4 pt-20">
        <div className="w-full h-full flex bg-white bg-opacity-80 rounded-lg overflow-hidden shadow-lg">

          <div className="w-1/4 border-r border-gray-300 h-full">
            <Sidebar />
          </div>

          <div className="w-3/4 flex items-center justify-center h-full">
            {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
          </div>
        </div>
      </div>
    </div>
  );

};