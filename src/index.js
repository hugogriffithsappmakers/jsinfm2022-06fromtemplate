import c3 from "c3";
var chart = c3.generate({
  bindto: '#chart',
  data: {
    type: "bar",
    colors: {
      WorkaholicLightGrey: '#c5c5c7',
      'Workaholic Dark Grey': '#8a8a8a',
  },
    columns: [
      ['WorkaholicLightGrey', 100, 200, 100, 400, 150, 250],
      ['Workaholic Dark Grey', 50, 60, 70, 80, 90, 100]
    ]
  }
});