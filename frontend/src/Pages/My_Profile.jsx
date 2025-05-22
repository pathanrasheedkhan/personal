import React, { useState } from 'react';

const Profile = () => {
  const [email, setEmail] = useState('');
  const [branch, setBranch] = useState('');
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle upload logic here (send to backend)
    console.log({ email, branch, image });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black/50 px-4">
      <form
        onSubmit={handleSubmit}
        className="glassmorphism p-8 rounded-2xl shadow-lg w-full max-w-md text-white"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Edit Profile</h2>

        {/* Profile Photo Upload */}
        <div className="flex flex-col items-center mb-6">
          <label className="text-sm mb-2">Profile Photo</label>
          <div className="w-24 h-24 mb-3 rounded-full overflow-hidden border-2 border-white">
            {preview ? (
              <img src={preview} alt="Preview" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-white/20 flex items-center justify-center text-sm">
                No Image
              </div>
            )}
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="text-sm text-white"
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter new email"
            className="w-full px-4 py-2 rounded-md bg-white/20 backdrop-blur-md text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring focus:ring-primary"
            required
          />
        </div>

        {/* Branch Select */}
        <div className="mb-6">
          <label className="block text-sm mb-1">Branch</label>
          <select
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            className="w-full px-4 py-2 rounded-md bg-white/20 backdrop-blur-md text-white border border-white/30 focus:outline-none focus:ring focus:ring-primary"
            required
          >
            <option value="" disabled>Select your branch</option>
            <option value="CSE">CSE</option>
            <option value="ECE">ECE</option>
            <option value="EEE">EEE</option>
            <option value="AI">AI</option>
            <option value="IT">IT</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-primary rounded-md font-semibold hover:bg-opacity-90 transition"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Profile;
