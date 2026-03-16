import customStyles from "../styles.jsx";
import NavItem from "./NavItem.jsx";
import {BrowserRouter as Router} from "react-router";
import KPICard from './KPICard.jsx';
import TransactionItem from './TransactionItem.jsx';
import BudgetItem from './BudgetItem.jsx';

const Dashboard = () => {
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


export default Dashboard