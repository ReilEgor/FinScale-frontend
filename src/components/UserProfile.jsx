import customStyles from "../styles.jsx";
import {useUserStore} from "../store/useUserStore.js";
import {doLogin} from "../keycloak.js";


const UserProfile = ({setActiveNav}) => {

    const user = useUserStore((state) => state.user);
    const handleProfileClick = () => {
        if (user) {
            setActiveNav('settings')
        } else {
            doLogin();
        }
    };

    return(
        <div style={customStyles.userProfile}>
            <div style={customStyles.avatar}/>
            <button
                onClick={handleProfileClick}
                style={{
                    ...customStyles.userProfile,
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    display: 'flex',
                    alignItems: 'center',
                    font: 'inherit',
                    color: 'inherit'
                }}
            >
                        <span style={customStyles.userName}>
            {user?.name || "Log in"}
        </span>
            </button>
        </div>
    )
}

export default UserProfile;