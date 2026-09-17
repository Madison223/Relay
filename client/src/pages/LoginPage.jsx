import Footer from "../components/Footer";
import Login from "../components/Login";
import NavBar from "../components/NavBar";
import "./LoginPage.css";

function LoginPage() {
  return (
    <div className="login-page">
      <NavBar />
      <Login 
      title="Login"
      btnText="Login"
      message="Don't have an account?"
      link="/signup"
      linkMessage="Register"
      googleMessage="Login with Google"
      forgot={true}
      />
      <Footer />
    </div>
  );
}

export default LoginPage;
