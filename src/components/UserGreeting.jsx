function UserGreeting({ isLoggedIn, username }) {
    return (
        <h2>{isLoggedIn ? `Welcome ${username}` : 'You are not logged in'}</h2>
    );
}

export default UserGreeting;
