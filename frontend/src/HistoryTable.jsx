import { useMemo, useState } from "react";
import axios from "axios";

function HistoryTable({ history, loading, refreshHistory }) {
  const [search, setSearch] = useState("");

  const filteredHistory = useMemo(() => {
    return history.filter((item) => {
      const text = search.toLowerCase();

      return (
        item.id.toString().includes(text) ||
        item.credit_score.toString().includes(text) ||
        item.age.toString().includes(text) ||
        item.prediction.toLowerCase().includes(text)
      );
    });
  }, [history, search]);

  const deleteRecord = async (id) => {
    if (!window.confirm("Delete this record?")) return;

    try {
      await axios.delete(`http://127.0.0.1:5000/history/${id}`);
      refreshHistory();
    } catch (error) {
      console.log(error);
      alert("Failed to delete record.");
    }
  };

  const deleteAll = async () => {
    if (!window.confirm("Delete all prediction history?")) return;

    try {
      await axios.delete("http://127.0.0.1:5000/history");
      refreshHistory();
    } catch (error) {
      console.log(error);
      alert("Failed to delete all records.");
    }
  };

  return (
    <div className="card">

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "15px",
          marginBottom: "20px",
        }}
      >
        <h2>📜 Prediction History</h2>

        <div
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          <input
            className="search-box"
            type="text"
            placeholder="🔍 Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button
            style={{
              background: "#dc2626",
            }}
            onClick={deleteAll}
          >
            🗑 Delete All
          </button>
        </div>
      </div>

      {loading ? (
        <h3 style={{ textAlign: "center" }}>Loading...</h3>
      ) : (
        <div style={{ overflowX: "auto" }}>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Credit Score</th>
                <th>Age</th>
                <th>Prediction</th>
                <th>Confidence</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredHistory.length === 0 ? (
                <tr>
                  <td
                    colSpan="6"
                    style={{
                      padding: "25px",
                      textAlign: "center",
                    }}
                  >
                    No Records Found
                  </td>
                </tr>
              ) : (
                filteredHistory.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>

                    <td>{item.credit_score}</td>

                    <td>{item.age}</td>

                    <td
                      style={{
                        color:
                          item.prediction ===
                          "Customer Will Churn"
                            ? "#dc2626"
                            : "#16a34a",
                        fontWeight: "bold",
                      }}
                    >
                      {item.prediction}
                    </td>

                    <td>
                      {Number(item.confidence).toFixed(2)}%
                    </td>

                    <td>
                      <button
                        style={{
                          background: "#dc2626",
                          padding: "8px 15px",
                        }}
                        onClick={() =>
                          deleteRecord(item.id)
                        }
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default HistoryTable;