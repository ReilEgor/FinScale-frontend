import customStyles from "../styles.jsx";
import React, {useState} from "react";

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


export default TransactionItem;