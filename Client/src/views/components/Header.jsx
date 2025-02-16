import "../../assets/css/Header.css";
import { useState } from "react";
import { ethers } from "ethers";
import Swal from "sweetalert2";

const Navbar = () => {
  const [account, setAccount] = useState("");

  const connectWallet = async () => {
    if (!window.ethereum) {
      Swal.fire({
        icon: "warning",
        title: "⚠️ Vui lòng cài đặt MetaMask!",
        text: "🔗 Tải MetaMask tại https://metamask.io/download/",
      });
      return;
    }

    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await window.ethereum.request({ method: "eth_requestAccounts" }); // Yêu cầu quyền truy cập MetaMask
      const signer = await provider.getSigner();
      const address = await signer.getAddress();

      setAccount(address);

      Swal.fire({
        icon: "success",
        title: "✅ Kết nối thành công!",
        text: `Địa chỉ ví: ${address}`,
      });
    } catch (error) {
      console.error("Lỗi kết nối MetaMask:", error);
      Swal.fire({
        icon: "error",
        title: "❌ Lỗi khi kết nối ví!",
        text: "Hãy thử lại hoặc kiểm tra MetaMask.",
      });
    }
  };

  return (
    <div className="navbar">
      <div className="nav-buttons">
        <button className="buy-btn">BUY STB</button>
        <button
          className={`wallet-btn ${account ? "connected" : ""}`}
          onClick={connectWallet}
        >
          {account ? `Connected: ${account.slice(0, 6)}...${account.slice(-4)}` : "CONNECT WALLET"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
