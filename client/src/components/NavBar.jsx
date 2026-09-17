import "./NavBar.css";

function NavBar() {
    return (
        <div className="nav-bar">
            
            <a href="/">Home</a>
            <a href="/signup">Sign Up</a>
            <a href="/login">Log In</a>
            <a href="/chat">Chatrooms</a>
        </div>
    );
}

export default NavBar;