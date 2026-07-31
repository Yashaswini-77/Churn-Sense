# 🚀 ChurnSense - Customer Churn Prediction System

<p align="center">

<img src="https://img.shields.io/badge/React.js-Frontend-61DAFB?style=for-the-badge&logo=react"/>
<img src="https://img.shields.io/badge/Flask-Backend-000000?style=for-the-badge&logo=flask"/>
<img src="https://img.shields.io/badge/Python-ML-3776AB?style=for-the-badge&logo=python"/>
<img src="https://img.shields.io/badge/Scikit--Learn-Machine%20Learning-F7931E?style=for-the-badge&logo=scikitlearn"/>
<img src="https://img.shields.io/badge/SQLite-Database-003B57?style=for-the-badge&logo=sqlite"/>
<img src="https://img.shields.io/badge/Chart.js-Visualization-FF6384?style=for-the-badge&logo=chartdotjs"/>
<img src="https://img.shields.io/badge/License-MIT-success?style=for-the-badge"/>

</p>

<p align="center">

A modern Full Stack Machine Learning application that predicts customer churn using a trained ML model with an interactive React dashboard and Flask REST API.

</p>

---

# 📖 Table of Contents

- Overview
- Features
- Technology Stack
- System Architecture
- Project Structure
- Screenshots
- Machine Learning Pipeline
- Installation
- API Endpoints
- Workflow
- Future Enhancements
- Skills Demonstrated
- Author

---

# 🌟 Overview

**ChurnSense** is a Full Stack Machine Learning application developed to help businesses identify customers who are likely to leave their services.

The application combines:

- React.js Dashboard
- Flask REST API
- Machine Learning Model
- SQLite Database
- Interactive Analytics
- Data Visualization

to provide real-time customer churn prediction along with actionable business insights.

---

# 🎯 Problem Statement

Customer retention is one of the biggest challenges for businesses.

Instead of waiting until customers leave, organizations can proactively identify high-risk customers and implement personalized retention strategies.

This project predicts customer churn based on customer attributes and displays meaningful insights through an interactive dashboard.

---

# ✨ Features

## 🤖 Machine Learning Prediction

- Real-time Churn Prediction
- Confidence Score
- Stay Probability
- Churn Probability
- Risk Assessment
- Business Recommendation

---

## 📊 Interactive Dashboard

- Total Predictions
- Stay Customers
- Churn Customers
- Average Confidence
- Live Statistics

---

## 📈 Analytics

- Pie Chart
- Bar Chart
- Customer Distribution
- Live Dashboard Updates

---

## 📋 Prediction History

- View Prediction Records
- Search Predictions
- Delete Individual Records
- Delete Complete History

---

## 📥 Export

- Export Prediction History to CSV

---

## 🎨 Modern UI

- Responsive Design
- Clean Layout
- Professional Dashboard
- User Friendly Interface

---

# 🛠 Technology Stack

## Frontend

- React.js
- Axios
- HTML5
- CSS3
- Chart.js
- React ChartJS 2

---

## Backend

- Flask
- Flask-CORS
- REST API
- SQLite

---

## Machine Learning

- Python
- Scikit-Learn
- Random Forest Classifier
- Pandas
- NumPy
- Joblib

---

## Development Tools

- VS Code
- Git
- GitHub

---

# 🏗 System Architecture

```text
                User

                  │

                  ▼

          React Frontend

                  │

          Axios REST API

                  │

                  ▼

           Flask Backend

        ┌─────────┴──────────┐

        ▼                    ▼

 Machine Learning        SQLite

     Model             Database

        │                    │

        └─────────┬──────────┘

                  ▼

        Dashboard & Analytics
```

---

# 📂 Project Structure

```text
Churn-Sense/

│

├── backend/

│   ├── app.py

│   ├── models.py

│   ├── requirements.txt

│   ├── train_model.py

│   └── instance/

│

├── frontend/

│   ├── src/

│   ├── public/

│   ├── package.json

│   └── vite.config.js

│

├── dataset/

│

├── screenshots/

│   ├── dashboard.png

│   ├── prediction.png

│   ├── charts.png

│   ├── history.png

│   └── export.png

│

├── Churn_Modelling.csv

└── README.md
```

---

# 📸 Project Screenshots

## 🏠 Dashboard

![Dashboard](screenshots/dashboard.png)

---

## 🤖 Prediction Result

![Prediction](screenshots/prediction.png)

---

## 📊 Analytics Dashboard

![Charts](screenshots/charts.png)

---

## 📋 Prediction History

![History](screenshots/history.png)

---

## 📥 Export CSV

![Export](screenshots/export.png)

---

# 🤖 Machine Learning Pipeline

```
Customer Data

↓

Data Preprocessing

↓

Feature Engineering

↓

Random Forest Model

↓

Prediction

↓

Confidence Score

↓

Recommendation

↓

Dashboard Visualization
```

---

# ⚙ Installation

## Clone Repository

```bash
git clone https://github.com/Yashaswini-77/Churn-Sense.git
```

---

## Backend Setup

```bash
cd backend

pip install -r requirements.txt

python app.py
```

Backend runs on

```
http://127.0.0.1:5000
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

# 🌐 API Endpoints

| Method | Endpoint | Description |
|----------|----------|-------------|
| POST | `/predict` | Predict customer churn |
| GET | `/history` | Get prediction history |
| DELETE | `/history/<id>` | Delete a prediction |
| DELETE | `/history` | Delete all predictions |

---

# 🔄 Application Workflow

```text
Enter Customer Details

↓

React Form Validation

↓

Send Data to Flask API

↓

Machine Learning Prediction

↓

Store Prediction in SQLite

↓

Return Response

↓

Dashboard Updates

↓

Charts Refresh

↓

Prediction History Updated
```

---

# 🚀 Future Enhancements

- JWT Authentication
- Multi User Support
- Dark Mode
- Docker Deployment
- Cloud Deployment
- Email Notifications
- Batch CSV Prediction
- Explainable AI (SHAP)
- PostgreSQL Integration
- Model Monitoring

---

# 💡 Skills Demonstrated

- Full Stack Development
- React.js
- Flask
- REST API Development
- Machine Learning Integration
- Data Visualization
- Database Design
- CRUD Operations
- Git & GitHub
- Responsive UI Design
- Problem Solving

---

# 📊 Project Highlights

✅ Full Stack Machine Learning Application

✅ Interactive Analytics Dashboard

✅ Customer Churn Prediction

✅ RESTful API Integration

✅ SQLite Database

✅ CSV Export Functionality

✅ Responsive UI

✅ Real-Time Dashboard Updates

---

# 👩‍💻 Author

## Yashaswini R

### GitHub

https://github.com/Yashaswini-77

### LinkedIn

www.linkedin.com/in/yashaswini-r-400946306

---

# ⭐ Support

If you found this project useful,

please consider giving it a ⭐ on GitHub.

It helps others discover the project and motivates future improvements.

---

# 📄 License

This project is licensed under the MIT License.

---

<p align="center">

Made with ❤️ using React, Flask and Machine Learning

</p>
