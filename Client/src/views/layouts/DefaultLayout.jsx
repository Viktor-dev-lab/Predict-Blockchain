import Sidebar from "../components/Sidebar";
import Header from "../components/Header.jsx";
import PropTypes from "prop-types"; 
import { useAppContext } from "../../context/AppProvider.jsx";
import "../../assets/css/DefaultLayout.css"; 

const DefaultLayout = ({ children }) => {
  const { isSidebarOpen, toggleSidebar } = useAppContext();

  return (
    <div className="dashboard">
      {/* ✅ Header luôn cố định trên cùng */}
      <Header />

      <div className="content-wrapper">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="main-content">{children}</div>
      </div>
    </div>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired, 
};

export default DefaultLayout;
