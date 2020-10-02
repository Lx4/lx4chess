const defineHistoryRowBG = (placement) => {
  switch (placement) {
    case 1:
      return "bg-green-500";
    case 2:
      return "bg-green-400";
    case 3:
      return "bg-green-300";
    case 4:
      return "bg-green-200";
    case 5:
      return "bg-orange-200";
    case 6:
      return "bg-orange-300";
    case 7:
      return "bg-red-600";
    case 8:
      return "bg-red-700";
    default:
      return "";
  }
};

const capitalize = (word) => {
  let lower = word.toLowerCase();
  const first = lower.charAt(0).toUpperCase();
  return first + lower.slice(1);
};

export { defineHistoryRowBG, capitalize };
