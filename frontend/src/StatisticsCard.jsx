function StatisticsCard({ history }) {

  const total = history.length;

  const stay = history.filter(
    (item) => item.prediction === "Customer Will Stay"
  ).length;

  const churn = history.filter(
    (item) => item.prediction === "Customer Will Churn"
  ).length;

  const averageConfidence =
    total > 0
      ? (
          history.reduce(
            (sum, item) => sum + Number(item.confidence),
            0
          ) / total
        ).toFixed(2)
      : "0.00";

  return (

    <div className="stats-grid">

      <div className="stat-card stat-blue">

        <h3>📊 Total Predictions</h3>

        <h1>{total}</h1>

      </div>

      <div className="stat-card stat-green">

        <h3>✅ Stay Customers</h3>

        <h1>{stay}</h1>

      </div>

      <div className="stat-card stat-red">

        <h3>❌ Churn Customers</h3>

        <h1>{churn}</h1>

      </div>

      <div className="stat-card stat-purple">

        <h3>🎯 Avg Confidence</h3>

        <h1>{averageConfidence}%</h1>

      </div>

    </div>

  );

}

export default StatisticsCard;