import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "../../assets/css/MarketDetail.css";
import { Line } from "react-chartjs-2";
import TradeBox from "./TradeBox.jsx";
import { format } from "date-fns";
import { useAppContext } from "../../context/AppProvider.jsx";

function MarketDetail() {
  const { marketId } = useParams();
  const [showRules, setShowRules] = useState(false); // Điều khiển việc hiển thị rules
  const [price, setPrice] = useState(39);
  const [shares, setShares] = useState(0);
  const {market, setMarket} = useAppContext();

  const total = (price * shares) / 100;
  const toWin = shares - total; // Giả sử lợi nhuận đơn giản

  // Chart Data
  const [user] = useState({
    name: "John Doe",
    bio: "Crypto Betting Enthusiast | Blockchain Expert",
    avatar: "https://via.placeholder.com/150",
    balance: "4.32 ETH",
    address: "0x70C2...bF58c",
    history: [
      { date: "2024-02-12", amount: "0.5 ETH", outcome: 1 },
      { date: "2024-02-10", amount: "1.2 ETH", outcome: 2 },
      { date: "2024-02-09", amount: "0.8 ETH", outcome: 5 },
      { date: "2024-02-07", amount: "0.8 ETH", outcome: 5 },
      { date: "2024-02-10", amount: "1.2 ETH", outcome: 2 },
      { date: "2024-02-04", amount: "0.8 ETH", outcome: 4 },
      { date: "2024-02-03", amount: "0.8 ETH", outcome: 10 },
      { date: "2024-02-02", amount: "0.8 ETH", outcome: 5 },
      { date: "2024-02-10", amount: "1.2 ETH", outcome: 7 },
      { date: "2024-01-31", amount: "0.8 ETH", outcome: 5 },
      { date: "2024-01-30", amount: "0.8 ETH", outcome: 3 },
      { date: "2024-02-09", amount: "0.8 ETH", outcome: 5 },
      { date: "2024-02-07", amount: "0.8 ETH", outcome: 5 },
      { date: "2024-02-10", amount: "1.2 ETH", outcome: 2 },
      { date: "2024-02-04", amount: "0.8 ETH", outcome: 4 },
      { date: "2024-02-03", amount: "0.8 ETH", outcome: 10 },
      { date: "2024-02-02", amount: "0.8 ETH", outcome: 5 },
      { date: "2024-02-10", amount: "1.2 ETH", outcome: 7 },
      { date: "2024-01-31", amount: "0.8 ETH", outcome: 5 },
      { date: "2024-01-30", amount: "0.8 ETH", outcome: 3 },
    ],
  });

  // Paint Chart
  const chartData = {
    labels: user.history.map((h) => h.date),
    datasets: [
      {
        label: "Betting History",
        data: user.history.map((h) => h.outcome),
        borderColor: "#38bdf8",
        backgroundColor: "rgba(56, 189, 248, 0.2)",
      },
    ],
  };

  // Data Comment
  const [comments, setComments] = useState([
    {
      avatar: "avatar.jpg",
      user: "John Doe",
      betAmount: "$1000",
      timeAgo: "1 hour ago",
      comment:
        "If the EU is not involved in the signing process of the agreement...",
    },
    {
      avatar: "avatar.jpg",
      user: "Jane Smith",
      betAmount: "$1500",
      timeAgo: "2 hours ago",
      comment: "This is going to be a game changer!",
    },
    {
      avatar: "avatar.jpg",
      user: "Michael Brown",
      betAmount: "$500",
      timeAgo: "30 minutes ago",
      comment: "Interesting point, but I am not sure about this.",
    },
  ]);

  const toggleRules = () => {
    setShowRules((prevState) => !prevState); // Tạo hiệu ứng toggle cho phần Rules
  };

  // Get API
  useEffect(() => {
    fetch(`http://localhost:5000/api/create-market/${marketId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("📥 Dữ liệu API:", data);
        setMarket(data);
      })
      .catch((error) => console.error("❌ Lỗi khi gọi API:", error));
  }, [marketId]);

  return (
    <div className="main-container">
      <div className="predict-container">
        <div className="title">{market.name}</div>
        <div className="more-info">
          
          <div className="autor">Xuân Lê</div>

          <div className="vol">$15,942,311 Vol.</div>
          {/* TIme */}
          <div className="time">
            {market.endTime
              ? format(new Date(market.createdAt), "dd/MM/yyyy HH:mm - ")
              : ""}
            {market.endTime
              ? format(new Date(market.endTime), "dd/MM/yyyy HH:mm")
              : ""}
          </div>
        </div>
        <div className="chart">
          <Line key={JSON.stringify(user.history)} data={chartData} />
        </div>

        {/* Description */}
        <div className="rules">
          {showRules ? (
            <>
              <ul>
                {market.options.map((option, index) => (
                  <li key={index}>{option}</li>
                ))}
              </ul>
              {/* Nội dung dài hơn */}
            </>
          ) : (
            <p className="short-rule">{market.description} ...</p>
          )}
          <button className="show-more-btn" onClick={toggleRules}>
            {/* Nội dung nút */}
          </button>
        </div>


        <div className="comment-contain">
          <div className="comment-list">
            <div className="">Comments</div>
            <div className="">Top Holders</div>
            <div className="">Activity</div>
            <div className="">Related</div>
          </div>

          <div className="comment-add">
            <input type="text" placeholder="Add a comment..." />
            <div className="show">
              {comments.map((comment, index) => (
                <div key={index} className="user-comment">
                  <div className="avatar">
                    <img src={comment.avatar} alt="avatar" />
                  </div>
                  <div className="comment-info">
                    <div className="user-name">{comment.user}</div>
                    <div className="bet-info">
                      <span>{comment.betAmount}</span> -{" "}
                      <span>{comment.timeAgo}</span>
                    </div>
                    <div className="comment-text">{comment.comment}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <TradeBox />
    </div>
  );
}

export default MarketDetail;
