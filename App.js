import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import CrowdSharing from './components/CrowdSharing';
import CarbonFootprint from './components/CarbonFootprint';
import AIRecommendations from './components/AIRecommendations';
import ROICalculator from './components/ROICalculator';
import RealTimeMonitoring from './components/EnergyMonitoring';
import SustainabilityLeaderboard from './components/SustainabilityLeaderboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/crowd-sharing" element={<CrowdSharing />} />
        <Route path="/carbon-footprint" element={<CarbonFootprint />} />
        <Route path="/ai-recommendations" element={<AIRecommendations />} />
        <Route path="/roi-calculator" element={<ROICalculator />} />
        <Route path="/real-time-monitoring" element={<RealTimeMonitoring />} />
        <Route path="/sustainability-leaderboard" element={<SustainabilityLeaderboard />} />
      </Routes>
    </Router>
  );
}

export default App;
