import React, { useState, useContext } from "react";
import moment from "moment-timezone";
import prettyMilliseconds from "pretty-ms";

import "./RowHistory.css";

import { defineHistoryRowBG } from "../../utilities/profile";
import ProfileContext from "../../context/profile/profileContext";
import { getSummoner, cleanTraitName } from "../../selectors/match";
import { getActiveTraits } from "../../selectors/summoner";

import DetailedRowHistory from "./DetailedRowHistory";

const RowHistory = ({ match }) => {
  const [visible, setVisible] = useState(false);
  const { state } = useContext(ProfileContext);
  const puuid = state.profile.meta.puuid;
  const summonerName = state.profile.meta.name;

  const game_datetime = match.info.game_datetime;
  const game_length = match.info.game_length;
  const summoner = getSummoner(match, puuid);

  const printStars = (num) => {
    let stars = [];
    for (let i = 0; i < num; i++) {
      stars.push(<i key={i} className="fas fa-star fa-xs"></i>);
    }
    return <div>{stars}</div>;
  };

  const {
    gold_left,
    level,
    placement,
    players_eliminated,
    total_damage_to_players,
  } = summoner;

  return (
    <div className="flex flex-row bg-gray-200 mt-2 h-56  lg:h-48 sm:h-32 items-center">
      <div className={`h-full w-5 lg:w-3 ${defineHistoryRowBG(placement)}`}></div>
      <div className="w-32 text-gray-600 px-2 lg:px-4 text-xs lg:text-sm">
        <div className="text-sm lg:text-xl font-semibold">#{placement}</div>
        <div c>ranked</div>
        <div>{prettyMilliseconds(game_length * 1000, { compact: true })}n</div>
        <div>{moment(game_datetime).fromNow()}</div>
      </div>
      {/* traits */}
      <div className="flex flex-col lg:flex-row flex-wrap mr-4 lg:mr-12">
        {getActiveTraits(summoner.traits).map((trait) => (
          <div
            className={`hexagon h-6 w-6 mr-1 style-${trait.style} flex items-center justify-center text-gray-600`}
          >
            <img
              className="h-4 w-4 fill-current"
              src={`${
                process.env.REACT_APP_URL_IMG
              }/img/traits/${cleanTraitName(trait.name)}.svg`}
            />
          </div>
        ))}
      </div>
      {/* units */}
      <div className="flex flex-wrap">
        {summoner.units.map((unit, index) => (
          <div className="flex flex-col items-center mr-1">
            <div className={` tier rarity-${unit.rarity} text-xs`}>
              {printStars(unit.tier)}
            </div>
            <div
              key={index}
              className={`rarity-${unit.rarity} border-solid border-4 rounded h-8 w-8 lg:h-12 lg:w-12 mb-1  sm:mb-0 `}
            >
              <img
                className="h-full w-full inset-0 object-cover object-center"
                src={`${process.env.REACT_APP_URL_IMG}/img/champions/${unit.character_id}.png`}
              />
            </div>
            <div className="flex">
              {unit.items.map((num) => (
                <div className="h-4 w-4 mt-1">
                  <img
                    src={`${process.env.REACT_APP_URL_IMG}/img/items/${
                      num >= 10 ? num : "0" + num
                    }.png`}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* participants */}
      <div className="hidden lg:grid grid-cols-2 participants text-sm gap-2 text-gray-700 ml-16">
        {match.participants_details.map((participant) =>
          participant.name !== summonerName ? (
            <div>{participant.name}</div>
          ) : (
            <div className="font-bold">{participant.name}</div>
          )
        )}
      </div>
    </div>
  );
};

export default RowHistory;
