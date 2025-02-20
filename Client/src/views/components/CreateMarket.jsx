import { useState, useEffect } from "react";
import { ethers } from "ethers";
import "../../assets/css/CreateMarket.css";

export function CreateMarket() {
  const [marketData, setMarketData] = useState({
    name: "",
    description: "",
    category: "",
    options: ["",""],
    endTime: "",
    validationSource: "",
    startingLiquidity: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [account, setAccount] = useState(null);
  const [walletBalance, setWalletBalance] = useState("0");

  // Kết nối ví
  const connectWallet = async () => {
    try {
        if (!window.ethereum) throw new Error("Vui lòng cài đặt MetaMask!");

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []); // 🛠 Yêu cầu quyền truy cập MetaMask
        const signer = provider.getSigner();
        const address = await signer.getAddress();

        setAccount(address);
        await getWalletBalance(provider, address);
    } catch (err) {
        setError(err.message);
    }
  };

  // Lấy ví
  const getWalletBalance = async (provider, address) => {
    try {
      const balance = await provider.getBalance(address);
      setWalletBalance(ethers.utils.formatEther(balance));
    } catch (err) {
      setError(`Không thể lấy số dư ví. ${err}`);
    }
  };

  useEffect(() => {
    if (account) {
      (async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await getWalletBalance(provider, account);
      })();
    }
  }, [account]);

  // Xử lí validate khi submit và post data
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (!marketData.name || !marketData.description || !marketData.category) {
        throw new Error("Vui lòng điền đầy đủ thông tin!");
      }
      if (marketData.options.some((opt) => opt.trim() === "")) {
        throw new Error("Mỗi thị trường phải có ít nhất 2 lựa chọn!");
      }
      if (!marketData.validationSource) {
        throw new Error("Cần nhập nguồn xác thực!");
      }
      if (!marketData.startingLiquidity || isNaN(marketData.startingLiquidity)) {
        throw new Error("Số dư khởi tạo phải là số hợp lệ!");
      }

      // Gửi dữ liệu tới backend thông qua API call
      const response = await fetch("http://localhost:5000/api/create-market", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(marketData),
      });

      if (!response.ok) {
        throw new Error("Có lỗi xảy ra khi gửi dữ liệu lên server!");
      }


      // Sau khi gửi thành công, reset lại form

      setMarketData({
        name: "",
        description: "",
        category: "",
        options: ["", ""],
        endTime: "",
        validationSource: "",
        startingLiquidity: "",
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="create-market-container">
      <div className="market-form-container">
        <h2 className="title">🚀 Tạo Thị Trường Dự Đoán</h2>
        {error && <div className="error-message">{error}</div>}

        <form className="market-form" onSubmit={handleSubmit}>

          {/* name tiêu đề */}
          <div className="form-group">
            <label>Tên thị trường</label>
            <input
              type="text"
              placeholder="Nhập tên thị trường"
              value={marketData.name}
              onChange={(e) => setMarketData({ ...marketData, name: e.target.value })}
              required
            />
          </div>

          {/* description tiêu đề */}
          <div className="form-group">
            <label>Mô tả</label>
            <textarea
              placeholder="Mô tả thị trường..."
              value={marketData.description}
              onChange={(e) => setMarketData({ ...marketData, description: e.target.value })}
              required
            />
          </div>

          {/*Danh mục */}
          <div className="form-group">
            <label>Danh mục</label>
            <select
              value={marketData.category}
              onChange={(e) => setMarketData({ ...marketData, category: e.target.value })}
              required
            >
              <option value="" disabled>Chọn danh mục</option>
              <option value="Sports">Sport</option>
              <option value="Crypto">Crypto</option>
              <option value="Politics">Politics</option>
            </select>
          </div>


          <div className="form-group">
            <label>Thời gian kết thúc</label>
            <input
              type="datetime-local"
              value={marketData.endTime}
              onChange={(e) => setMarketData({ ...marketData, endTime: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label>🔍 Nguồn xác thực</label>
            <input
              type="text"
              placeholder="URL nguồn dữ liệu xác thực"
              value={marketData.validationSource}
              onChange={(e) => setMarketData({ ...marketData, validationSource: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label>💰 Số dư khởi tạo</label>
            <input
              type="number"
              placeholder="Nhập số dư BTB"
              value={marketData.startingLiquidity}
              onChange={(e) => setMarketData({ ...marketData, startingLiquidity: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label>Lựa chọn</label>
            {marketData.options.map((option, index) => (
              <input
                key={index}
                type="text"
                placeholder={`Lựa chọn ${index + 1}`}
                value={option}
                onChange={(e) => {
                  const newOptions = [...marketData.options];
                  newOptions[index] = e.target.value;
                  setMarketData({ ...marketData, options: newOptions });
                }}
                required
              />
            ))}
            <button
              type="button"
              className="add-option-btn"
              onClick={() => setMarketData({ ...marketData, options: [...marketData.options, ""] })}
            >
              ➕ Thêm lựa chọn
            </button>
          </div>

          <button
            type="submit"
            className="submit-btn"
            disabled={loading}
          >
            {loading ? "⏳ Đang tạo..." : "🚀 Tạo Thị Trường"}
          </button>

        </form>
      </div>

      <div className="wallet-info">
        <h3>💳 Ví của bạn</h3>
        {account ? (
          <p className="wallet-address">Đã kết nối</p>
        ) : (
          <button className="connect-wallet-btn" onClick={connectWallet}>
            🔗 Kết nối ví
          </button>
        )}
        <p>Số dư: <strong>{walletBalance} BTB</strong></p>
      </div>
    </div>
  );
}

export default CreateMarket;
