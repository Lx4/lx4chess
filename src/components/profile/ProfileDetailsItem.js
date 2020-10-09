import React from "react";

const ProfileDetailsHeader = ({ name, value, barValue }) => {
  return (
    <div className="p-1 px-6 lg:px-4">
      <div className="clearfix">
        <span className="block float-left text-xs">{name}</span>
        <span className="block float-right text-xs">{value}</span>
      </div>
      <div className="shadow w-full bg-gray-200">
        <div
          className="bg-gray-900 text-xs leading-none text-center text-white"
          style={{ width: "55%" }}
        >
          -%
        </div>
      </div>
    </div>
  );
};

export default ProfileDetailsHeader;
