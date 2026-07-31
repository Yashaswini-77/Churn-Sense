from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class Prediction(db.Model):
    __tablename__ = "predictions"

    id = db.Column(db.Integer, primary_key=True)
    credit_score = db.Column(db.Integer, nullable=False)
    age = db.Column(db.Integer, nullable=False)
    prediction = db.Column(db.String(50), nullable=False)
    confidence = db.Column(db.Float, nullable=False)

    def __repr__(self):
        return f"<Prediction {self.id}>"