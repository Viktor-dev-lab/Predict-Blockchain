import Sidebar from "../components/Sidebar";
import Header from "../components/Header.jsx";
import PropTypes from "prop-types"; 
import { useAppContext } from "../../context/AppProvider.jsx";

const DefaultLayout = ({ children }) => {
  const { isSidebarOpen, toggleSidebar } = useAppContext();


  return (
    <div className="dashboard">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="main-content">
        <Header />
        {children} 
      </div>
    </div>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired, 
};

export default DefaultLayout;
