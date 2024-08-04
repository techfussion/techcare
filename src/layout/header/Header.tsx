import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">Tech.Care</div>
      <nav>
        <ul>
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
    </header>
  );
};

export default Header;
