import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Home from './pages/Home'

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <button onClick={() => logout({ returnTo: window.location.origin })} style={{
        backgroundColor: "var(--primary-color)",
        margin: "0 10px 0 0",

        border: "none",
        cursor: "pointer",
        padding: "10px 35px",
        borderRadius: "10px",
        fontSize: "16px",
        textAlign: "center",
        color: "#ffffff",
      }}>
        Log Out
      </button>
      // <Home />
    )
  )
}

export default LogoutButton