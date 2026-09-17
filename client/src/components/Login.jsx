import "./Login.css";

function Login({title, btnText, message, link, linkMessage, googleMessage, forgot}) {
    return (
        <div className="login-wrapper">
        <div className="box">
            <h1>{title}</h1>
            <input type="email" name="email" id="email" placeholder="Email"/>
            <input type="password" name="password" id="password" placeholder="Password" />
            {forgot ? <a className="link" href="">Forgot Password?</a> : ""}
            
            <button className="btn">{btnText}</button>
            <p className="signup">{message} <a className="link" href={link}>{linkMessage}</a></p>
            <button className="google">{googleMessage}</button>

            
        </div></div>
    );
}


export default Login;