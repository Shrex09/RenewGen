import React from "react";
import { Link } from "react-router-dom";  // Import Link for navigation
import './Dashboard.css';
import CrowdSharing from "./components/CrowdSharing";
import CarbonFootprint from "./components/CarbonFootprint";
import AIRecommendations from "./components/AIRecommendations";
import ROICalculator from "./components/ROICalculator";
import EnergyMonitoring from "./components/EnergyMonitoring";
import SustainabilityLeaderboard from "./components/SustainabilityLeaderboard";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Welcome to the Renewable Energy Dashboard</h1>
      <div className="dashboard-cards">
        <div className="card">
          <h2><Link to="/crowd-sharing">Crowd Sharing Platform</Link></h2>
          <p>Fund solar panels or windmills together!</p>
        </div>
        <div className="card">
          <h2><Link to="/carbon-footprint">Carbon Footprint Calculator</Link></h2>
          <p>Calculate and reduce your carbon footprint.</p>
        </div>
        <div className="card">
          <h2><Link to="/ai-recommendations">AI Recommendations</Link></h2>
          <p>Get optimal placement suggestions for maximum efficiency.</p>
        </div>
        <div className="card">
          <h2><Link to="/roi-calculator">ROI Calculator</Link></h2>
          <p>Calculate your return on investment for renewable energy tools.</p>
        </div>
        <div className="card">
          <h2><Link to="/real-time-monitoring">Real-Time Monitoring</Link></h2>
          <p>Monitor energy consumption in real time.</p>
        </div>
        <div className="card">
          <h2><Link to="/sustainability-leaderboard">Sustainability Leaderboard</Link></h2>
          <p>See how you rank in sustainability efforts!</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
