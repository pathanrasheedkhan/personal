import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-10 px-4">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-2xl overflow-hidden">
        <img
          src="/assets/myclg.png"
          alt="Audisankara College"
          className="w-full h-60 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            About Audisankara College
          </h1>
          <p className="text-gray-600 text-lg text-center mb-6">
            Audisankara College of Engineering & Technology, located in Gudur, Andhra Pradesh, is dedicated to empowering students through excellence in education, training, and placements.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center text-white">
            <div className="bg-blue-600 py-6 rounded-xl shadow">
              <h2 className="text-xl font-semibold">B.Tech</h2>
              <p className="mt-1 text-sm">Undergraduate Programs</p>
            </div>
            <div className="bg-green-600 py-6 rounded-xl shadow">
              <h2 className="text-xl font-semibold">Diploma</h2>
              <p className="mt-1 text-sm">Polytechnic Courses</p>
            </div>
            <div className="bg-purple-600 py-6 rounded-xl shadow">
              <h2 className="text-xl font-semibold">M.Tech</h2>
              <p className="mt-1 text-sm">Postgraduate Engineering</p>
            </div>
            <div className="bg-orange-600 py-6 rounded-xl shadow">
              <h2 className="text-xl font-semibold">MS</h2>
              <p className="mt-1 text-sm">Master of Science</p>
            </div>
            <div className="bg-pink-600 py-6 rounded-xl shadow col-span-2 md:col-span-1">
              <h2 className="text-xl font-semibold">MCA</h2>
              <p className="mt-1 text-sm">Master of Computer Applications</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
