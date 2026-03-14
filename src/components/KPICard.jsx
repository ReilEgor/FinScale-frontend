import React from "react";
import customStyles from "../styles.jsx";

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



export default KPICard