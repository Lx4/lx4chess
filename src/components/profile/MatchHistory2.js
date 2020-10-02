import React, { useContext } from "react";
import RowHistory2 from "./RowHistory2";
import ProfileContext from "../../context/profile/profileContext";
import { filterMatchHistory } from "../../selectors/profile";

const MatchHistory = () => {
  const { state } = useContext(ProfileContext);

  // MATCH HISTORY
  const matchHistory = filterMatchHistory(
    state.profile.matches,
    state.profile.meta.puuid
  );

  return (
    <>
      <div className="sm:mt-4 w-full bg-gray-700 text-white px-4 py-1 sm:py-2 text-sm">
        Last {matchHistory.length} Games
      </div>
      {matchHistory.map((match, index) => {
        return (
          <RowHistory2 key={match.game_datetime} index={index} match={match} />
        );
      })}
    </>
  );
};

export default MatchHistory;
