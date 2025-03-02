import { useState } from "react";
import { MessageSquare, User, Mail, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { MouseTracker } from "../components/mouseTracker";
import toast from "react-hot-toast";
import { useAuthStore} from "../store/useAuthStore.js";

export const SignUpPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const { signup, isSigningUp } = useAuthStore();

  const validateForm = () => {
    if (!formData.fullName.trim()) return toast.error(String('Full name is required'));
    if (!formData.email.trim()) return toast.error(String('Email is required'));
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) return toast.error(String('Invalid email format'));
    if (!formData.password) return toast.error(String('Password is required'))
    if (formData.password.length<6) return toast.error(String("Password must be at least 6 characters long"))
    
    return true
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const success = validateForm()
    if (success === true) {
    try {
      await signup(formData);
      toast.success("Account created successfully!");
    } catch (error) {
      console.log(error)
      toast.error("Signup failed. Please try again."); 
    }
  }
  };

  return (
    <div className="relative min-h-screen flex justify-center items-center p-6 sm:p-8 pt-32">
      <MouseTracker />
      <div className="relative z-10 flex flex-col justify-center items-center p-6 sm:p-10 bg-white/80 shadow-2xl rounded-xl max-w-md w-full h-auto backdrop-blur-lg">
        <div className="w-full space-y-6">
          <div className="text-center mb-6">
            <div className="flex flex-col items-center gap-2 group">
              <div className="size-12 rounded-lg bg-gradient-to-r from-blue-200 via-purple-300 to-pink-200 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                <img src="/chat_bubble_message_conversation_icon_264208.ico" alt="Chat Icon" className="size-6" />
              </div>
              <h1 className="text-2xl font-bold mt-2">Create Account</h1>
              <p className="text-gray-600">Get a ZING™️ account</p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Full Name</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="size-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="fullName"
                  className="input input-bordered w-full pl-10 py-2"
                  placeholder="Your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

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
                  placeholder="example@email.com"
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
                  type="password"
                  name="password"
                  className="input input-bordered w-full pl-10 py-2"
                  placeholder="Enter a strong password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <button type="submit" className="btn btn-primary w-full py-2" disabled={isSigningUp}>
              {isSigningUp ? "Loading..." : "Create Account"}
            </button>
          </form>
          
          <div className="text-center">
            <p className="text-gray-600">
              Already have an account? {" "}
              <Link to="/login" className="link link-primary">Sign in</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};