import React from "react";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br ">
      <form
        action=""
        className="w-full max-w-md bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-white/20"
      >
        <h2 className="text-2xl font-semibold text-white mb-6 text-center">
          Select your branch for question paper
        </h2>
        <ul className="space-y-4 text-white font-medium text-center">
          <li className="py-3 px-4 border-b border-gray-300 rounded-2xl bg-white/10 hover:bg-white/20 transition">
            <NavLink to = '/cse'> Computer Science [CSE]</NavLink>
          </li>
          <li className="py-3 px-4 border-b border-gray-300 rounded-2xl bg-white/10 hover:bg-white/20 transition">
            <NavLink to = '/ece'>Electrical Communication Engineering [ECE]</NavLink>
          </li>
          <li className="py-3 px-4 border-b border-gray-300 rounded-2xl bg-white/10 hover:bg-white/20 transition">
            <NavLink to='/eee' >Electrical Engineering [EEE]</NavLink>
          </li>
          <li className="py-3 px-4 border-b border-gray-300 rounded-2xl bg-white/10 hover:bg-white/20 transition">
            <NavLink to = '/mech'>Artificial Inteligence & Data Science [AI & DS]</NavLink>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default Hero;
