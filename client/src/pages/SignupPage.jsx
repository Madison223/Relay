import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "./SignupPage.css";
import Login from "../components/Login";

function SignUp() {
  return (
    <div className="signup-page">
      <NavBar />
      <Login
        title="Sign Up"
        btnText="Register"
        message="Already have an account?"
        link="/login"
        linkMessage="Login"
        googleMessage="Sign Up with Google"
        forgot={false}
      />
      <Footer />
    </div>
  );
}

export default SignUp;
