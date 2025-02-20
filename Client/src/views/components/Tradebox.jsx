import { useState } from "react";

function TradeBox() {
  const [price, setPrice] = useState(39);
  const [shares, setShares] = useState(0);

  const total = (price * shares) / 100;
  const toWin = shares - total; // Giả sử lợi nhuận đơn giản
  const [action, setAction] = useState("buy");
  const [opinion, setOpinion] = useState("yes");

  return (
    <div className="bg-[#1D2B39] text-white p-5 rounded-lg w-80 shadow-lg">
      <div className="flex justify-evenly border-b border-gray-700">
        <button className={action === "buy" ? "flex-1 py-2 border-b-2 border-blue-500" : "flex-1 py-2 text-gray-400"} onClick={()=>{setAction("buy")}}>Buy</button>
        <button className={action === "sell" ? "flex-1 py-2 border-b-2 border-blue-500" : "flex-1 py-2 text-gray-400"} onClick={()=>{setAction("sell")}}>Sell</button>
        <select className="bg-transparent text-gray-400 ml-auto">
          <option>Limit</option>
          <option>Market</option>
        </select>
      </div>

      <div className="flex mt-4 space-x-2">
        <button className={opinion === "yes" ? "flex-1 bg-green-500 py-2 rounded-lg" : "flex-1 bg-gray-700 text-gray-400 py-2 rounded-lg"} onClick={()=>{setOpinion("yes")}}>Yes 39¢</button>
        <button className={opinion === "no" ? "flex-1 bg-green-500 py-2 rounded-lg" : "flex-1 bg-gray-700 text-gray-400 py-2 rounded-lg"} onClick={()=>{setOpinion("no")}}>No 62¢</button>
      </div>

      <div className="mt-4">
        <label className="text-gray-400">Limit Price</label>
        <div className="flex items-center px-3 py-2 rounded-lg mt-1" style={{ background: "linear-gradient(135deg, #151520, #1a1a30)" }}>
          <button
            className="text-gray-400"
            onClick={() => setPrice(price > 1 ? price - 1 : 1)}
          >
            –
          </button>
          <span className="mx-auto">{price}¢</span>
          <button className="text-gray-400" onClick={() => setPrice(price + 1)}>+</button>
        </div>
      </div>

      <div className="mt-4">
        <label className="text-gray-400">Shares</label>
        <div className="flex items-center px-3 py-2 rounded-lg mt-1" style={{ background: "linear-gradient(135deg, #151520, #1a1a30)" }}>
          <button className="text-gray-400" onClick={() => setShares(shares > 0 ? shares - 10 : 0)}>-10</button>
          <input
            type="number"
            className="bg-transparent text-center w-full"
            value={shares}
            onChange={(e) => setShares(parseInt(e.target.value) || 0)}
          />
          <button className="text-gray-400" onClick={() => setShares(shares + 10)}>+10</button>
        </div>
      </div>

      <div className="flex items-center justify-between mt-4">
        <span className="text-gray-400">Total</span>
        <span className="text-blue-400">${total.toFixed(2)}</span>
      </div>
      <div className="flex items-center justify-between mt-2">
        <span className="text-gray-400">To Win 💵</span>
        <span className="text-green-400">${toWin.toFixed(2)}</span>
      </div>

      <button className="bg-blue-500 w-full mt-4 py-2 rounded-lg font-bold">
        Login to Trade
      </button>
    </div>
  );
}

export default TradeBox;
