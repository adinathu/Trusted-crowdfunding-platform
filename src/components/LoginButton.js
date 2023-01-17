import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
// import { useHistory } from "react";
// import { useHistory } from 'react-router-dom'

const LoginButton = () => {
  const navigate = useNavigate();
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <button
        onClick={() => loginWithRedirect()}
    
        style={{
          backgroundColor: "var(--primary-color)",
          margin: "0 10px 0 0",

          border: "none",
          cursor: "pointer",
          padding: "10px 35px",
          borderRadius: "10px",
          fontSize: "16px",
          textAlign: "center",
          color: "#ffffff",
        }}
      >
        Log In
      </button>
    )
  );
};

export default LoginButton;
