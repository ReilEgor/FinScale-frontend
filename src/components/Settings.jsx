import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {useUserStore} from "../store/useUserStore.js";
import { doLogout } from '../keycloak.js';
const customStyles = {
    body: {
        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif',
        color: '#FFFFFF',
        backgroundColor: '#000',
        backgroundImage: 'radial-gradient(ellipse at top left, rgba(45, 35, 80, 0.6), transparent 50%), radial-gradient(ellipse at bottom right, rgba(20, 50, 70, 0.5), transparent 50%), radial-gradient(circle at 50% 50%, rgba(20, 20, 25, 1), #050505 100%)',
        minHeight: '100vh',
        display: 'flex',
        overflow: 'hidden',
        WebkitFontSmoothing: 'antialiased',
    },
    appContainer: {
        display: 'flex',
        width: '100%',
        height: '100vh',
        padding: '16px',
        gap: '20px',
    },
    glassPanel: {
        background: 'rgba(30, 30, 32, 0.45)',
        backdropFilter: 'blur(40px)',
        WebkitBackdropFilter: 'blur(40px)',
        border: '1px solid rgba(255, 255, 255, 0.12)',
    },
    sidebar: {
        width: '260px',
        flexShrink: 0,
        borderRadius: '28px',
        display: 'flex',
        flexDirection: 'column',
        padding: '24px 16px',
    },
    brand: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '0 12px 32px 12px',
        fontWeight: 600,
        fontSize: '18px',
    },
    navSection: {
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        marginBottom: '24px',
    },
    navLabel: {
        fontSize: '11px',
        textTransform: 'uppercase',
        letterSpacing: '0.8px',
        color: 'rgba(255, 255, 255, 0.55)',
        padding: '0 12px 8px 12px',
    },
    navItem: {
        display: 'flex',
        alignItems: 'center',
        gap: '14px',
        padding: '10px 12px',
        borderRadius: '14px',
        cursor: 'pointer',
        textDecoration: 'none',
        color: '#FFFFFF',
        fontSize: '15px',
        transition: 'background 0.2s',
    },
    navItemActive: {
        background: 'rgba(255, 255, 255, 0.15)',
    },
    mainContent: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        overflowY: 'auto',
        paddingRight: '8px',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '8px 0',
    },
    pageTitle: {
        fontSize: '28px',
        fontWeight: 600,
        letterSpacing: '-0.5px',
    },
    settingsLayout: {
        display: 'grid',
        gridTemplateColumns: '320px 1fr',
        gap: '32px',
        alignItems: 'start',
    },
    settingsCard: {
        borderRadius: '20px',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
    },
    profileHeader: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: '16px',
        marginBottom: '8px',
    },
    avatarLarge: {
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #a8c0ff, #3f2b96)',
        border: '4px solid rgba(255, 255, 255, 0.12)',
    },
    settingsGroup: {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
    },
    groupTitle: {
        fontSize: '13px',
        fontWeight: 600,
        color: 'rgba(255, 255, 255, 0.55)',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        marginBottom: '4px',
    },
    settingRow: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 0',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
    },
    settingRowLast: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 0',
    },
    settingLabel: {
        display: 'flex',
        flexDirection: 'column',
        gap: '2px',
    },
    settingName: {
        fontSize: '15px',
        fontWeight: 500,
    },
    settingDesc: {
        fontSize: '12px',
        color: 'rgba(255, 255, 255, 0.55)',
    },
    switchContainer: {
        position: 'relative',
        display: 'inline-block',
        width: '44px',
        height: '24px',
    },
    sliderOff: {
        position: 'absolute',
        cursor: 'pointer',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255,255,255,0.1)',
        transition: '.3s',
        borderRadius: '24px',
    },
    sliderOn: {
        position: 'absolute',
        cursor: 'pointer',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#32D74B',
        transition: '.3s',
        borderRadius: '24px',
    },
    sliderKnobOff: {
        position: 'absolute',
        content: '""',
        height: '18px',
        width: '18px',
        left: '3px',
        bottom: '3px',
        backgroundColor: 'white',
        transition: '.3s',
        borderRadius: '50%',
    },
    sliderKnobOn: {
        position: 'absolute',
        content: '""',
        height: '18px',
        width: '18px',
        left: '3px',
        bottom: '3px',
        backgroundColor: 'white',
        transition: '.3s',
        borderRadius: '50%',
        transform: 'translateX(20px)',
    },
    selectInput: {
        background: 'rgba(255, 255, 255, 0.08)',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        color: 'white',
        padding: '6px 12px',
        borderRadius: '8px',
        fontSize: '14px',
        outline: 'none',
    },
    logoutBtn: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        marginTop: 'auto',
        padding: '14px',
        background: 'rgba(255, 69, 58, 0.1)',
        color: '#FF453A',
        border: '1px solid rgba(255, 69, 58, 0.2)',
        borderRadius: '14px',
        fontWeight: 600,
        cursor: 'pointer',
        transition: '0.2s',
        textDecoration: 'none',
        fontSize: '15px',
    },
    securityItem: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'rgba(255,255,255,0.03)',
        padding: '16px',
        borderRadius: '14px',
        transition: 'background 0.2s',
        cursor: 'pointer',
    },
};

