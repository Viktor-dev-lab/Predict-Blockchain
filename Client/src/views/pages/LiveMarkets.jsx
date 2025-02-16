import DefaultLayout from "../layouts/DefaultLayout";
import Trending from "../components/Trending";
import MarketList from "../components/MarketList";
import Filter from "../components/Filter";

const Dashboard = () => {
  const categories = ["Công nghệ", "Giáo dục", "Thể thao"];
  const handleFilterChange = (filters) => {
    console.log("Bộ lọc:", filters);
  };

  return (
    <DefaultLayout>
      <Filter categories={categories} onFilterChange={handleFilterChange} />
      <Trending />
      <MarketList />
    </DefaultLayout>
  );
};

export default Dashboard;
