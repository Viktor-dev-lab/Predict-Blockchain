import PropTypes from "prop-types"; // 🔹 Import PropTypes
import "../../assets/css/MarketList.css";

const MarketCard = ({ category, hashtags, question, time, yesPercent, noPercent }) => {
  return (
    <div className="market-card">
      <span className="category">{category}</span>
      <div className="hashtags">{hashtags.map((tag, index) => (
        <span key={index}>#{tag} </span> // ✅ Thêm `key` khi map
      ))}</div>
      <h3 className="question" data-fulltext={question}>{question}</h3>


      <div className="time">{time}</div>
      <div className="buttons">
        <button className="yes-button">YES {yesPercent}%</button>
        <button className="no-button">NO {noPercent}%</button>
      </div>
    </div>
  );
};


MarketCard.propTypes = {
  category: PropTypes.string.isRequired,
  hashtags: PropTypes.arrayOf(PropTypes.string).isRequired, 
  question: PropTypes.string.isRequired, 
  time: PropTypes.string.isRequired, 
  yesPercent: PropTypes.number.isRequired, 
  noPercent: PropTypes.number.isRequired, 
};

export default MarketCard;
