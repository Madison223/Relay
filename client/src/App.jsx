import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import ChatPage from "./pages/ChatPage";
import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";
import SignUp from "./pages/SignupPage";



function App() {

  const [serverMessage, setServerMessage] = useState("");

  useEffect(() => {
     fetch("http://localhost:3000/").then((res) => res.text()).then((text) => {
     setServerMessage(text);
  });
  }, []);

 

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<LandingPage serverMessage={serverMessage}/>} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
