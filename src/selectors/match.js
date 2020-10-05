
export const getSummoner = (match, puuid) => {
  return match.info.participants.find(
    (participant) => participant.puuid === puuid
  );
};
