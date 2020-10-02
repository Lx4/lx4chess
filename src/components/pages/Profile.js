import React, { useContext, useEffect } from "react";
import ProfileContext from "../../context/profile/profileContext";

import MatchHistory from "../profile/MatchHistory";
import MatchHistory2 from "../profile/MatchHistory2";
import ProfileHeader from "../profile/ProfileHeader";
import ProfileDetails from "../profile/ProfileDetails";

const Profile = ({ match }) => {
  const { state, getProfile, clearState, search } = useContext(ProfileContext);

  useEffect(() => {
    getProfile(match.params.username);

    return () => {
      clearState();
    };
    // eslint-disable-next-line
  }, [search]);

  if (state.loading) return <p>loading...</p>;

  if (state.error) return <p>Error status: {state.error}</p>;

  return (
    <div>
      {/* <SearchBar /> */}
      <ProfileHeader />
      <div className="grid grid-cols-3 gap-2 sm:gap-4 sm:mt-4">
        <ProfileDetails />
        <div className="col-span-3 lg:col-span-2 sm:h-64 bg-gray-200 px-4 flex items-center">
          <canvas className="max-h-full" id="myChart"></canvas>
        </div>
      </div>
      <MatchHistory2 />
      {/* 
      

      <div className="mt-4 w-full bg-gray-700 text-white px-4 py-1 sm:py-2 text-sm">
        History
      </div>
      <table className="text-gray-800 table-auto w-full bg-gray-200 text-xs sm:text-sm ">
        <thead className="bg-white text-left">
          <tr>
            <th className="px-1 sm:px-2 py-2">Trait</th>
            <th className="px-1 sm:px-2 py-2">Plays</th>
            <th className="px-1 sm:px-2 py-2">Win%</th>
            <th className="px-1 sm:px-2 py-2">Top%</th>
            <th className="px-1 sm:px-2 py-2">Champion</th>
            <th className="px-1 sm:px-2 py-2">Plays</th>
            <th className="px-1 sm:px-2 py-2">Win%</th>
            <th className="px-1 sm:px-2 py-2">Top%</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-1 sm:px-2 py-2">Mystic</td>
            <td className="border px-1 sm:px-2 py-2">4</td>
            <td className="border px-1 sm:px-2 py-2">85</td>
            <td className="border px-1 sm:px-2 py-2">100</td>
            <td className="border px-1 sm:px-2 py-2 flex items-center">
              <img className="h-4 w-4" src="./img/karma.png" alt="" />
              <div className="">Karma</div>
            </td>
            <td className="border px-1 sm:px-2 py-2">130</td>
            <td className="border px-1 sm:px-2 py-2">12%</td>
            <td className="border px-1 sm:px-2 py-2">50%</td>
          </tr>
        </tbody>
      </table> */}
    </div>
  );
};

export default Profile;
