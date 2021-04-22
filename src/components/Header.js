import React from "react";
import "../styles/Header.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads

function Header() {
    return (
      <header className="header">
        <h1>Image</h1>
        <hi>Name</hi>
        <hi>Phone</hi>
        <hi>Email</hi>
        <hi>DOB</hi>
      </header>
    );
  }
  
  export default Header;
  