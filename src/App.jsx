import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const customStyles = {
  root: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif',
  },
  body: {
    background: '#000',
    backgroundImage: `
      radial-gradient(ellipse at top left, rgba(45, 35, 80, 0.6), transparent 50%),
      radial-gradient(ellipse at bottom right, rgba(20, 50, 70, 0.5), transparent 50%),
      radial-gradient(circle at 50% 50%, rgba(20, 20, 25, 1), #050505 100%)
    `,
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
    display: 'flex',
    overflow: 'hidden',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    color: '#FFFFFF',
  },
  glassPanel: {
    background: 'rgba(30, 30, 32, 0.45)',
    backdropFilter: 'blur(40px)',
    WebkitBackdropFilter: 'blur(40px)',
    border: '1px solid rgba(255, 255, 255, 0.12)',
    boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
  },
  appContainer: {
    display: 'flex',
    width: '100%',
    height: '100vh',
    padding: '16px',
    gap: '20px',
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
    letterSpacing: '-0.2px',
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
    fontWeight: 500,
  },
  navItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
    padding: '10px 12px',
    borderRadius: '14px',
    cursor: 'pointer',
    transition: 'background 0.2s ease',
    textDecoration: 'none',
    color: '#FFFFFF',
    fontSize: '15px',
    fontWeight: 400,
    letterSpacing: '-0.1px',
  },
  navItemActive: {
    background: 'rgba(255, 255, 255, 0.15)',
  },
  navItemHover: {
    background: 'rgba(255, 255, 255, 0.1)',
  },
  mainContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
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
  userProfile: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '6px 16px 6px 6px',
    borderRadius: '28px',
    background: 'rgba(255, 255, 255, 0.08)',
    border: '1px solid rgba(255, 255, 255, 0.12)',
    cursor: 'pointer',
    transition: 'background 0.2s',
  },
  avatar: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #a8c0ff, #3f2b96)',
  },
  userName: {
    fontSize: '14px',
    fontWeight: 500,
  },
  dashboardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '20px',
  },
  card: {
    borderRadius: '20px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    position: 'relative',
    overflow: 'hidden',
  },
  kpiHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'rgba(255, 255, 255, 0.55)',
  },
  kpiTitle: {
    fontSize: '13px',
    fontWeight: 500,
  },
  kpiIcon: {
    width: '24px',
    height: '24px',
    borderRadius: '8px',
    background: 'rgba(255, 255, 255, 0.08)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid rgba(255,255,255,0.05)',
  },
  kpiValue: {
    fontSize: '32px',
    fontWeight: 600,
    letterSpacing: '-1px',
    marginTop: '4px',
  },
  kpiTrend: {
    fontSize: '13px',
    fontWeight: 500,
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  },
  trendUp: { color: '#32D74B' },
  trendDown: { color: '#FF453A' },
  analyticsRow: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '20px',
  },
  sectionTitle: {
    fontSize: '16px',
    fontWeight: 600,
    marginBottom: '20px',
    letterSpacing: '-0.2px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  actionLink: {
    fontSize: '13px',
    color: 'rgba(255, 255, 255, 0.55)',
    textDecoration: 'none',
    fontWeight: 400,
    cursor: 'pointer',
    transition: 'color 0.2s',
  },
  chartContainer: {
    height: '220px',
    width: '100%',
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-end',
    paddingBottom: '20px',
    paddingLeft: '30px',
  },
  yAxis: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: 'calc(100% - 20px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    fontSize: '11px',
    color: 'rgba(255, 255, 255, 0.55)',
  },
  chartGridLine: {
    position: 'absolute',
    left: '30px',
    right: 0,
    height: '1px',
    background: 'rgba(255, 255, 255, 0.05)',
  },
  svgLineChart: {
    width: '100%',
    height: '100%',
    overflow: 'visible',
  },
  xAxis: {
    position: 'absolute',
    bottom: 0,
    left: '30px',
    right: 0,
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '11px',
    color: 'rgba(255, 255, 255, 0.55)',
  },
  donutContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '220px',
    position: 'relative',
  },
  donut: {
    width: '140px',
    height: '140px',
    borderRadius: '50%',
    background: `conic-gradient(
      #FFFFFF 0% 45%,
      rgba(255,255,255,0.4) 45% 75%,
      rgba(255,255,255,0.15) 75% 100%
    )`,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  donutInner: {
    position: 'absolute',
    width: '110px',
    height: '110px',
    background: 'rgba(30, 30, 32, 0.45)',
    borderRadius: '50%',
    backdropFilter: 'blur(40px)',
    WebkitBackdropFilter: 'blur(40px)',
    boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.2)',
  },
  donutCenterText: {
    position: 'absolute',
    textAlign: 'center',
    zIndex: 2,
  },
  donutTotal: {
    fontSize: '20px',
    fontWeight: 600,
    letterSpacing: '-0.5px',
  },
  donutLabel: {
    fontSize: '11px',
    color: 'rgba(255, 255, 255, 0.55)',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginTop: '2px',
  },
  donutLegend: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '12px',
    marginTop: '20px',
    width: '100%',
  },
  legendItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '12px',
    color: 'rgba(255, 255, 255, 0.55)',
  },
  dot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
  },
  bottomRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
    paddingBottom: '20px',
  },
  transactionList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  transactionItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '12px',
    borderRadius: '14px',
    background: 'rgba(255, 255, 255, 0.03)',
    transition: 'background 0.2s',
    cursor: 'pointer',
  },
  txLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  txIcon: {
    width: '40px',
    height: '40px',
    borderRadius: '10px',
    background: 'rgba(255, 255, 255, 0.08)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid rgba(255,255,255,0.05)',
  },
  txDetails: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  txTitle: {
    fontSize: '14px',
    fontWeight: 500,
  },
  txDate: {
    fontSize: '12px',
    color: 'rgba(255, 255, 255, 0.55)',
  },
  txAmount: {
    fontSize: '15px',
    fontWeight: 500,
    textAlign: 'right',
  },
  txCategory: {
    fontSize: '12px',
    color: 'rgba(255, 255, 255, 0.55)',
    textAlign: 'right',
    marginTop: '4px',
  },
  budgetList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    marginTop: '10px',
  },
  budgetItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  budgetHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  budgetTitle: {
    fontSize: '14px',
    fontWeight: 500,
  },
  budgetAmounts: {
    fontSize: '13px',
    color: 'rgba(255, 255, 255, 0.55)',
  },
  progressTrack: {
    height: '6px',
    borderRadius: '3px',
    background: 'rgba(255, 255, 255, 0.1)',
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    background: '#FFFFFF',
    borderRadius: '3px',
  },
  progressFillWarning: {
    height: '100%',
    background: '#FF9F0A',
    borderRadius: '3px',
  },
  progressFillDanger: {
    height: '100%',
    background: '#FF453A',
    borderRadius: '3px',
  },
};

