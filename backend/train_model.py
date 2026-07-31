import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.ensemble import RandomForestClassifier
import joblib

# Load dataset
df = pd.read_csv("Churn_Modelling.csv")

# Remove unnecessary columns
df.drop(["RowNumber", "CustomerId", "Surname"], axis=1, inplace=True)

# Encode categorical columns
le_gender = LabelEncoder()
le_geo = LabelEncoder()

df["Gender"] = le_gender.fit_transform(df["Gender"])
df["Geography"] = le_geo.fit_transform(df["Geography"])

# Features and Target
X = df.drop("Exited", axis=1)
y = df["Exited"]

# Split dataset
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Train model
model = RandomForestClassifier(
    n_estimators=100,
    random_state=42
)

model.fit(X_train, y_train)

# Save model
joblib.dump(model, "model.pkl")

print("✅ Model trained successfully!")