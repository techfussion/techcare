import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/TestLogo.svg";
import {
  CalendarTodayOutlined,
  ChatBubbleOutlineOutlined,
  CreditCardOutlined,
  HomeOutlined,
  MoreVertOutlined,
  PeopleAltOutlined,
  SettingsOutlined,
} from "@mui/icons-material";
import Doc from "../../assets/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc@2x.png";

const Header: React.FC = () => {
  return (
    <header className="flex-row flex justify-between align-center bg-white py-2 px-5 mb-5 rounded-full">
      <img className="h-6 my-auto" src={Logo} alt="logo" />
      <nav className="flex items-center">
        <ul className="flex flex-row gap-4">
          <li className="flex items-center gap-1">
            <HomeOutlined fontSize="small" />
            <Link className="text-xs" to="/">
              Overview
            </Link>
          </li>
          <li
            className="flex items-center gap-1 py-2 px-3 rounded-3xl"
            style={{ backgroundColor: "#01F0D0" }}
          >
            <PeopleAltOutlined fontSize="small" />
            <Link className="text-xs" to="/patients">
              Patients
            </Link>
          </li>
          <li className="flex items-center gap-1">
            <CalendarTodayOutlined fontSize="small" />
            <Link className="text-xs" to="/schedule">
              Schedule
            </Link>
          </li>
          <li className="flex items-center gap-1">
            <ChatBubbleOutlineOutlined fontSize="small" />
            <Link className="text-xs" to="/message">
              Message
            </Link>
          </li>
          <li className="flex items-center gap-1">
            <CreditCardOutlined fontSize="small" />
            <Link className="text-xs" to="/transactions">
              Transactions
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-3">
        <div className="flex items-center space-x-4 border-r border-gray-300 pr-4">
          <img src={Doc} alt="doc" className="w-8 h-8 rounded-full" />
          <div>
            <p className="text-xs font-semibold">Dr. Jose Simmons</p>
            <p className="text-xs">General Practitional</p>
          </div>
        </div>
        <div>
          <SettingsOutlined />
          <MoreVertOutlined />
        </div>
      </div>
    </header>
  );
};

export default Header;
