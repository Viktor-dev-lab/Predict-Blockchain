import "../../assets/css/Trending.css";
import sportsImg from "../../assets/images/sports.jpg";
import politicsImg from "../../assets/images/politics.jpg";
import cryptoImg from "../../assets/images/crypto.jpg";

const Trending = () => {
  return (
    <div className="trending-container">
      <h2 className="trending-header">Trending Categories</h2>
      
      <div className="trending-cards">
        <div className="trending-card">
          <img src={sportsImg} alt="Sports" />
          <span className="trending-card-content">Sports</span>
        </div>
        <div className="trending-card">
          <img src={politicsImg} alt="Politics" />
          <span className="trending-card-content">Politics</span>
        </div>
        <div className="trending-card">
          <img src={cryptoImg} alt="Crypto" />
          <span className="trending-card-content">Crypto</span>
        </div>
      </div>
    
    </div>
  );
};

export default Trending;
