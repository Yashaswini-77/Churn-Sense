import { useState } from "react";
import axios from "axios";

function PredictionForm({ onPrediction }) {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    CreditScore: "",
    Geography: "",
    Gender: "",
    Age: "",
    Tenure: "",
    Balance: "",
    NumOfProducts: "",
    HasCrCard: "",
    IsActiveMember: "",
    EstimatedSalary: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePredict = async (e) => {
    e.preventDefault();

    for (let key in formData) {
      if (formData[key] === "") {
        alert(`Please enter ${key}`);
        return;
      }
    }

    const payload = {
      CreditScore: Number(formData.CreditScore),
      Geography:
        formData.Geography === "France"
          ? 0
          : formData.Geography === "Germany"
          ? 1
          : 2,
      Gender: formData.Gender === "Male" ? 1 : 0,
      Age: Number(formData.Age),
      Tenure: Number(formData.Tenure),
      Balance: Number(formData.Balance),
      NumOfProducts: Number(formData.NumOfProducts),
      HasCrCard: Number(formData.HasCrCard),
      IsActiveMember: Number(formData.IsActiveMember),
      EstimatedSalary: Number(formData.EstimatedSalary),
    };

    try {
      setLoading(true);

      const response = await axios.post(
        "http://127.0.0.1:5000/predict",
        payload
      );

      onPrediction(response.data);

      setFormData({
        CreditScore: "",
        Geography: "",
        Gender: "",
        Age: "",
        Tenure: "",
        Balance: "",
        NumOfProducts: "",
        HasCrCard: "",
        IsActiveMember: "",
        EstimatedSalary: "",
      });

    } catch (error) {
      console.log(error);
      alert("Prediction Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">

      <h2>📝 Customer Details</h2>

      <form onSubmit={handlePredict}>

        <input
          type="number"
          name="CreditScore"
          placeholder="Credit Score"
          value={formData.CreditScore}
          onChange={handleChange}
        />

        <input
          type="number"
          name="Age"
          placeholder="Age"
          value={formData.Age}
          onChange={handleChange}
        />

        <input
          type="number"
          name="Tenure"
          placeholder="Tenure"
          value={formData.Tenure}
          onChange={handleChange}
        />

        <input
          type="number"
          name="Balance"
          placeholder="Balance"
          value={formData.Balance}
          onChange={handleChange}
        />

        <input
          type="number"
          name="NumOfProducts"
          placeholder="Number of Products"
          value={formData.NumOfProducts}
          onChange={handleChange}
        />

        <input
          type="number"
          name="EstimatedSalary"
          placeholder="Estimated Salary"
          value={formData.EstimatedSalary}
          onChange={handleChange}
        />

        <select
          name="Gender"
          value={formData.Gender}
          onChange={handleChange}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <select
          name="Geography"
          value={formData.Geography}
          onChange={handleChange}
        >
          <option value="">Select Geography</option>
          <option value="France">France</option>
          <option value="Germany">Germany</option>
          <option value="Spain">Spain</option>
        </select>

        <select
          name="HasCrCard"
          value={formData.HasCrCard}
          onChange={handleChange}
        >
          <option value="">Has Credit Card?</option>
          <option value="1">Yes</option>
          <option value="0">No</option>
        </select>

        <select
          name="IsActiveMember"
          value={formData.IsActiveMember}
          onChange={handleChange}
        >
          <option value="">Active Member?</option>
          <option value="1">Yes</option>
          <option value="0">No</option>
        </select>

        <button
          type="submit"
          disabled={loading}
          style={{
            opacity: loading ? 0.7 : 1,
          }}
        >
          {loading ? "Predicting..." : "🚀 Predict Customer"}
        </button>

      </form>

    </div>
  );
}

export default PredictionForm;