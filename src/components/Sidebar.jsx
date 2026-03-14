import customStyles from "../styles.jsx";
import NavItem from './NavItem.jsx';

const Sidebar = ({ activeNav, setActiveNav }) => {
    return (
        <aside style={{ ...customStyles.sidebar, ...customStyles.glassPanel }}>
            <div style={customStyles.brand}>
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ width: '24px', height: '24px' }}
                >
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 16L16 12L12 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                FinScale
            </div>

            <div style={customStyles.navSection}>
                <div style={customStyles.navLabel}>Main</div>
                <NavItem
                    label="Dashboard"
                    active={activeNav === 'dashboard'}
                    onClick={() => setActiveNav('dashboard')}
                    icon={<><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></>}
                />
                <NavItem
                    label="Transactions"
                    active={activeNav === 'transactions'}
                    onClick={() => setActiveNav('transactions')}
                    icon={<><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></>}
                />
                <NavItem
                    label="Analytics"
                    active={activeNav === 'analytics'}
                    onClick={() => setActiveNav('analytics')}
                    icon={<><path d="M21.21 15.89A10 10 0 1 1 8 2.83" /><path d="M22 12A10 10 0 0 0 12 2v10z" /></>}
                />
            </div>

            <div style={customStyles.navSection}>
                <div style={customStyles.navLabel}>Planning</div>
                <NavItem
                    label="Budgets"
                    active={activeNav === 'budgets'}
                    onClick={() => setActiveNav('budgets')}
                    icon={<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />}
                />
                <NavItem
                    label="Forecasting"
                    active={activeNav === 'forecasting'}
                    onClick={() => setActiveNav('forecasting')}
                    icon={<polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />}
                />
            </div>

            <div style={{ flexGrow: 1 }} />

            <div style={{ ...customStyles.navSection, marginBottom: 0 }}>
                <NavItem
                    label="Settings"
                    active={activeNav === 'settings'}
                    onClick={() => setActiveNav('settings')}
                    icon={<><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></>}
                />
            </div>
        </aside>
    );
};



export default Sidebar;