"use client";

import Link from "next/link";
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import axios from "axios";
import { useRouter } from "next/navigation";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // 1️⃣ Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const firebaseUser = userCredential.user;

      // 2️⃣ MongoDB API
      const res = await axios.post("/api/auth/signup", {
        name,
        email,
        password,
        uid: firebaseUser.uid,
      });

      // 3️⃣ Auto-login: save token & user info
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      // 4️⃣ Redirect / set user state
      router.push("/"); // user now logged in

      console.log("Signup & Login Success:", res.data);
    } catch (err: any) {
      console.error("Signup Error:", err.response?.data || err.message);
      alert(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="w-full h-full min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSignUp}
        className="max-w-xl w-full p-6 rounded-xl border border-gray-300 shadow space-y-4"
      >
        <h1 className="py-4 lg:py-6 text-center text-2xl lg:text-3xl font-semibold">
          Sign Up Your Account
        </h1>
        {/* name */}
        <label htmlFor="name" className="flex flex-col gap-2">
          <span>Name</span>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Your Name"
            className="py-2 px-4 rounded-lg border border-gray-300 focus:outline-blue-500"
          />
        </label>
        {/* email */}
        <label htmlFor="email" className="flex flex-col gap-2">
          <span>Email</span>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Your Email"
            className="py-2 px-4 rounded-lg border border-gray-300 focus:outline-blue-500"
          />
        </label>
        {/* password */}
        <label htmlFor="password" className="flex flex-col gap-2">
          <span>Password</span>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Set Password"
            className="py-2 px-4 rounded-lg border border-gray-300 focus:outline-blue-500"
          />
        </label>
        <button
          type="submit"
          className="w-full py-2 px-4 rounded-lg bg-blue-400 hover:bg-blue-600 text-black hover:text-white cursor-pointer duration-300"
        >
          Sign Up
        </button>
        <p className="text-right py-3">
          Already have an account.{" "}
          <Link
            href={"/login"}
            className="text-blue-500 underline font-semibold"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
