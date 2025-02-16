import { useState } from "react";
import { Camera, Wallet } from "lucide-react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import "../../assets/css/tailwind.css";

Chart.register(...registerables);

export default function Profile() {
  const [user, setUser] = useState({
    name: "John Doe",
    bio: "Crypto Betting Enthusiast | Blockchain Expert",
    avatar: "https://via.placeholder.com/150",
    balance: "4.32 ETH",
    address: "0x70C2...bF58c",
    history: [
      { date: "2024-02-10", amount: "0.5 ETH", outcome: "Win" },
      { date: "2024-02-09", amount: "1.2 ETH", outcome: "Loss" },
      { date: "2024-02-08", amount: "0.8 ETH", outcome: "Win" },
    ],
  });

  const chartData = {
    labels: user.history.map((h) => h.date),
    datasets: [
      {
        label: "Betting History",
        data: user.history.map((h) => (h.outcome === "Win" ? 1 : -1)),
        borderColor: "#38bdf8",
        backgroundColor: "rgba(56, 189, 248, 0.2)",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-8">
      <div className="max-w-5xl mx-auto bg-gray-900 p-8 rounded-2xl shadow-lg">
        {/* Profile Header */}
        <div className="flex items-center gap-6 border-b pb-6 border-gray-700">
          <div className="relative w-24 h-24">
            <img
              src={user.avatar}
              alt="Avatar"
              className="w-full h-full rounded-full border-4 border-gray-700 object-cover"
            />
            <button className="absolute bottom-0 right-0 bg-gray-700 p-2 rounded-full hover:bg-gray-600">
              <Camera className="w-5 h-5 text-white" />
            </button>
          </div>
          <div>
            <h2 className="text-3xl font-bold">{user.name}</h2>
            <p className="text-gray-400 text-sm">{user.bio}</p>
          </div>
        </div>

        {/* Wallet Balance */}
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="p-6 bg-gray-800 rounded-xl shadow-lg flex items-center justify-between">
            <div>
              <h3 className="text-gray-400 text-sm">Wallet Balance</h3>
              <p className="text-2xl font-bold text-white">{user.balance}</p>
            </div>
            <Wallet className="w-8 h-8 text-blue-400" />
          </div>

          <div className="p-6 bg-gray-800 rounded-xl shadow-lg flex items-center justify-between">
            <div>
              <h3 className="text-gray-400 text-sm">Wallet Address</h3>
              <p className="text-lg font-bold text-white">{user.address}</p>
            </div>
          </div>
        </div>

        {/* Betting History */}
        <div className="mt-8 bg-gray-800 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold mb-4">Betting History</h3>
          <Line key={JSON.stringify(user.history)} data={chartData} />
        </div>
      </div>
    </div>
  );
}
