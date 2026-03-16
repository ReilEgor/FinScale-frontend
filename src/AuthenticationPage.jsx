import {doLogin} from './keycloak';

const AuthenticationPage = () => {
    return (
        doLogin()
    );
};

export default AuthenticationPage;