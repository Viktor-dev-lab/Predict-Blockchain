import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import {
  faBars,
  faTimes,
  faPlus,
  faChartLine,
  faCheck,
  faPaintBrush,
  faUser,
  faTrophy,
  faFileAlt,
  faCog,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import "../../assets/css/Sidebar.css";
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSidebar }) => {


  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>

      {/* Header Sidebar */}
      <div className="sidebar-header">
        <h2 className="logo">{isOpen ? "CODE BREW" : "CB"}</h2>
        <button className="menu-toggle" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </button>
      </div>

      {/* Menu */}
      <nav className="sidebar-menu">
        <Link to="/create">
          <FontAwesomeIcon icon={faPlus} className="icon" /> <span>Create</span>
        </Link>
        <Link to="/markets">
          <FontAwesomeIcon icon={faChartLine} className="icon" /> <span>Live Markets</span>
        </Link>
        {/* <Link to="/validate">
          <FontAwesomeIcon icon={faCheck} className="icon" /> <span>Validate</span>
        </Link>
        <Link to="/nft">
          <FontAwesomeIcon icon={faPaintBrush} className="icon" /> <span>NFT Marketplace</span>
        </Link> */}
        <Link to="/profile">
          <FontAwesomeIcon icon={faUser} className="icon" /> <span>Profile</span>
        </Link>
        <Link to="/leader">
          <FontAwesomeIcon icon={faTrophy} className="icon" /> <span>Leaderboard</span>
        </Link>
        {/* <Link to="/docs">
          <FontAwesomeIcon icon={faFileAlt} className="icon" /> <span>Documentation</span>
        </Link>
        <Link to="/settings">
          <FontAwesomeIcon icon={faCog} className="icon" /> <span>Settings</span>
        </Link>
        <Link to="/notifications">
          <FontAwesomeIcon icon={faBell} className="icon" />
          <span>Notifications</span>
          <span className="badge">3</span>
        </Link> */}
      </nav>
    </div>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired, 
};

export default Sidebar;
