import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PlanSelection from './components/PlanSelection';
import Details from './components/Details';
import Payment from './components/Payment';
import Confirmation from './components/Confirmation';
import CoverageMap from './components/CoverageMap'; // Import CoverageMap component

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 flex flex-col items-center p-6">
        <div className="w-full max-w-4xl">
          <Routes>
            <Route path="/" element={<Details />} />
            <Route path="/plan-selection" element={<PlanSelection />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/confirmation" element={<Confirmation />} />
          </Routes>
          <CoverageMap />
        </div>
      </div>
    </Router>
  );
}

export default App;
