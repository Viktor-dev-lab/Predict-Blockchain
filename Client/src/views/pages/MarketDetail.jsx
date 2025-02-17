import { useParams } from "react-router-dom";

function MarketDetail() {
  const { marketId } = useParams(); // 📌 Lấy marketId từ URL

  return (
    <div>
      <h2>Chi tiết thị trường</h2>
      <p>ID Thị Trường: {marketId}</p>
    </div>
  );
}

export default MarketDetail;
