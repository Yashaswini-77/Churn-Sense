function ResultCard({ result }) {
  if (!result) {
    return (
      <div className="card result-card">
        <h2 style={{ textAlign: "center", color: "#2563eb" }}>
          📊 Prediction Result
        </h2>

        <div
          style={{
            height: "350px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#888",
            fontSize: "22px",
            textAlign: "center",
          }}
        >
          Make a prediction to view the result
        </div>
      </div>
    );
  }

  const isChurn =
    result.prediction === "Customer Will Churn" ||
    result.prediction === 1;

  const prediction = isChurn
    ? "Customer Will Churn"
    : "Customer Will Stay";

  const confidence = Number(result.confidence || 0).toFixed(2);

  const stayProbability = Number(
    result.stay_probability || 0
  ).toFixed(2);

  const churnProbability = Number(
    result.churn_probability || 0
  ).toFixed(2);

  const risk =
    result.risk ||
    (isChurn ? "HIGH" : "LOW");

  const recommendation =
    result.recommendation ||
    (isChurn
      ? "Contact the customer immediately and provide retention offers."
      : "Customer is loyal. Continue regular engagement.");

  return (
    <div className="card result-card">

      <h2
        style={{
          textAlign: "center",
          color: isChurn ? "#dc2626" : "#16a34a",
          marginBottom: "20px",
        }}
      >
        {isChurn ? "❌" : "✅"} {prediction}
      </h2>

      <hr />

      <div
        style={{
          marginTop: "25px",
          lineHeight: "2",
          fontSize: "18px",
        }}
      >
        <p>
          <strong>Prediction :</strong>{" "}
          <span
            style={{
              color: isChurn ? "#dc2626" : "#16a34a",
              fontWeight: "bold",
            }}
          >
            {prediction}
          </span>
        </p>

        <p>
          <strong>🎯 Confidence :</strong>{" "}
          <span style={{ color: "#2563eb" }}>
            {confidence}%
          </span>
        </p>

        <p>
          <strong>🟢 Stay Probability :</strong>{" "}
          {stayProbability}%
        </p>

        <p>
          <strong>🔴 Churn Probability :</strong>{" "}
          {churnProbability}%
        </p>

        <p>
          <strong>⚠ Risk Level :</strong>{" "}
          <span
            style={{
              color: risk === "HIGH" ? "#dc2626" : "#16a34a",
              fontWeight: "bold",
            }}
          >
            {risk}
          </span>
        </p>

        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            borderRadius: "10px",
            background: "#f3f7ff",
            borderLeft: "5px solid #2563eb",
          }}
        >
          <strong>💡 Recommendation</strong>

          <p
            style={{
              marginTop: "10px",
              lineHeight: "1.7",
            }}
          >
            {recommendation}
          </p>
        </div>
      </div>

    </div>
  );
}

export default ResultCard;