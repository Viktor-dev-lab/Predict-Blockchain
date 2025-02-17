import { useNavigate } from "react-router-dom";
import MarketCard from "./MarketCard.jsx";
import "../../assets/css/MarketList.css";

const marketData = [
  // Sports
  {
    id: "1",
    category: "Sports",
    hashtags: ["PremierLeague", "Arsenal", "Tottenham"],
    question: "EPL: Will Arsenal beat Tottenham Hotspur on January 15, 2025 UTC?",
    time: "02D : 11H : 47M : 4S",
    yesPercent: 83,
    noPercent: 17
  },
  {
    id: "2",
    category: "Sports",
    hashtags: ["NFL", "Rams", "Vikings"],
    question: "NFL: Will the Vikings beat the Rams on January 14, 2025 UTC?",
    time: "16H : 47M : 4S",
    yesPercent: 50,
    noPercent: 50
  },
  {
    id: "3",
    category: "Sports",
    hashtags: ["UCL", "ManchesterCity", "ParisSaint"],
    question: "UCL: Will Paris Saint-Germain beat Manchester City on January 22, 2025 UTC?",
    time: "09D : 11H : 47M : 4S",
    yesPercent: 67,
    noPercent: 33
  },
  // Politics
  {
    id: "4",
    category: "Politics",
    hashtags: ["USAElection", "Biden", "Trump"],
    question: "Will Joe Biden win the 2024 U.S. Presidential Election?",
    time: "85D : 12H : 30M : 10S",
    yesPercent: 52,
    noPercent: 48
  },
  {
    id: "5",
    category: "Politics",
    hashtags: ["UK", "Parliament"],
    question: "Will the UK Parliament pass the new trade agreement before 2025?",
    time: "120D : 05H : 20M : 15S",
    yesPercent: 45,
    noPercent: 55
  },
  // Crypto
  {
    id: "6",
    category: "Crypto",
    hashtags: ["Bitcoin", "Ethereum"],
    question: "Will Bitcoin reach $100,000 by December 2025?",
    time: "300D : 08H : 45M : 32S",
    yesPercent: 60,
    noPercent: 40
  },
  {
    id: "7",
    category: "Crypto",
    hashtags: ["Solana", "Cardano"],
    question: "Will Solana overtake Cardano in market cap by 2026?",
    time: "500D : 10H : 25M : 17S",
    yesPercent: 55,
    noPercent: 45
  }
];

const MarketList = () => {
  const navigate = useNavigate(); // ✅ Sử dụng useNavigate()

  // Hàm lọc dữ liệu theo danh mục
  const renderMarketsByCategory = (category) => (
    <>
      <h2>{category}</h2>
      <div className="market-container">
        {marketData
          .filter((item) => item.category === category)
          .map((item) => (
            <div key={item.id} onClick={() => navigate(`/markets/${item.id}`)}>
              <MarketCard {...item} />
            </div>
          ))}
      </div>
    </>
  );

  return (
    <div className="market-list">
      {renderMarketsByCategory("Sports")}
      {renderMarketsByCategory("Politics")}
      {renderMarketsByCategory("Crypto")}
    </div>
  );
};

export default MarketList;
