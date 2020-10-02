import React, { useContext } from "react";
import RowHistory from "./RowHistory";
import ProfileContext from "../../context/profile/profileContext";

const MatchHistory = () => {
  const { state } = useContext(ProfileContext);
  const { matchHistory } = state.profile;
  return (
    <>
      <div className="sm:mt-4 w-full bg-gray-700 text-white px-4 py-1 sm:py-2 text-sm">
        Last {matchHistory.length} Games
      </div>
      <table className="text-black table-auto w-full bg-gray-200 text-xs sm:text-sm">
        <thead className="bg-white text-left">
          <tr>
            <th className="px-1 sm:px-2 py-2">Date</th>
            <th className="px-1 sm:px-2 py-2">Placement</th>
            <th className="px-1 sm:px-2 py-2">Eliminations</th>
            <th className="px-1 sm:px-2 py-2">Level</th>
            <th className="px-1 sm:px-2 py-2">Gold Left</th>
            <th className="px-1 sm:px-2 py-2">Damages</th>
          </tr>
        </thead>
        <tbody>
          {matchHistory.map((match, index) => {
            return (
              <RowHistory
                key={match.game_datetime}
                index={index}
                match={match}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default MatchHistory;
