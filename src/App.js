import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import IntakeAgent from './Pages/IntakeAgent';
import AssessmentAgent from './Pages/AssessmentAgent';
import RiskAnalysisAgent from './Pages/RiskAnalysisAgent';
import FraudDetectionAgent from './Pages/FraudDetectionAgent';
import DecisionAgent from './Pages/DecisionAgent';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="sidebar">
          <Link to="/IntakeAgent"><button>Intake Agent</button></Link>
          <Link to="/AssessmentAgent"><button>Assessment Agent</button></Link>
          <Link to="/RiskAnalysisAgent"><button>Risk Analysis Agent</button></Link>
          <Link to="/FraudDetectionAgent"><button>Fraud Detection Agent</button></Link>
          <Link to="/DecisionAgent"><button>Decision Agent</button></Link>
        </div>
        <div className="content">
          <Routes>
            <Route path="/IntakeAgent" element={<IntakeAgent />} />
            <Route path="/AssessmentAgent" element={<AssessmentAgent />} />
            <Route path="/RiskAnalysisAgent" element={<RiskAnalysisAgent />} />
            <Route path="/FraudDetectionAgent" element={<FraudDetectionAgent />} />
            <Route path="/DecisionAgent" element={<DecisionAgent />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;