import React, { useState } from "react";
import moment from "moment-timezone";

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
  } = match;

  return (
    <>
      <tr
        onClick={() => setVisible(!visible)}
        key={game_datetime}
        className={`cursor-pointer ${defineHistoryRowBG(placement)}`}
      >
        <td className="border px-1 sm:px-2 py-2">
          {moment(game_datetime).tz("Europe/Paris").calendar()}
        </td>
        <td className="border px-1 sm:px-2 py-2">{placement}</td>
        <td className="border px-1 sm:px-2 py-2">{players_eliminated}</td>
        <td className="border px-1 sm:px-2 py-2">{level}</td>
        <td className="border px-1 sm:px-2 py-2">{gold_left}</td>
        <td className="border px-1 sm:px-2 py-2">{total_damage_to_players}</td>
      </tr>
      {visible ? <DetailedRowHistory index={index} /> : null}
    </>
  );
};

export default RowHistory;
