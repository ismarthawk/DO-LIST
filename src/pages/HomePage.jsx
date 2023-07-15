import React, { useContext } from "react";
import { Box, Grid } from "@mui/material";
import InputTabs from "../components/InputTabs";
import TaskBox from "../components/TaskBox";
import ItmesMasnory from "../components/ItmesMasnory";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

function HomePage() {
  const { user } = useContext(AuthContext);
  if (!user) {
    return <Navigate to="/login" />;
  }
  return (
    <div
      style={{
        padding: "10px",
        marginTop: "5px",
      }}
    >
      <InputTabs />
      <div
        style={{
          marginLeft: "10px",
        }}
      >
        <ItmesMasnory />
      </div>
    </div>
  );
}

export default HomePage;
