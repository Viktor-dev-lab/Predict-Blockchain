import "./App.css";
import LiveMarkets from "./views/pages/LiveMarkets";
import Create from "./views/pages/CreateMarket";
import Leader from "./views/pages/Leaderboard";
import Profile from "./views/pages/Profile";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/markets" element={<LiveMarkets />} />
        <Route path="/create" element={<Create />} />
        <Route path="/leader" element={<Leader />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
