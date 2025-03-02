import { useState } from "react";
import { UserCircle, LogOut,Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore.js";

export const Navbar = () => {
  const { logout, authUser } = useAuthStore();
  const [hover, setHover] = useState(false);

  return (
    <nav className="w-full h-14 bg-white shadow-md px-6 flex justify-between items-center fixed top-0 left-0 right-0 z-50">
      <div
        className="flex items-center gap-2"
      >
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
        <span className="text-lg font-bold text-gray-800">ZING</span>
      </div>

      {authUser && (
              <div className="flex items-center gap-4">
                <Link to={"/profile"} className={`btn btn-sm gap-2`}>
                  <UserCircle className="size-5" />
                  <span className="hidden sm:inline">Profile</span>
                </Link>

                <button className="flex gap-2 items-center" onClick={logout}>
                  <LogOut className="size-5" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </div>
            )}
    </nav>
  );
};
