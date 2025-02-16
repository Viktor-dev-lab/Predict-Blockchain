import { useState } from "react";
import PropTypes from "prop-types"; 
import "../../assets/css/Filter.css"

const Filter = ({ categories, onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [sortBy, setSortBy] = useState("");

  const handleFilterChange = () => {
    onFilterChange({ searchTerm, category, sortBy });
  };

  const handleClearFilters = () => {
    setSearchTerm("");
    setCategory("");
    setSortBy("");
    onFilterChange({ searchTerm: "", category: "", sortBy: "" });
  };

  return (
    <div className="filter-container">
      <input
        type="text"
        className="search-bar"
        placeholder="Tìm kiếm..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          handleFilterChange();
        }}
      />

      <select
        className="filter-select"
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
          handleFilterChange();
        }}
      >
        <option value="">Tất cả danh mục</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <select
        className="filter-select"
        value={sortBy}
        onChange={(e) => {
          setSortBy(e.target.value);
          handleFilterChange();
        }}
      >
        <option value="">Sắp xếp theo</option>
        <option value="newest">Mới nhất</option>
        <option value="oldest">Cũ nhất</option>
        <option value="popular">Phổ biến</option>
      </select>

      {/* Nút Clear */}
      <button className="clear-button" onClick={handleClearFilters}>
        Xóa bộ lọc
      </button>
    </div>
  );
};

Filter.propTypes = {
  categories: PropTypes.array.isRequired, 
  onFilterChange: PropTypes.func.isRequired
};

export default Filter;
