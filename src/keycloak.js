import Keycloak from 'keycloak-js';
import Cookies from 'js-cookie';
import { useUserStore } from './store/useUserStore.js';
const keycloak = new Keycloak({
    url: 'http://localhost:8081',
    realm: 'fin_scale_realm',
    clientId: 'fin_scale_auth_frontend'
});
let initialized = false;

export const initKeycloak = (onAuthenticatedCallback) => {
    keycloak.init({
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
        pkceMethod: 'S256',
        redirectUri: window.location.origin,
        checkLoginIframe: false
    })
        .then(async (authenticated) => {
            initialized = true;
            if (authenticated) {
                try {
                    const response = await fetch('http://localhost/api/v1/users/sync', {
                        method: 'POST',
                        headers: {
                            'Authorization': `Bearer ${keycloak.token}`,
                            'Content-Type': 'application/json'
                        }
                    });
                    if (!response.ok) {
                        throw new Error(`Server error: ${response.status}`);
                    }
                    const data = await response.json();
                    useUserStore.getState().setUser({
                        name: data.username,
                        email: data.email
                    });
                } catch (err) {
                    console.error("FinScale backend is not yet available for synchronization", err);
                }

                setInterval(() => {
                    keycloak.updateToken(70).then((refreshed) => {
                        if (refreshed) {
                            console.log('Token updated successfully');
                        }
                    }).catch(() => {
                        console.error('Failed to update token');
                    });
                }, 60000);


            }
            onAuthenticatedCallback();


        })
        .catch(console.error);
};

export const doRegister = () => {
    if (!initialized) {
        console.warn("Keycloak not initialized yet");
        return;
    }
    keycloak.register();
};

export const doLogin = () => {
    if (!initialized) {
        console.warn("Keycloak not initialized yet");
        return;
    }
    keycloak.login();
};

export const doLogout = () => {
    useUserStore.getState().clearUser();
    keycloak.logout();
}
export const getToken = () => keycloak.token;