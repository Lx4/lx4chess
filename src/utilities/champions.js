const champions = require("../data/champions.json");

export const getChampionCost = (character_id) => {
  const unit = champions.find(
    (champion) => champion.championId === character_id
  );
  return unit.cost;
};
