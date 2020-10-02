export const filterMatchHistory = (matches, currentPuuid) => {
  return matches.map((match) => {
    let currentMatch = match.info.participants.find(
      ({ puuid }) => puuid === currentPuuid
    );
    currentMatch.game_datetime = match.info.game_datetime;
    currentMatch.game_length = match.info.game_length;
    currentMatch.match_id = match.match_id;
    return currentMatch;
  });
};

export const getAvgRank = (matches, currentPuuid) => {
  const history = matches.map((match) => {
    for (let participant of match.info.participants) {
      if (participant.puuid === currentPuuid) {
        return participant.placement;
      }
    }
  });
  if (history.length === 0) return 0;
  return Number(
    history.reduce((acc, val) => acc + val) / history.length
  ).toFixed(2);
};
