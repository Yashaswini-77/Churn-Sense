import { useState } from "react";

function SearchBar({ history, setFilteredHistory }) {
  const [search, setSearch] = useState("");

  const handleSearch = (value) => {
    setSearch(value);

    if (value.trim() === "") {
      setFilteredHistory(history);
      return;
    }

    const filtered = history.filter((item) => {
      return (
        item.id.toString().includes(value) ||
        item.credit_score.toString().includes(value) ||
        item.prediction.toLowerCase().includes(value.toLowerCase())
      );
    });

    setFilteredHistory(filtered);
  };

  return (
    <div
      style={{
        marginBottom: "20px",
      }}
    >
      <input
        type="text"
        placeholder="Search by ID, Credit Score or Prediction..."
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          fontSize: "16px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          outline: "none",
        }}
      />
    </div>
  );
}

export default SearchBar;