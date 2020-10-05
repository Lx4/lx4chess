import React, { useContext } from "react";

import { capitalize } from "../../utilities/profile";
import { filterMatchHistory, getAvgRank } from "../../selectors/profile";

import ProfileContext from "../../context/profile/profileContext";
import ProfileDetailsItem from "./ProfileDetailsItem";

const ProfileDetails = () => {
  const { state } = useContext(ProfileContext);
  const { league, matches, meta } = state.profile;
  const matchHistory = filterMatchHistory(matches, meta.puuid);
  const avgRank = getAvgRank(matches, meta.puuid);

  if (league.length === 0) {
    return <p>Unable to get league details, not enough match this season</p>;
  }

  const { tier, rank, leaguePoints, wins, losses } = league[0];
  const played = wins + losses;
  const winRate = (wins / played) * 100;
  const top4 = matchHistory.filter((match) => match.placement <= 4).length;
  const top4Rate = (top4 / played) * 100;

  return (
    <div className="col-span-3 lg:col-span-1 h-64 bg-gray-200">
      <div className="h-32 bg-gray-200 flex flex-wrap content-center justify-around text-gray-100 border-b-2 border-gray-600">
        <div>
          <img
            className="h-24"
            src={`${process.env.REACT_APP_URL_IMG}/img/ranked-emblems/Emblem_${capitalize(tier)}.png`}
            alt="summoner's rank"
          />
        </div>
        <div className="pt-4 text-gray-600">
          <div className="text-xs">Tier</div>
          <span className="text-sm text-gray-900">{`${tier} ${rank} `}</span>
          <span className="text-sm text-gray-900">{leaguePoints} LP</span>
          <div className="shadow w-full bg-gray-200 mt-2">
            <div
              className="bg-teal-700 text-xs leading-none py-1 text-center text-white"
              style={{
                width: `${leaguePoints <= 100 ? leaguePoints : 100}%`,
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="details">
        <div className="grid grid-cols-2 mt-2">
          <ProfileDetailsItem name="Win" value={wins} />
          <ProfileDetailsItem
            name="Win Rate"
            value={`${winRate.toFixed(2)}%`}
          />
          <ProfileDetailsItem name="Top4" value={top4} />
          <ProfileDetailsItem
            name="Top4 Rate"
            value={`${top4Rate.toFixed(2)}%`}
          />
          <ProfileDetailsItem name="Played" value={played} />
          <ProfileDetailsItem name="Avg Rank" value={avgRank} />
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
