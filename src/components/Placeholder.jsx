import {useEffect, useState} from "react";
import App from "../App.jsx";
import customStyles from '../styles.jsx';

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



export default PlaceholderPage;