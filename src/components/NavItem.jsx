import customStyles from "../styles.jsx";
import React, {useState} from "react";

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


export default NavItem;