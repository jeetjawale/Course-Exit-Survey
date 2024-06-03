// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'firebase/database';
import Header from './components/header';
import ButtonGroup from './button/buttongroup';
import AdminLogin from './admin/AdminLogin';
import AdminYears from './admin/adminyears';
import SecondYearCharts from './admin/secondyearcharts/secondyearcharts';
import ThirdYearCharts from './admin/thirdyearcharts/thirdyearcharts';
import CompilerDesignChart from './admin/thirdyearcharts/sixthsem/compiler-design-chart';
import ComputerNetworksChart from './admin/thirdyearcharts/sixthsem/computer-networks-chart';
import CompetitiveProgrammingChart from './admin/thirdyearcharts/sixthsem/competitive-programming-chart';
import InternetOfThingsChart from './admin/thirdyearcharts/sixthsem/internet-of-things-chart';
import MachineLearningChart from './admin/thirdyearcharts/sixthsem/machine-learning-chart';
import DevelopmentEngineeringChart from './admin/thirdyearcharts/sixthsem/development-engineering-chart';
import FirstYear from './feedbackforms/firstyear/firstyear';
import SecondYear from './feedbackforms/secondyear/secondyear';
import ThirdYear from './feedbackforms/thirdyear/thirdyear';
import FourthYear from './feedbackforms/fourthyear/fourthyear';
import DAA from './feedbackforms/secondyear/fourthsem/DAA401/design-analysis-algorithms';
import ProbabilityandStatistics from './feedbackforms/secondyear/fourthsem/PSQT404/probability-statistics';
import Basichumanrights from './feedbackforms/secondyear/fourthsem/BHR403/basic-human-rights';
import DLDM from './feedbackforms/secondyear/fourthsem/DLDM405/digital-logic-design-microprocessors';
import OperatingSystems from './feedbackforms/secondyear/fourthsem/OS402/operating-systems';
import CompilerDesign from './feedbackforms/thirdyear/sixthsem/CD601/compiler-design';
import ComputerNetworks from './feedbackforms/thirdyear/sixthsem/CN602/computer-networks';
import DevelopmentEngineering from './feedbackforms/thirdyear/sixthsem/DE605/development-engineering';
import InternetOfThings from './feedbackforms/thirdyear/sixthsem/IOT604/internet-of-things';
import CompetitiveProgramming from './feedbackforms/thirdyear/sixthsem/CP606/competitive-programming';
import MachineLearning from './feedbackforms/thirdyear/sixthsem/ML603/machine-learning';
import DatabaseSystems from './feedbackforms/thirdyear/fifthsem/DBMS501/database-systems';
import EconomicsManagement from './feedbackforms/thirdyear/fifthsem/ECO505/economics-management';
import NumericalMethods from './feedbackforms/thirdyear/fifthsem/NM504/numerical-methods';
import TheoryOfComputation from './feedbackforms/thirdyear/fifthsem/TOC502/theory-of-computation';
import SoftwareEngineering from './feedbackforms/thirdyear/fifthsem/SE503/software-engineering';
import { AuthProvider } from './admin/AuthContext';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Header />
          <h1 style={{ marginTop: '20px', marginBottom: '20px' }}>Department of Computer Engineering</h1>
          <Routes>
            <Route path="/" element={<ButtonGroup />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/adminyears" element={<AdminYears />} />
            <Route path="/admin/secondyearcharts" element={<SecondYearCharts />} />
            <Route path="/admin/thirdyearcharts" element={<ThirdYearCharts />} />
            <Route path="/admin/thirdyearcharts/competitive-programming-chart" element={<CompetitiveProgrammingChart />} />
            <Route path="/admin/thirdyearcharts/compiler-design-chart" element={<CompilerDesignChart />} />
            <Route path="/admin/thirdyearcharts/computer-networks-chart" element={<ComputerNetworksChart />} />
            <Route path="/admin/thirdyearcharts/internet-of-things-chart" element={<InternetOfThingsChart />} />
            <Route path="/admin/thirdyearcharts/machine-learning-chart" element={<MachineLearningChart />} />
            <Route path="/admin/thirdyearcharts/development-engineering-chart" element={<DevelopmentEngineeringChart />} />
            <Route path="/feedbackforms/firstyear" element={<FirstYear />} />
            <Route path="/feedbackforms/secondyear" element={<SecondYear />} />
            <Route path="/feedbackforms/thirdyear" element={<ThirdYear />} />
            <Route path="/feedbackforms/fourthyear" element={<FourthYear />} />
            <Route path="/feedbackforms/secondyear/fourthsem/" element={<OperatingSystems />} />
            <Route path="/feedbackforms/secondyear/fourthsem/basic-human-rights" element={<Basichumanrights />} />
            <Route path="/feedbackforms/secondyear/fourthsem/probability-statistics" element={<ProbabilityandStatistics />} />
            <Route path="/feedbackforms/secondyear/fourthsem/design-analysis-algorithms" element={<DAA />} />
            <Route path="/feedbackforms/secondyear/fourthsem/digital-logic-design-microprocessors" element={<DLDM />} />
            <Route path="/feedbackforms/secondyear/fourthsem/operating-systems" element={<OperatingSystems />} />
            <Route path="/feedbackforms/thirdyear/sixthsem/compiler-design" element={<CompilerDesign />} />
            <Route path="/feedbackforms/thirdyear/sixthsem/competitive-programming" element={<CompetitiveProgramming />} />
            <Route path="/feedbackforms/thirdyear/sixthsem/computer-networks" element={<ComputerNetworks />} />
            <Route path="/feedbackforms/thirdyear/sixthsem/development-engineering" element={<DevelopmentEngineering />} />
            <Route path="/feedbackforms/thirdyear/sixthsem/internet-of-things" element={<InternetOfThings />} />
            <Route path="/feedbackforms/thirdyear/sixthsem/machine-learning" element={<MachineLearning />} />
            <Route path="/feedbackforms/thirdyear/fifthsem/database-systems" element={<DatabaseSystems />} />
            <Route path="/feedbackforms/thirdyear/fifthsem/economics-management" element={<EconomicsManagement />} />
            <Route path="/feedbackforms/thirdyear/fifthsem/numerical-methods" element={<NumericalMethods />} />
            <Route path="/feedbackforms/thirdyear/fifthsem/software-engineering" element={<SoftwareEngineering />} />
            <Route path="/feedbackforms/thirdyear/fifthsem/theory-of-computation" element={<TheoryOfComputation />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
