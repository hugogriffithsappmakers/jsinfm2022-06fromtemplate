import c3 from "c3";

window.loadChart = function (param) {
console.log(param);
const obj = JSON.parse(param);
const json = obj.data;
const type = obj.type;  
const padAngle = obj.padAngle;  
console.log(obj)
console.log(json)
console.log(type)
console.log(padAngle)
  console.log(json);
  //return
  var chart = c3.generate({
    bindto: '#chart',
    axis: { x: { type: "category" } },
    pie: { padAngle: padAngle},
    data: {
        //onclick: function (d) {alert("Clicked"), FileMaker.PerformScript("Get Data from JS", "Jeremy")},
        onclick: function (d) {alert("Clicked"), FileMaker.PerformScript("Get Data from JS", JSON.stringify(d))},
      type: type,
      keys: { x: "month", value: ["apples", "peaches", "bananas"] },
      colors: {
        WorkaholicLightGrey: '#c5c5c7',
        'Workaholic Dark Grey': '#8a8a8a',
    },
    json: json
    }
  });
}