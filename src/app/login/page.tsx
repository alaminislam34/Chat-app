"use client";

import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "@/context/AuthProvider";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useAuth();

  const handleLoginForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/auth/login", { email, password });
      console.log("Login Success:", res.data);

      setUser(res.data.user); // AuthContext এ save
      alert(res.data.message);
    } catch (err: any) {
      console.error("Login Error:", err.response?.data || err.message);
      alert(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleLoginForm}
        className="max-w-xl w-full border border-gray-300 rounded-xl shadow p-6 space-y-4"
      >
        <h1 className="py-4 lg:py-6 text-2xl lg:text-3xl font-semibold  text-center">
          Login Now
        </h1>
        <label className="flex flex-col gap-2">
          <span>Email</span>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Your email"
            className="py-2 px-4 rounded-lg border border-gray-300 focus:outline-blue-500"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span>Password</span>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Your password"
            className="py-2 px-4 rounded-lg border border-gray-300 focus:outline-blue-500"
          />
        </label>
        <button
          type="submit"
          className="py-2 px-4 w-full rounded-lg bg-blue-400 text-black hover:bg-blue-600 hover:text-white cursor-pointer duration-300"
        >
          Login
        </button>
        <p className="text-right py-3">
          Don't have any account ?{" "}
          <Link
            href={"/signup"}
            className="text-blue-500 underline font-semibold"
          >
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
