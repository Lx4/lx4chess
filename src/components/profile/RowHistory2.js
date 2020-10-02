import React, { useState } from "react";
import moment from "moment-timezone";
import prettyMilliseconds from "pretty-ms";

import { defineHistoryRowBG } from "../../utilities/profile";
import DetailedRowHistory from "./DetailedRowHistory";

const RowHistory = ({ match, index }) => {
  const [visible, setVisible] = useState(false);

  const {
    gold_left,
    level,
    placement,
    players_eliminated,
    total_damage_to_players,
    game_datetime,
    game_length,
  } = match;

  return (
    <div className="flex flex-row bg-gray-200 mt-2 h-32 items-center">
      <div className={`h-full w-3 ${defineHistoryRowBG(placement)}`}></div>
      <div className="w-32 text-gray-600 px-4 text-sm">
        <div className="text-xl font-semibold">#{placement}</div>
        <div>ranked</div>
        <div>{prettyMilliseconds(game_length * 1000, { compact: true })}n</div>
        <div>{moment(game_datetime).fromNow()}</div>
      </div>
    </div>
  );
};

export default RowHistory;
