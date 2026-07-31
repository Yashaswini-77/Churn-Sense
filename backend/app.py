from flask import Flask, request, jsonify
from flask_cors import CORS
from models import db, Prediction
import joblib
import numpy as np

app = Flask(__name__)
CORS(app)

# -----------------------------
# Database
# -----------------------------
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///database.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db.init_app(app)

with app.app_context():
    db.create_all()

# -----------------------------
# Load Model
# -----------------------------
model = joblib.load("model.pkl")


@app.route("/")
def home():
    return jsonify({
        "message": "Customer Churn Prediction API Running Successfully"
    })


# -----------------------------
# Predict
# -----------------------------
@app.route("/predict", methods=["POST"])
def predict():

    try:

        data = request.get_json()

        features = np.array([[
            float(data["CreditScore"]),
            int(data["Geography"]),
            int(data["Gender"]),
            int(data["Age"]),
            int(data["Tenure"]),
            float(data["Balance"]),
            int(data["NumOfProducts"]),
            int(data["HasCrCard"]),
            int(data["IsActiveMember"]),
            float(data["EstimatedSalary"])
        ]])

        prediction = int(model.predict(features)[0])

        probabilities = model.predict_proba(features)[0]

        stay_probability = round(probabilities[0] * 100, 2)
        churn_probability = round(probabilities[1] * 100, 2)

        confidence = round(max(probabilities) * 100, 2)

        prediction_text = (
            "Customer Will Churn"
            if prediction == 1
            else "Customer Will Stay"
        )

        if prediction == 1:

            risk = "HIGH"

            recommendation = (
                "Immediately contact the customer, "
                "offer loyalty benefits and personalized discounts."
            )

        else:

            risk = "LOW"

            recommendation = (
                "Customer is likely to stay. Continue engagement."
            )

        record = Prediction(
            credit_score=data["CreditScore"],
            age=data["Age"],
            prediction=prediction_text,
            confidence=confidence
        )

        db.session.add(record)
        db.session.commit()

        return jsonify({

            "prediction": prediction_text,

            "prediction_value": prediction,

            "confidence": confidence,

            "stay_probability": stay_probability,

            "churn_probability": churn_probability,

            "risk": risk,

            "recommendation": recommendation

        })

    except Exception as e:

        return jsonify({
            "error": str(e)
        }), 500


# -----------------------------
# History
# -----------------------------
@app.route("/history", methods=["GET"])
def history():

    records = Prediction.query.order_by(
        Prediction.id.desc()
    ).all()

    output = []

    for item in records:

        output.append({

            "id": item.id,

            "credit_score": item.credit_score,

            "age": item.age,

            "prediction": item.prediction,

            "confidence": item.confidence

        })

    return jsonify(output)


# -----------------------------
# Delete One
# -----------------------------
@app.route("/history/<int:id>", methods=["DELETE"])
def delete_record(id):

    record = Prediction.query.get(id)

    if not record:

        return jsonify({
            "message": "Record Not Found"
        }), 404

    db.session.delete(record)
    db.session.commit()

    return jsonify({
        "message": "Record Deleted Successfully"
    })


# -----------------------------
# Delete All
# -----------------------------
@app.route("/history", methods=["DELETE"])
def delete_all():

    Prediction.query.delete()

    db.session.commit()

    return jsonify({
        "message": "All Records Deleted Successfully"
    })


if __name__ == "__main__":
    app.run(debug=True)