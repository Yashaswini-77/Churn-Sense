import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

function BarChart({ history }) {

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

        label: "Customers",

        data: [

          stay,

          churn

        ],

        backgroundColor: [

          "#22c55e",

          "#ef4444"

        ],

        borderRadius: 12,

        borderSkipped: false,

        barThickness: 70,

      },

    ],

  };

  const options = {

    responsive: true,

    maintainAspectRatio: false,

    animation: {

      duration: 1500,

    },

    plugins: {

      legend: {

        display: false,

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

    scales: {

      y: {

        beginAtZero: true,

        ticks: {

          stepSize: 1,

          font: {

            size: 14,

          }

        },

        grid: {

          color: "#e5e7eb",

        }

      },

      x: {

        ticks: {

          font: {

            size: 14,

            weight: "bold",

          }

        },

        grid: {

          display: false,

        }

      }

    }

  };

  return (

    <div className="chart-card">

      <h2

        style={{

          textAlign: "center",

          color: "#2563eb",

          marginBottom: "20px",

        }}

      >

        📊 Customer Analytics

      </h2>

      {

        history.length === 0 ?

        (

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

        )

        :

        (

          <div className="chart-container">

            <Bar

              data={data}

              options={options}

            />

          </div>

        )

      }

    </div>

  );

}

export default BarChart;