const NavItem = ({ icon, label, active, onClick }) => {
  const [hovered, setHovered] = useState(false);
  const itemStyle = {
    ...customStyles.navItem,
    ...(active ? customStyles.navItemActive : {}),
    ...(hovered && !active ? customStyles.navItemHover : {}),
  };
  return (
      <div
          style={itemStyle}
          onClick={onClick}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
      >
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ width: '18px', height: '18px', color: active ? '#FFFFFF' : 'rgba(255,255,255,0.55)' }}
        >
          {icon}
        </svg>
        {label}
      </div>
  );
};

const KPICard = ({ title, value, trend, trendText, trendDirection, icon }) => (
    <div style={{ ...customStyles.card, ...customStyles.glassPanel }}>
      <div style={customStyles.kpiHeader}>
        <span style={customStyles.kpiTitle}>{title}</span>
        <div style={customStyles.kpiIcon}>
          <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ width: '14px', height: '14px', color: '#FFFFFF' }}
          >
            {icon}
          </svg>
        </div>
      </div>
      <div style={customStyles.kpiValue}>{value}</div>
      <div style={{ ...customStyles.kpiTrend, ...(trendDirection === 'up' ? customStyles.trendUp : customStyles.trendDown) }}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {trendDirection === 'up'
              ? <>
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                <polyline points="17 6 23 6 23 12" />
              </>
              : <>
                <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
                <polyline points="17 18 23 18 23 12" />
              </>
          }
        </svg>
        {trendText}
      </div>
    </div>
);

