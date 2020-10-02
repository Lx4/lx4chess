const chart = {
  // The type of chart we want to create
  type: "line",

  // The data for our dataset
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "LPs",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 10, 5, 2, 20, 30, 45],
        backgroundColor: "transparent",
      },
    ],
  },

  // Configuration options go here
  options: {},
};

export default chart;
