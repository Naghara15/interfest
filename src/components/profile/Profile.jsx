import React from "react";
import ExpCard from "./ExpCard";

const Profile = () => {
  return (
    <div id="profile" className="flex flex-col md:flex-row gap-9 w-full p-5">
      <div className="min-w-60 bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Profile Picture */}
        <div className="w-40 h-40 rounded-full border-2 border-blue-300 mx-auto overflow-hidden relative">
          <img
            src="/image/muka-aing.jpeg"
            alt="Profile"
            className=" absolute"
          />
        </div>

        {/* User Info */}
        <div className="p-6 text-center">
          <h2 className="text-xl font-semibold text-gray-800">
            Mohammad Leokhansa Naghara
          </h2>
          <p className="text-gray-600 mt-2">
            Telkom University Jakarta | Teknologi Informasi
          </p>
        </div>
      </div>
      <div className="p-6">
        <div>
          <h1 className="font-bold text-2xl">About</h1>
          <p className="text-justify p-2">
            I am an undergraduate from Telkom University Jakarta majoring in
            Information Technology. I am qualified to manage a
            network that can be proven in my certificate of competence in
            Computer Engineering Network Qualification. I'm currently learning golang and backend programming. To add with that, I am
            capable of speaking, writing, especially listening to the English
            language close to a native level. Dedicated worker and a very
            punctual person.
          </p>
        </div>
        <div className="pt-10">
          <h1 className="font-bold text-2xl">Education & Experience</h1>
          <ul className="flex flex-col gap-2 p-2">
            <ExpCard
              time="3 Years"
              year="2020 - 2022"
              place="SMKN 7 Jakarta"
              extra="Teknik Komputer Jaringan"
            />
            <ExpCard
              time="3 Months"
              year="2021"
              place="PT Indonesia Comnets Plus"
              extra="ArcGIS Operator"
            />
            <ExpCard
              time="2 Years"
              year="2022 - 2024"
              place="PT Sari Tirta Indonesia"
              extra="Software Engineer"
            />
            <ExpCard
              time="Present"
              year="2024"
              place="Telkom University Jakarta"
              extra="Information Technology"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