const TransactionItem = ({ icon, title, date, amount, category, iconStyle }) => {
  const [hovered, setHovered] = useState(false);
  return (
      <div
          style={{ ...customStyles.transactionItem, ...(hovered ? { background: 'rgba(255, 255, 255, 0.1)' } : {}) }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
      >
        <div style={customStyles.txLeft}>
          <div style={{ ...customStyles.txIcon, ...iconStyle }}>
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke={iconStyle && iconStyle.stroke ? iconStyle.stroke : 'currentColor'}
                strokeWidth="2"
                style={{ width: '20px', height: '20px', color: '#FFFFFF' }}
            >
              {icon}
            </svg>
          </div>
          <div style={customStyles.txDetails}>
            <span style={customStyles.txTitle}>{title}</span>
            <span style={customStyles.txDate}>{date}</span>
          </div>
        </div>
        <div>
          <div style={{ ...customStyles.txAmount, ...(amount.startsWith('+') ? { color: '#32D74B' } : {}) }}>
            {amount}
          </div>
          <div style={customStyles.txCategory}>{category}</div>
        </div>
      </div>
  );
};

const BudgetItem = ({ title, spent, total, fillType }) => {
  const pct = Math.round((spent / total) * 100);
  const fillStyle = fillType === 'warning'
      ? customStyles.progressFillWarning
      : fillType === 'danger'
          ? customStyles.progressFillDanger
          : customStyles.progressFill;

  return (
      <div style={customStyles.budgetItem}>
        <div style={customStyles.budgetHeader}>
          <span style={customStyles.budgetTitle}>{title}</span>
          <span style={customStyles.budgetAmounts}>
          <span style={{ color: '#FFFFFF', fontWeight: 500 }}>${spent}</span> / ${total}
        </span>
        </div>
        <div style={customStyles.progressTrack}>
          <div style={{ ...fillStyle, width: `${pct}%` }} />
        </div>
      </div>
  );
};

const Dashboard = ({ activeNav, setActiveNav }) => {
  return (
      <div style={customStyles.mainContent}>
        <header style={customStyles.header}>
          <h1 style={customStyles.pageTitle}>Overview</h1>
          <div style={customStyles.userProfile}>
            <div style={customStyles.avatar} />
            <span style={customStyles.userName}>Alex M.</span>
          </div>
        </header>

        <div style={customStyles.dashboardGrid}>
          <KPICard
              title="TOTAL BALANCE"
              value="$124,500.00"
              trendText="+2.4% vs last month"
              trendDirection="up"
              icon={<><rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /></>}
          />
          <KPICard
              title="MONTHLY INCOME"
              value="$14,200.00"
              trendText="+5.1%"
              trendDirection="up"
              icon={<><polyline points="12 19 12 5" /><polyline points="5 12 12 5 19 12" /></>}
          />
          <KPICard
              title="MONTHLY EXPENSES"
              value="$4,800.50"
              trendText="-1.2%"
              trendDirection="down"
              icon={<><polyline points="12 5 12 19" /><polyline points="19 12 12 19 5 12" /></>}
          />
          <KPICard
              title="SAVINGS RATE"
              value="66.2%"
              trendText="Excellent"
              trendDirection="up"
              icon={<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />}
          />
        </div>

        <div style={customStyles.analyticsRow}>
          <div style={{ ...customStyles.card, ...customStyles.glassPanel }}>
            <div style={customStyles.sectionTitle}>
              Cash Flow Trend
              <select style={{ background: 'transparent', border: 'none', color: 'rgba(255,255,255,0.55)', outline: 'none', fontSize: '13px' }}>
                <option>Last 6 Months</option>
              </select>
            </div>
            <div style={customStyles.chartContainer}>
              <div style={{ ...customStyles.chartGridLine, bottom: '25%' }} />
              <div style={{ ...customStyles.chartGridLine, bottom: '50%' }} />
              <div style={{ ...customStyles.chartGridLine, bottom: '75%' }} />
              <div style={{ ...customStyles.chartGridLine, bottom: '100%' }} />
              <div style={customStyles.yAxis}>
                <span>20k</span>
                <span>15k</span>
                <span>10k</span>
                <span>5k</span>
                <span>0</span>
              </div>
              <svg
                  style={customStyles.svgLineChart}
                  preserveAspectRatio="none"
                  viewBox="0 0 100 100"
              >
                <defs>
                  <linearGradient id="fadeGradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                  </linearGradient>
                </defs>
                <path
                    d="M0,80 L20,60 L40,70 L60,30 L80,45 L100,20 L100,100 L0,100 Z"
                    fill="url(#fadeGradient)"
                />
                <path
                    d="M0,80 L20,60 L40,70 L60,30 L80,45 L100,20"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    style={{ filter: 'drop-shadow(0 4px 8px rgba(255, 255, 255, 0.15))' }}
                />
              </svg>
              <div style={customStyles.xAxis}>
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
              </div>
            </div>
          </div>

          <div style={{ ...customStyles.card, ...customStyles.glassPanel }}>
            <div style={customStyles.sectionTitle}>
              Spending
              <span style={customStyles.actionLink}>Details</span>
            </div>
            <div style={customStyles.donutContainer}>
              <div style={customStyles.donut}>
                <div style={customStyles.donutInner} />
                <div style={customStyles.donutCenterText}>
                  <div style={customStyles.donutTotal}>$4.8k</div>
                  <div style={customStyles.donutLabel}>Total</div>
                </div>
              </div>
              <div style={customStyles.donutLegend}>
                <div style={customStyles.legendItem}>
                  <div style={{ ...customStyles.dot, background: '#FFFFFF' }} />
                  Housing
                </div>
                <div style={customStyles.legendItem}>
                  <div style={{ ...customStyles.dot, background: 'rgba(255,255,255,0.4)' }} />
                  Food
                </div>
                <div style={customStyles.legendItem}>
                  <div style={{ ...customStyles.dot, background: 'rgba(255,255,255,0.15)' }} />
                  Transport
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={customStyles.bottomRow}>
          <div style={{ ...customStyles.card, ...customStyles.glassPanel, paddingBottom: '8px' }}>
            <div style={customStyles.sectionTitle}>
              Recent Transactions
              <span style={customStyles.actionLink}>View All</span>
            </div>
            <div style={customStyles.transactionList}>
              <TransactionItem
                  icon={<><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></>}
                  title="Oakwood Apartments"
                  date="Today, 09:41 AM"
                  amount="-$2,400.00"
                  category="Housing"
              />
              <TransactionItem
                  icon={<><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></>}
                  title="Whole Foods Market"
                  date="Yesterday, 18:20 PM"
                  amount="-$142.50"
                  category="Groceries"
              />
              <TransactionItem
                  icon={<><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></>}
                  title="Tech Corp Inc."
                  date="Oct 24, 2023"
                  amount="+$7,100.00"
                  category="Salary"
                  iconStyle={{ background: 'rgba(50, 215, 75, 0.15)', borderColor: 'rgba(50, 215, 75, 0.3)' }}
              />
              <TransactionItem
                  icon={<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />}
                  title="Verizon Wireless"
                  date="Oct 22, 2023"
                  amount="-$85.00"
                  category="Utilities"
              />
            </div>
          </div>

          <div style={{ ...customStyles.card, ...customStyles.glassPanel }}>
            <div style={customStyles.sectionTitle}>
              Monthly Budgets
              <span style={customStyles.actionLink}>Edit</span>
            </div>
            <div style={customStyles.budgetList}>
              <BudgetItem title="Food & Dining" spent={650} total={800} fillType="warning" />
              <BudgetItem title="Transportation" spent={120} total={300} fillType="normal" />
              <BudgetItem title="Entertainment" spent={180} total={200} fillType="danger" />
              <BudgetItem title="Shopping" spent={45} total={150} fillType="normal" />
            </div>
          </div>
        </div>
      </div>
  );
};

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

const PlaceholderPage = ({ title }) => (
    <div style={customStyles.mainContent}>
      <header style={customStyles.header}>
        <h1 style={customStyles.pageTitle}>{title}</h1>
        <div style={customStyles.userProfile}>
          <div style={customStyles.avatar} />
          <span style={customStyles.userName}>Alex M.</span>
        </div>
      </header>
      <div style={{ ...customStyles.card, ...customStyles.glassPanel, alignItems: 'center', justifyContent: 'center', height: '300px' }}>
        <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '16px' }}>{title} content coming soon...</p>
      </div>
    </div>
);

const App = () => {
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
        return <PlaceholderPage title="Transactions" />;
      case 'analytics':
        return <PlaceholderPage title="Analytics" />;
      case 'budgets':
        return <PlaceholderPage title="Budgets" />;
      case 'forecasting':
        return <PlaceholderPage title="Forecasting" />;
      case 'settings':
        return <PlaceholderPage title="Settings" />;
      default:
        return <Dashboard activeNav={activeNav} setActiveNav={setActiveNav} />;
    }
  };

  return (
      <Router basename="/">
        <div style={{ ...customStyles.body, ...customStyles.root }}>
          <div style={customStyles.appContainer}>
            <Sidebar activeNav={activeNav} setActiveNav={setActiveNav} />
            <div className="main-scroll" style={customStyles.mainContent}>
              {renderContent()}
            </div>
          </div>
        </div>
      </Router>
  );
};

export default App;