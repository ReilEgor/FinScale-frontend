import customStyles from "./styles.jsx";
import {useEffect, useState} from "react";
import Dashboard from "./components/DashBoard.jsx";
import PlaceholderPage from "./components/Placeholder.jsx";
import Sidebar from "./components/Sidebar.jsx";
import {Router} from "react-router-dom";
import Settings from "./components/Settings.jsx";
import {useUserStore} from "./store/useUserStore.js";
import Transactions from "./components/Transactions.jsx";

const MainPage = () => {
    const [activeNav, setActiveNav] = useState('dashboard');
    useEffect(() => {
        const style = document.createElement('style');
        style.textContent = `
      * { box-sizing: border-box; margin: 0; padding: 0; }
      body { overflow: hidden; }
      .main-scroll::-webkit-scrollbar { width: 6px; }
      .main-scroll::-webkit-scrollbar-track { background: transparent; }
      .main-scroll::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.1); border-radius: 10px; }
    `;
        document.head.appendChild(style);
        return () => document.head.removeChild(style);
    }, []);

    const renderContent = () => {
        switch (activeNav) {
            case 'dashboard':
                return <Dashboard activeNav={activeNav} setActiveNav={setActiveNav} />;
            case 'transactions':
                return <Transactions setActiveNav={setActiveNav}/>
            case 'analytics':
                return <PlaceholderPage title="Analytics" />;
            case 'budgets':
                return <PlaceholderPage title="Budgets" />;
            case 'forecasting':
                return <PlaceholderPage title="Forecasting" />;
            case 'settings':
                return <Settings />;
            default:
                return <Dashboard activeNav={activeNav} setActiveNav={setActiveNav} />;
        }
    };

    return (
        <div style={{ ...customStyles.body, ...customStyles.root }}>
            <div style={customStyles.appContainer}>
                <Sidebar activeNav={activeNav} setActiveNav={setActiveNav} />
                <div className="main-scroll" style={customStyles.mainContent}>
                    {renderContent()}
                </div>
            </div>
        </div>
    );
}
export default MainPage