import React from "react";

const Profile = () => {
  return (
    <div className="max-w-7xl mx-auto bg-white shadow-xl rounded-3xl p-10">
      {/* Profile Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#3B2B2B] mb-2">Seller Profile</h1>
        <p className="text-[#905423] text-base max-w-xl mx-auto">
          View and manage your seller account details, personal information, and preferences all in one place.
        </p>
      </div>

      {/* Form Container */}
      <div className="bg-[#FFF9F5] rounded-2xl shadow-md p-8">
        {/* Removed Profile Image Upload */}

        {/* Form Fields */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {/* Owner Name */}
          <div>
            <label className="block text-[#3B2B2B] font-semibold mb-1">Owner Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full border border-[#e0d6d1] rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#905423]"
            />
          </div>

          {/* Business Name */}
          <div>
            <label className="block text-[#3B2B2B] font-semibold mb-1">Business Name</label>
            <input
              type="text"
              placeholder="Doe's Bakery"
              className="w-full border border-[#e0d6d1] rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#905423]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-[#3B2B2B] font-semibold mb-1">Email</label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full border border-[#e0d6d1] rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#905423]"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-[#3B2B2B] font-semibold mb-1">Phone</label>
            <input
              type="tel"
              placeholder="+1 234 567 8901"
              className="w-full border border-[#e0d6d1] rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#905423]"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-[#3B2B2B] font-semibold mb-1">Category</label>
            <input
              type="text"
              placeholder="Food & Bakery"
              className="w-full border border-[#e0d6d1] rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#905423]"
            />
          </div>

          {/* GST Number */}
          <div>
            <label className="block text-[#3B2B2B] font-semibold mb-1">GST Number</label>
            <input
              type="text"
              placeholder="GSTIN1234567890"
              className="w-full border border-[#e0d6d1] rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#905423]"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-[#3B2B2B] font-semibold mb-1">Address</label>
            <input
              type="text"
              placeholder="123 Sweet Street, Pastry Town"
              className="w-full border border-[#e0d6d1] rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#905423]"
            />
          </div>

          {/* City */}
          <div>
            <label className="block text-[#3B2B2B] font-semibold mb-1">City</label>
            <input
              type="text"
              placeholder="Pastryville"
              className="w-full border border-[#e0d6d1] rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#905423]"
            />
          </div>

          {/* State */}
          <div>
            <label className="block text-[#3B2B2B] font-semibold mb-1">State</label>
            <input
              type="text"
              placeholder="California"
              className="w-full border border-[#e0d6d1] rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#905423]"
            />
          </div>

          {/* Pin Code */}
          <div>
            <label className="block text-[#3B2B2B] font-semibold mb-1">Pin Code</label>
            <input
              type="text"
              placeholder="90001"
              className="w-full border border-[#e0d6d1] rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#905423]"
            />
          </div>

          {/* Website */}
          <div className="md:col-span-2">
            <label className="block text-[#3B2B2B] font-semibold mb-1">Website</label>
            <input
              type="url"
              placeholder="www.doesbakery.com"
              className="w-full border border-[#e0d6d1] rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#905423]"
            />
          </div>

          {/* Save Button */}
          <div className="md:col-span-2 flex justify-center mt-6">
            <button className="bg-[#b46f5b] text-white font-semibold px-8 py-3 rounded-xl hover:bg-[#7a3a1b] transition">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
