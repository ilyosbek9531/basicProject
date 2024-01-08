import MainButton from "Components/MainButton/MainButton";
import React from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("username");
    navigate("/login");
    window.location.reload();
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <h1>Here is protected main route</h1>
      <div>
        <MainButton
          text="Log out"
          fullWidth
          variant="outlined"
          loading={false}
          onClick={handleLogout}
        />
      </div>
    </div>
  );
};

export default Main;
