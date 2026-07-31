import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

import StatisticsCard from "./StatisticsCard";
import PredictionForm from "./PredictionForm";
import ResultCard from "./ResultCard";
import PieChart from "./PieChart";
import BarChart from "./BarChart";
import HistoryTable from "./HistoryTable";
import ExportCSV from "./ExportCSV";

function App() {
  const [history, setHistory] = useState([]);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchHistory = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        "http://127.0.0.1:5000/history"
      );

      setHistory(response.data);

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  const handlePrediction = (data) => {
    setResult(data);

    setTimeout(() => {
      fetchHistory();
    }, 300);
  };

  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}

      <header className="navbar">

        <h1>
          🏦 Customer Churn Prediction Dashboard
        </h1>

        <p
          style={{
            marginTop: "8px",
            opacity: .9,
          }}
        >
          Machine Learning • React • Flask • SQLite
        </p>

      </header>

      {/* ================= STATISTICS ================= */}

      <StatisticsCard
        history={history}
      />

      {/* ================= FORM + RESULT ================= */}

      <div className="grid-two">

        <PredictionForm
          onPrediction={handlePrediction}
        />

        <ResultCard
          result={result}
        />

      </div>

      {/* ================= CHARTS ================= */}

      <div className="grid-two">

        <PieChart
          history={history}
        />

        <BarChart
          history={history}
        />

      </div>

      {/* ================= EXPORT ================= */}

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "25px",
        }}
      >
        <ExportCSV
          history={history}
        />
      </div>

      {/* ================= HISTORY ================= */}

      <HistoryTable
        history={history}
        loading={loading}
        refreshHistory={fetchHistory}
      />

      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <hr
          style={{
            marginBottom: "20px",
          }}
        />

        <h3>
          Customer Churn Prediction System
        </h3>

        <p
          style={{
            marginTop: "8px",
          }}
        >
          Developed using React, Flask,
          Scikit-Learn & SQLite
        </p>

        <p
          style={{
            marginTop: "5px",
            fontSize: "14px",
          }}
        >
          © 2026 All Rights Reserved
        </p>

      </footer>

    </div>
  );
}

export default App;