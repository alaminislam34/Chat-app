"use client";
import Link from "next/link";
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import axios from "axios";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Step 1: Firebase Auth এ user create
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const firebaseUser = userCredential.user;

      // Step 2: MongoDB API তে user save করা
      const res = await axios.post("/api/auth/signup", {
        name,
        email,
        password,
        uid: firebaseUser.uid, // 🔥 Firebase uid save করা হলো
      });

      console.log("Signup Success:", res.data);
      alert("Signup completed!");
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
