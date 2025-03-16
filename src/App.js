import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import Dashboard from "./Dashboard";

function Homepage() {
  const navigate = useNavigate();

  const handleLoginSuccess = (credentialResponse) => {
    console.log("Success!", credentialResponse);
    navigate("/dashboard"); // Redirect to Dashboard
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Research Management System</h2>
        <p>Login with your University Google account</p>
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={() => console.log("Login Failed")}
        />
      </div>
    </div>
  );
}

function App() {
  return (
    <GoogleOAuthProvider clientId={"310261146001-ehbb2kdqdkf5aao423l9chkrm0h92b31.apps.googleusercontent.com"}>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f4f4f4",
  },
  card: {
    padding: "40px",
    textAlign: "center",
    background: "white",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    borderRadius: "10px",
  },
};

export default App;