const Toggle = ({ checked, onChange }) => {
    return (
        <div
            style={customStyles.switchContainer}
            onClick={() => onChange(!checked)}
        >
            <div style={checked ? customStyles.sliderOn : customStyles.sliderOff}>
                <div style={checked ? customStyles.sliderKnobOn : customStyles.sliderKnobOff} />
            </div>
        </div>
    );
};

const Sidebar = ({ activeItem, onNavClick }) => {
    const [hoveredItem, setHoveredItem] = useState(null);

    const navItemStyle = (id) => ({
        ...customStyles.navItem,
        ...(activeItem === id ? customStyles.navItemActive : {}),
        ...(hoveredItem === id && activeItem !== id ? { background: 'rgba(255, 255, 255, 0.1)' } : {}),
    });

    return (
        <aside style={{ ...customStyles.glassPanel, ...customStyles.sidebar }}>
            <div style={customStyles.brand}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
                    <path d="M12 16L16 12L12 8" />
                    <path d="M8 12H16" />
                </svg>
                Aura
            </div>

            <div style={customStyles.navSection}>
                <div style={customStyles.navLabel}>Main</div>
                <a
                    href="#"
                    style={navItemStyle('dashboard')}
                    onMouseEnter={() => setHoveredItem('dashboard')}
                    onMouseLeave={() => setHoveredItem(null)}
                    onClick={(e) => { e.preventDefault(); onNavClick('dashboard'); }}
                >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18" style={{ color: 'rgba(255,255,255,0.55)' }}>
                        <rect x="3" y="3" width="7" height="7" />
                        <rect x="14" y="3" width="7" height="7" />
                        <rect x="14" y="14" width="7" height="7" />
                        <rect x="3" y="14" width="7" height="7" />
                    </svg>
                    Dashboard
                </a>
                <a
                    href="#"
                    style={navItemStyle('transactions')}
                    onMouseEnter={() => setHoveredItem('transactions')}
                    onMouseLeave={() => setHoveredItem(null)}
                    onClick={(e) => { e.preventDefault(); onNavClick('transactions'); }}
                >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18" style={{ color: 'rgba(255,255,255,0.55)' }}>
                        <line x1="12" y1="1" x2="12" y2="23" />
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                    Transactions
                </a>
                <a
                    href="#"
                    style={navItemStyle('analytics')}
                    onMouseEnter={() => setHoveredItem('analytics')}
                    onMouseLeave={() => setHoveredItem(null)}
                    onClick={(e) => { e.preventDefault(); onNavClick('analytics'); }}
                >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18" style={{ color: 'rgba(255,255,255,0.55)' }}>
                        <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
                        <path d="M22 12A10 10 0 0 0 12 2v10z" />
                    </svg>
                    Analytics
                </a>
            </div>

            <div style={customStyles.navSection}>
                <div style={customStyles.navLabel}>Planning</div>
                <a
                    href="#"
                    style={navItemStyle('budgets')}
                    onMouseEnter={() => setHoveredItem('budgets')}
                    onMouseLeave={() => setHoveredItem(null)}
                    onClick={(e) => { e.preventDefault(); onNavClick('budgets'); }}
                >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18" style={{ color: 'rgba(255,255,255,0.55)' }}>
                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                    </svg>
                    Budgets
                </a>
            </div>

            <div style={{ flexGrow: 1 }} />

            <div style={{ ...customStyles.navSection, marginBottom: 0 }}>
                <a
                    href="#"
                    style={navItemStyle('settings')}
                    onMouseEnter={() => setHoveredItem('settings')}
                    onMouseLeave={() => setHoveredItem(null)}
                    onClick={(e) => { e.preventDefault(); onNavClick('settings'); }}
                >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18" style={{ color: 'rgba(255,255,255,0.55)' }}>
                        <circle cx="12" cy="12" r="3" />
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                    </svg>
                    Settings
                </a>
            </div>
        </aside>
    );
};

