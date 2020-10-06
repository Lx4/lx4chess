export const getActiveTraits = (traits) => {
  const arr = traits.filter((trait) => trait.style !== 0);
  return arr.sort((trait1, trait2) => {
    if (trait1.tier < trait2.tier) {
      return -1;
    }
    if (trait2.tier > trait1.tier) {
      return 1;
    }
    return 0;
  });
};
