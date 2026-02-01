import {toast} from "react-hot-toast";
import { useAppContext } from "../../context/AppContext";
import React, { useState, useEffect } from "react";
const AdminLogin = () => {
  const { isAdmin, setIsAdmin, navigate, axios } = useAppContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    if (isAdmin) {
      navigate("/Admin");
    }
  }, [isAdmin]);
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const { data } = await axios.post("/api/admin/login", {
        email,
        password,
      });
      if (data.success) {
        setIsAdmin(true);
        navigate("/Admin");
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    !isAdmin && (
      <div className="fixed top-0 left-0 bottom-0 right-0 z-30 flex items-center justify-center  bg-black/50 text-gray-600">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-88 rounded-lg shadow-xl border border-gray-200 bg-white"
        >
          <p className="text-2xl font-medium m-auto">
            <span className="text-indigo-500">Admin</span>
            Login
          </p>

          <div className="w-full ">
            <p>Email</p>
            <input
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Enter Email"
              className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500"
              type="Email"
              required
            />
          </div>
          <div className="w-full ">
            <p>Password</p>
            <input
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Enter Password"
              className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500"
              type="Password"
              required
            />
          </div>
          <button 
          className="bg-indigo-500 hover:bg-indigo-600 transition-all text-white w-full py-2 rounded-md cursor-pointer">
            Login
          </button>
        </form>
      </div>
    )
  );
};
export default AdminLogin;