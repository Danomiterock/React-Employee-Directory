import React from "react";
import "../styles/Card.css";

function employeeCard({image, name, phone, email, dob}){
  return (
    <div className="card">
      <div className="img container">
        <img
          alt={name}
          src={image}
          />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name: {name}</strong>
          </li>
          <li>
            <strong>Phone: {phone}</strong>
          </li>
          <li>
            <strong>Email: {email}</strong>
          </li>
          <li>
            <strong>DOB: {dob}</strong>
          </li>
        </ul>
      </div>
    </div>
  ) 
}

export default employeeCard()
