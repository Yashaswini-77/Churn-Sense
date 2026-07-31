function ExportCSV({ history }) {

  const exportCSV = () => {

    if (!history || history.length === 0) {
      alert("No prediction history available.");
      return;
    }

    const headers = [
      "ID",
      "Credit Score",
      "Age",
      "Prediction",
      "Confidence (%)"
    ];

    const rows = history.map((item) => [
      item.id,
      item.credit_score,
      item.age,
      item.prediction,
      Number(item.confidence).toFixed(2)
    ]);

    const csv = [
      headers.join(","),
      ...rows.map(row => row.join(","))
    ].join("\n");

    const blob = new Blob([csv], {
      type: "text/csv;charset=utf-8;"
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    const date = new Date();

    const fileName =
      `Customer_Churn_Report_${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}_${date.getHours()}-${date.getMinutes()}.csv`;

    link.href = url;
    link.download = fileName;

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);

  };

  return (

    <button
      onClick={exportCSV}
      style={{
        background: "#16a34a",
        padding: "14px 22px",
        fontSize: "16px",
        borderRadius: "10px",
        fontWeight: "bold",
        color: "#fff",
        cursor: "pointer",
      }}
    >
      📥 Export Report (.CSV)
    </button>

  );

}

export default ExportCSV;