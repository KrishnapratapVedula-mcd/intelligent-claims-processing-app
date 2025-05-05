import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import './App.css';
import IntakeAgent from './Pages/IntakeAgent';
import AssessmentAgent from './Pages/AssessmentAgent';
import RiskAnalysisAgent from './Pages/RiskAnalysisAgent';
import FraudDetectionAgent from './Pages/FraudDetectionAgent';
import DecisionAgent from './Pages/DecisionAgent';
import About from './Pages/About';

function App() {
  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <h1>Intelligent Claims Processing</h1>
        </header>
        <div className="app-body">
          <nav className="sidebar">
            <NavLink to="/About" className="nav-link" activeClassName="active-link">About</NavLink>
            <NavLink to="/IntakeAgent" className="nav-link" activeClassName="active-link">Intake Agent</NavLink>
            <NavLink to="/AssessmentAgent" className="nav-link" activeClassName="active-link">Assessment Agent</NavLink>
            <NavLink to="/RiskAnalysisAgent" className="nav-link" activeClassName="active-link">Risk Analysis Agent</NavLink>
            <NavLink to="/FraudDetectionAgent" className="nav-link" activeClassName="active-link">Fraud Detection Agent</NavLink>
            <NavLink to="/DecisionAgent" className="nav-link" activeClassName="active-link">Decision Agent</NavLink>
          </nav>
          <main className="content">
            <Routes>
              <Route path="/About" element={<About />} />
              <Route path="/IntakeAgent" element={<IntakeAgent />} />
              <Route path="/AssessmentAgent" element={<AssessmentAgent />} />
              <Route path="/RiskAnalysisAgent" element={<RiskAnalysisAgent />} />
              <Route path="/FraudDetectionAgent" element={<FraudDetectionAgent />} />
              <Route path="/DecisionAgent" element={<DecisionAgent />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;