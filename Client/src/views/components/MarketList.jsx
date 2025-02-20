import { useNavigate } from "react-router-dom";
import MarketCard from "./MarketCard.jsx";
import { useState, useEffect } from "react";
import "../../assets/css/MarketList.css";

const MarketList = () => {
  const navigate = useNavigate();
  const [market, setMarket] = useState([]);

  // get data market
  useEffect(() => {
    fetch("http://localhost:5000/api/create-market")
      .then((response) => response.json())
      .then((data) => {
        console.log("📥 Dữ liệu API:", data);
        setMarket(Array.isArray(data) ? data : []); // Đảm bảo là mảng
      })
      .catch((error) => console.error("❌ Lỗi khi gọi API:", error));
  }, []);

  // Hàm lọc dữ liệu theo danh mục
  // Hàm lọc dữ liệu theo danh mục
  const renderMarketsByCategory = (category) => {
    return (
      <>
        <h2>{category}</h2>
        <div className="market-container">
          {market
            .filter((item) => item.category === category)
            .map((item) => {
              // Xử lý hashtags theo từng danh mục
              let hashtags = [];
              if (item.category === "Sports") {
                hashtags = ["Thể thao", "Cá cược"];
              } else if (item.category === "Politics") {
                hashtags = ["Chính trị", "Dự đoán"];
              } else if (item.category === "Crypto") {
                hashtags = ["Tiền mã hóa", "Blockchain"];
              }

              return (
                <div
                  key={item._id}
                  onClick={() => navigate(`/markets/${item._id}`)}
                >
                  <MarketCard
                    category={item.category}
                    hashtags={hashtags} // ✅ Truyền hashtags đã xử lý
                    question={item.name}
                    time={new Date(item.endTime).toLocaleString()}
                    yesPercent={50} // ⚡ Cần xử lý từ dữ liệu thật
                    noPercent={50} // ⚡ Cần xử lý từ dữ liệu thật
                  />
                </div>
              );
            })}
        </div>
      </>
    );
  };

  return (
    <div className="market-list">
      {renderMarketsByCategory("Sports")}
      {renderMarketsByCategory("Politics")}
      {renderMarketsByCategory("Crypto")}
    </div>
  );
};

export default MarketList;
