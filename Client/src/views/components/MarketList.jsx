import MarketCard from "./MarketCard.jsx";
import "../../assets/css/MarketList.css";

const marketData = [
  {
    category: "Sports",
    hashtags: ["PremierLeague", "Arsenal", "Tottenham"],
    question: "EPL: Will Arsenal beat Tottenham Hotspur on January 15, 2025 UTC?",
    time: "02D : 11H : 47M : 4S",
    yesPercent: 83,
    noPercent: 17
  },
  {
    category: "Sports",
    hashtags: ["NFL", "Rams", "Vikings"],
    question: "NFL: Will the Vikings beat the Rams on January 14, 2025 UTC?",
    time: "16H : 47M : 4S",
    yesPercent: 50,
    noPercent: 50
  },
  {
    category: "Sports",
    hashtags: ["UCL", "ManchesterCity", "ParisSaint"],
    question: "UCL: Will Paris Saint-Germain beat Manchester City on January 22, 2025 UTC?",
    time: "09D : 11H : 47M : 4S",
    yesPercent: 67,
    noPercent: 33
  }
];

const MarketList = () => {
  return (
    <div className="market-list">
      <h2>Sports</h2>
      <div className="market-container">
        {marketData.map((item, index) => (
          <MarketCard key={index} {...item} />
        ))}
      </div>
      <h2>Politics</h2>
      <div className="market-container">
        {marketData.map((item, index) => (
          <MarketCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default MarketList;
