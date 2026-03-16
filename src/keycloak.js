import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
    url: 'http://localhost:8081',
    realm: 'FinScale',
    clientId: 'finscale-frontend'
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
                //try {
                //    await fetch('http://localhost:8080/api/v1/users/sync', {
                //        method: 'POST',
                //        headers: {
                 //           'Authorization': `Bearer ${keycloak.token}`
                //        }
                //    });
                //} catch (err) {
                //    console.error("Бэкенд FinScale пока недоступен для синхронизации", err);
                //}

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

export const doLogout = () => keycloak.logout();
export const getToken = () => keycloak.token;