import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import "./LandingPage.css";
import Image from "../assets/message-img.jpg";

function LandingPage({serverMessage}) {
  return (
    <div className="landing-page">
      <NavBar />
      <div className="landing-wrapper">
        <div className="content-text">
          <h1>{serverMessage}</h1>
          <h1>Welcome to <span className="relay">Relay</span>.</h1>
          <h2>Chat quickly. Connect easily. Simple real-time messaging.</h2>
          <a href="/signup">Get Started</a>
        </div>
        <img className="image" src={Image} alt="image" />
      </div>

      <Footer />
    </div>
  );
}

export default LandingPage;
