import { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import { MouseTracker } from "../components/mouseTracker.jsx";
import { useAuthStore } from "../store/useAuthStore.js";

export const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="relative min-h-screen flex justify-center items-center p-6 sm:p-8 pt-32">
      <MouseTracker />
      <div className="relative z-10 flex flex-col justify-center items-center p-6 sm:p-10 bg-white/80 shadow-2xl rounded-xl max-w-md w-full h-auto backdrop-blur-lg">
        <div className="w-full space-y-6">
          <div className="text-center mb-6">
            <div className="flex flex-col items-center gap-2 group">
              <div className="size-12 rounded-lg bg-gradient-to-r from-blue-200 via-purple-300 to-pink-200 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                <img
                  src="/chat_bubble_message_conversation_icon_264208.ico"
                  alt="Chat Icon"
                  className="size-6"
                />
              </div>
              <h1 className="text-2xl font-bold mt-2">Welcome Back</h1>
              <p className="text-gray-600">Sign In ZING Account</p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="size-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  name="email"
                  className="input input-bordered w-full pl-10 py-2"
                  placeholder="Enter email here"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="size-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="input input-bordered w-full pl-10 pr-12 py-2"
                  placeholder="Enter password here"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                
                <button
                  type="button"
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full py-2"
              disabled={isLoggingIn}
            >
              {isLoggingIn ? "Loading..." : "Log In"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
