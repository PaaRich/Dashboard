export const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "Sales",
      data: [120, 200, 150, 80, 270, 400],
      backgroundColor: "rgba(75, 143, 192, 0.793)",
      borderColor: "#4b80c0",
      borderWidth: 1,
      borderRadius: 10,
    },
  ],
};
export const smallData = {
  labels: ["January", "February", "March"],
  datasets: [
    {
      label: "Sales",
      data: [120, 400, 350],
      backgroundColor: "rgba(75, 143, 192, 0.793)",
      borderColor: "#4b80c0",
      borderWidth: 1,
      borderRadius: 10,
      barThickness: 30, // Sets a fixed bar thickness,
      maxBarThickness: 40,
    },
  ],
};
