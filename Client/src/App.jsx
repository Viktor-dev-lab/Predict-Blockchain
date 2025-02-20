import "./App.css";
import LiveMarkets from "./views/pages/LiveMarkets";
import Create from "./views/pages/CreateMarket";
import Leader from "./views/pages/Leaderboard";
import Profile from "./views/pages/Profile";
import LoginSignUp from "./views/pages/LoginSignup";
import MarketDetailPage from "./views/pages/MarketDetail";
import AddFriend from "./views/pages/AddFriend";
import AddGroup from "./views/pages/AddGroup";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/markets" element={<LiveMarkets />} />
        <Route path="/markets/:marketId" element={<MarketDetailPage />} />
        <Route path="/create" element={<Create />} />
        <Route path="/leader" element={<Leader />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<LoginSignUp />} />
        {/* Điều hướng đến trang AddFriend */}
        <Route path="/add-friend" element={<AddFriend />} />

        {/* Điều hướng đến trang AddGroup */}
        <Route path="/add-group" element={<AddGroup />} />
      </Routes>
    </Router>
  );
}

export default App;
