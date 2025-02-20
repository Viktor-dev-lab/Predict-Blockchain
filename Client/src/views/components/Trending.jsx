import "../../assets/css/Trending.css";
import sportsImg from "../../assets/images/sports.jpg";
import politicsImg from "../../assets/images/politics.jpg";
import cryptoImg from "../../assets/images/crypto.jpg";

const categories = [
  { name: "Sports", image: sportsImg },
  { name: "Politics", image: politicsImg },
  { name: "Crypto", image: cryptoImg }
];

const Trending = () => {
  return (
    <div className="trending-container">
      <h2 className="trending-header">Trending Categories</h2>

      <div className="trending-cards">
        {categories.map((category, index) => (
          <div key={index} className="trending-card">
            <img src={category.image} alt={category.name} />
            <span className="trending-card-content">{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
