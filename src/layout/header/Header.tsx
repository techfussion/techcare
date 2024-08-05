import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="flex-row flex justify-between bg-white py-7 px-10 mb-10 rounded-full">
      <div className="">Tech.Care</div>
      <nav>
        <ul className="flex flex-row gap-4">
          <li>
            <Link to="/">Overview</Link>
          </li>
          <li>
            <Link to="/patients">Patients</Link>
          </li>
          <li>
            <Link to="/schedule">Schedule</Link>
          </li>
          <li>
            <Link to="/message">Message</Link>
          </li>
          <li>
            <Link to="/transactions">Transactions</Link>
          </li>
        </ul>
      </nav>
      <div> 
          <Typography>
            Dr. Jose Simmons
          </Typography>
        </div>
    </header>
  );
};

export default Header;
