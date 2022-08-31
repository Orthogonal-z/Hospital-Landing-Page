import React, { useState } from "react";
import logo from "../assets/logo.png";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import useMediaQuery from "@mui/material/useMediaQuery";

import "./Navbar.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { AiOutlineSearch } from "react-icons/ai";

import { HiOutlineMenu, HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <div className="navbar">
      <div className="nav-container">
        <div className="nav-top-menu">
          <div className="logo-box">
            <img src={logo} alt="" className="logo" />
          </div>
          <div className="nav-menu">
            <h3 className="nav-text">Home</h3>
            <h3 className="nav-text">About Us</h3>
            <h3 className="nav-text">Treatment</h3>
            <h3 className="nav-text">Infertility Factor</h3>
            <div className="accord" onClick={toggleClass}>
              {isActive ? (
                <HiOutlineMenuAlt3 style={{ fontSize: 35 }} />
              ) : (
                <HiOutlineMenu style={{ fontSize: 35 }} />
              )}
            </div>
            <div className="menu-buttons">
              <Button
                // variant="outlined"

                style={{
                  padding: "8px 20px",

                  textTransform: "none",

                  marginRight: 10,
                  borderRadius: 50,
                  background: "red",
                  color: "white",
                }}
                size="large"
              >
                Schedule Appointment
              </Button>
              <div className="btn-login">
                <Button
                  variant="outlined"
                  style={{
                    padding: "8px 25px",
                    textTransform: "none",

                    color: "red",
                    borderRadius: 50,
                    background: "white",
                  }}
                  size="large"
                >
                  Login
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-bottom-menu">
          <h3 className="h3-nav">Get Started</h3>
          <h3 className="h3-nav">Treatment</h3>
          <h3 className="h3-nav">Resources</h3>
          <h3 className="h3-nav">Patient Hub</h3>
          <AiOutlineSearch
            style={{
              fontSize: 25,
              marginLeft: 25,
            }}
          />
        </div>
        <div className={isActive ? "sidebar" : "hide"}>
          <div className="sidebar-container">
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
