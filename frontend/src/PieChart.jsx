import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

function PieChart({ history }) {

  const stay = history.filter(
    item => item.prediction === "Customer Will Stay"
  ).length;

  const churn = history.filter(
    item => item.prediction === "Customer Will Churn"
  ).length;

  const data = {

    labels: [
      "Stay Customers",
      "Churn Customers"
    ],

    datasets: [
      {
        data: [stay, churn],

        backgroundColor: [
          "#22c55e",
          "#ef4444",
        ],

        borderColor: "#ffffff",

        borderWidth: 3,

        hoverOffset: 18,
      },
    ],
  };

  const options = {

    responsive: true,

    maintainAspectRatio: false,

    animation: {

      animateRotate: true,

      animateScale: true,

      duration: 1500,

    },

    plugins: {

      legend: {

        position: "bottom",

        labels: {

          padding: 20,

          font: {

            size: 15,

            weight: "bold",

          },

        },

      },

      tooltip: {

        backgroundColor: "#1e293b",

        titleFont: {

          size: 15,

        },

        bodyFont: {

          size: 14,

        },

      },

    },

  };

  return (

    <div className="chart-card">

      <h2
        style={{
          textAlign: "center",
          marginBottom: "20px",
          color: "#2563eb",
        }}
      >
        🥧 Customer Distribution
      </h2>

      {history.length === 0 ? (

        <div
          style={{
            height: "300px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#888",
            fontSize: "18px",
          }}
        >
          No Data Available
        </div>

      ) : (

        <div className="chart-container">

          <Pie
            data={data}
            options={options}
          />

        </div>

      )}

    </div>

  );

}

export default PieChart;