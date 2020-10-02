import React, { useContext } from "react";
import ProfileContext from "../../context/profile/profileContext";
import moment from "moment-timezone";

const ProfileHeader = () => {
  const { state, renewProfile } = useContext(ProfileContext);
  const { meta } = state.profile;
  const updatedAt = meta.updatedAt;

  return (
    <>
      <div className="relative flex content-center flex-wrap h-48 bg-gray-800 w-full p-4">
        <div className="relative flex-shrink-0 h-32 w-32 shadow-md">
          <img
            className="w-full"
            src={`https://lx4chess-assets.s3.eu-west-3.amazonaws.com/img/profileicon/${meta.profileIconId}.png`}
            alt="Profile icon"
          />
          <div className="absolute right-0 bottom-0 bg-gray-100 flex justify-center content-center h-5 w-5">
            <div className="text-xs">{1}</div>
          </div>
        </div>
        <div className="flex flex-col justify-between ml-4">
          <div className="text-2xl text-gray-100">{meta.name}</div>
          <button
            className="btn btn-white focus:outline-none"
            onClick={() => renewProfile(meta.name)}
          >
            Renew
          </button>
          <span className="block text-sm text-gray-100">
            Last updated: {moment(updatedAt).calendar()}
          </span>
        </div>
      </div>
    </>
  );
};

export default ProfileHeader;
