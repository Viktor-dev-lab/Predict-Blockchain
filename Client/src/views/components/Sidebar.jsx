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
        <a href="/create">
          <FontAwesomeIcon icon={faPlus} className="icon" /> <span>Create</span>
        </a>
        <a href="/markets">
          <FontAwesomeIcon icon={faChartLine} className="icon" /> <span>Live Markets</span>
        </a>
        <a href="/validate">
          <FontAwesomeIcon icon={faCheck} className="icon" /> <span>Validate</span>
        </a>
        <a href="/nft">
          <FontAwesomeIcon icon={faPaintBrush} className="icon" /> <span>NFT Marketplace</span>
        </a>
        <a href="/profile">
          <FontAwesomeIcon icon={faUser} className="icon" /> <span>Profile</span>
        </a>
        <a href="/leader">
          <FontAwesomeIcon icon={faTrophy} className="icon" /> <span>Leaderboard</span>
        </a>
        <a href="/docs">
          <FontAwesomeIcon icon={faFileAlt} className="icon" /> <span>Documentation</span>
        </a>
        <a href="/settings">
          <FontAwesomeIcon icon={faCog} className="icon" /> <span>Settings</span>
        </a>
        <a href="/notifications">
          <FontAwesomeIcon icon={faBell} className="icon" />
          <span>Notifications</span>
          <span className="badge">3</span>
        </a>
      </nav>
    </div>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired, 
};

export default Sidebar;