const SettingsPage = () => {
    const [currency, setCurrency] = useState('USD ($)');
    const [darkMode, setDarkMode] = useState(true);
    const [pushNotifications, setPushNotifications] = useState(true);
    const [budgetAlerts, setBudgetAlerts] = useState(true);
    const [emailReports, setEmailReports] = useState(false);
    const [biometric, setBiometric] = useState(true);
    const [logoutHovered, setLogoutHovered] = useState(false);
    const [securityHovered, setSecurityHovered] = useState(null);
    const user = useUserStore((state) => state.user);
    return (
        <main style={customStyles.mainContent}>
            <header style={customStyles.header}>
                <h1 style={customStyles.pageTitle}>Settings</h1>
            </header>

            <div style={customStyles.settingsLayout}>
                {/* Left column: Profile card */}
                <div style={{ ...customStyles.glassPanel, ...customStyles.settingsCard }}>
                    <div style={customStyles.profileHeader}>
                        <div style={customStyles.avatarLarge} />
                        <div style={{ textAlign: 'center' }}>
                            <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '4px' }}>{user?.name || "Guest"}</h2>
                            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.55)' }}>{user?.email || "guest@gmil.com"}</p>
                        </div>
                    </div>

                    <div style={{ ...customStyles.settingsGroup, marginTop: '10px' }}>
                        <div style={customStyles.groupTitle}>Account Preference</div>
                        <div style={customStyles.settingRow}>
                            <div style={customStyles.settingLabel}>
                                <span style={customStyles.settingName}>Currency</span>
                                <span style={customStyles.settingDesc}>Choose your primary currency</span>
                            </div>
                            <select
                                style={customStyles.selectInput}
                                value={currency}
                                onChange={(e) => setCurrency(e.target.value)}
                            >
                                <option>USD ($)</option>
                                <option>EUR (€)</option>
                                <option>GBP (£)</option>
                            </select>
                        </div>
                        <div style={customStyles.settingRowLast}>
                            <div style={customStyles.settingLabel}>
                                <span style={customStyles.settingName}>Dark Mode</span>
                                <span style={customStyles.settingDesc}>System appearance preference</span>
                            </div>
                            <Toggle checked={darkMode} onChange={setDarkMode} />
                        </div>
                    </div>

                    <a
                        href="#"
                        style={{
                            ...customStyles.logoutBtn,
                            ...(logoutHovered ? { background: 'rgba(255, 69, 58, 0.2)' } : {}),
                        }}
                        onMouseEnter={() => setLogoutHovered(true)}
                        onMouseLeave={() => setLogoutHovered(false)}
                        onClick={(e) => {
                            e.preventDefault();
                            doLogout();
                        }}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                            <polyline points="16 17 21 12 16 7" />
                            <line x1="21" y1="12" x2="9" y2="12" />
                        </svg>
                        Log Out
                    </a>
                </div>

                {/* Right column: Notifications + Security */}
                <div style={customStyles.settingsGroup}>
                    {/* Notifications card */}
                    <div style={{ ...customStyles.glassPanel, ...customStyles.settingsCard }}>
                        <div style={customStyles.groupTitle}>Notifications</div>
                        <div style={customStyles.settingRow}>
                            <div style={customStyles.settingLabel}>
                                <span style={customStyles.settingName}>Push Notifications</span>
                                <span style={customStyles.settingDesc}>Receive alerts for large transactions</span>
                            </div>
                            <Toggle checked={pushNotifications} onChange={setPushNotifications} />
                        </div>
                        <div style={customStyles.settingRow}>
                            <div style={customStyles.settingLabel}>
                                <span style={customStyles.settingName}>Budget Overrun Alerts</span>
                                <span style={customStyles.settingDesc}>Notify when approaching budget limits</span>
                            </div>
                            <Toggle checked={budgetAlerts} onChange={setBudgetAlerts} />
                        </div>
                        <div style={customStyles.settingRowLast}>
                            <div style={customStyles.settingLabel}>
                                <span style={customStyles.settingName}>Email Reports</span>
                                <span style={customStyles.settingDesc}>Weekly financial summary to your inbox</span>
                            </div>
                            <Toggle checked={emailReports} onChange={setEmailReports} />
                        </div>
                    </div>

                    {/* Security card */}
                    <div style={{ ...customStyles.glassPanel, ...customStyles.settingsCard }}>
                        <div style={customStyles.groupTitle}>Security</div>
                        <div
                            style={{
                                ...customStyles.securityItem,
                                ...(securityHovered === '2fa' ? { background: 'rgba(255, 255, 255, 0.1)' } : {}),
                            }}
                            onMouseEnter={() => setSecurityHovered('2fa')}
                            onMouseLeave={() => setSecurityHovered(null)}
                        >
                            <div style={customStyles.settingLabel}>
                                <span style={customStyles.settingName}>Two-Factor Authentication</span>
                                <span style={customStyles.settingDesc}>Adds an extra layer of security</span>
                            </div>
                            <span style={{ color: '#32D74B', fontSize: '13px', fontWeight: 500 }}>Enabled</span>
                        </div>
                        <div
                            style={{
                                ...customStyles.securityItem,
                                ...(securityHovered === 'biometric' ? { background: 'rgba(255, 255, 255, 0.1)' } : {}),
                            }}
                            onMouseEnter={() => setSecurityHovered('biometric')}
                            onMouseLeave={() => setSecurityHovered(null)}
                        >
                            <div style={customStyles.settingLabel}>
                                <span style={customStyles.settingName}>Biometric Unlock</span>
                                <span style={customStyles.settingDesc}>Use FaceID or TouchID to open app</span>
                            </div>
                            <Toggle checked={biometric} onChange={setBiometric} />
                        </div>
                        <div
                            style={{
                                ...customStyles.securityItem,
                                ...(securityHovered === 'password' ? { background: 'rgba(255, 255, 255, 0.1)' } : {}),
                            }}
                            onMouseEnter={() => setSecurityHovered('password')}
                            onMouseLeave={() => setSecurityHovered(null)}
                        >
                            <div style={customStyles.settingLabel}>
                                <span style={customStyles.settingName}>Change Password</span>
                                <span style={customStyles.settingDesc}>Last changed 4 months ago</span>
                            </div>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="9 18 15 12 9 6" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

const Settings = () => {
    const [activeNav, setActiveNav] = useState('settings');

    useEffect(() => {
        document.body.style.margin = '0';
        document.body.style.padding = '0';
        document.body.style.backgroundColor = '#000';
    }, []);

    return (
            <div style={customStyles.body}>
                <div style={customStyles.appContainer}>

                    <SettingsPage />
                </div>
            </div>
    );
}

export default Settings