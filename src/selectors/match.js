export const getSummoner = (match, puuid) => {
  return match.info.participants.find(
    (participant) => participant.puuid === puuid
  );
};

export const cleanTraitName = (traitName) => {
  const arr = traitName.match(/(Set4_)?([a-zA-Z]*)/);
  return arr[2].toLowerCase();
};
