import customStyles from "../styles.jsx";
import KPICard from "./KPICard.jsx";
import React from "react";

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

export default BudgetItem;
