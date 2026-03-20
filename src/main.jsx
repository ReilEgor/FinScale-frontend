import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { initKeycloak } from './keycloak'

const root = createRoot(document.getElementById('root'));

initKeycloak(() => {
    root.render(
        <StrictMode>
            <App />
        </StrictMode>
    );
});