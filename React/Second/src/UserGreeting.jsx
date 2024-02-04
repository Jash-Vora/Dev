import PropTypes from 'prop-types';

function UserGreeting(props){
    const welcomePage = <h2 className='welcome-message'>Welcome {props.username}</h2>
    const LoginPage = <h2 className='login-prompt'>Please Log In To Continue</h2>

    return (
        props.isLoggedIn ? welcomePage : LoginPage
    );
}

UserGreeting.propTypes = {
    username: PropTypes.string,
    isLoggedIn: PropTypes.bool,
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username:  "Guest",
}

export default UserGreeting;