import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const state = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],

  datasets: [
    {
      label: "Revenue",
      backgroundColor: "rgba(44,130,201,1)",
      barPercentage: 0.75,
      barThickness: 30,
      data: [54, 67, 41, 55, 62, 45, 55, 73, 60, 76, 48, 79],
    },
  ],
};
const Chart = () => {
  return (
    <div className="col-12 col-lg-12 col-xxl-3 d-flex">
      <div className="card flex-fill w-100">
        <div className="card-header">
          <h5 className="card-title mb-0">Monthly Revenue 2022</h5>
        </div>
        <div className="card-body d-flex w-100">
          <div className="align-self-center chart chart-lg">
            <Bar
              data={state}
              options={{
                title: {
                  display: true,
                  text: "Revenue",
                  fontSize: 20,
                },
                legend: {
                  display: false,
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
