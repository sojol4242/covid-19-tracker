import React, { useEffect, useState } from "react";
import { fetchDailyData } from "../../API/api";
import styles from "./Chart.module.css";
import gif from "../../Wedges-3s-200px.gif";

import { Line, Bar } from "react-chartjs-2";

const Chart = ({ data, country }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchDaily = async () => {
      const dailyData = await fetchDailyData();

      setDailyData(dailyData);
    };
    fetchDaily();
  }, []);

  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) =>
          new Date(date).toLocaleDateString()
        ),
        datasets: [
          {
            data: dailyData.map((data) => data.confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.map((data) => data.deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: true,
          },
          {
            data: dailyData.map((data) => data.recovered),
            label: "Recovered",
            borderColor: "green",
            backgroundColor: "rgba(0, 255, 0, 0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;
  if (!data) {
    return <img src={gif} alt="loading" />;
  }
  const barChart = data.confirmed ? (
   
    <Bar
      data={{
        labels: ["Total Infected", "Total Recovered", "Total Deaths"],
        datasets: [
          {
            label: ["Infected"],
            
            backgroundColor: [
              "rgba(0,0,255,.8)",
              "rgba(0,255,0,.8)",
              "rgb(255, 0, 0,.7)",
            ],
            data: [data.confirmed.value, data.recovered.value, data.deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current State in ${country}` },
      }}
    />
  ) : null;

  return (
    <div className={styles.container}>
      
      {country ? barChart : lineChart}
      {/* {lineChart} */}
    </div>
  );
};

export default Chart;
