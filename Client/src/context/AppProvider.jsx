import { createContext, useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [market, setMarket] = useState([]);
  const [price, setPrice] = useState();
  const [account, setAccount] = useState("");

  useEffect(() => {
    if (market) {
      setPrice(market.startingLiquidity);
    }
  }, [market]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        setIsSidebarOpen,
        toggleSidebar,
        market,
        setMarket,
        price,
        setPrice,
        account,
        setAccount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;

export const useAppContext = () => {
  return useContext(AppContext);
};
