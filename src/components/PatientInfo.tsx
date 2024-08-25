import React from "react";
import { Button, Typography } from "@mui/material";
import {
  CalendarTodayOutlined,
  Female,
  GppGoodOutlined,
  LocalPhoneOutlined,
} from "@mui/icons-material";

interface tansData {
  data: any;
  isLoading: boolean;
  error: any;
}

const PatientInfo: React.FC<tansData> = ({ data, isLoading, error }) => {
  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography>Could not load data..</Typography>;
  }

  const patientData = data.find((item: any) => item.name === "Jessica Taylor");

  return (
    <section className="bg-white p-5 rounded-2xl shadow-md">
      <div className="flex items-center flex-col">
        <img
          className="w-52 h-52 rounded-full"
          src={
            patientData.profile_picture ||
            "https://randomuser.me/api/portraits/women/3.jpg"
          }
          alt="profile"
        />
        <p className="py-5 text-base font-bold">{patientData.name || ""}</p>
      </div>
      <ul>
        <li className="flex justify-between mb-8">
          <div className="flex items-center space-x-4">
            <CalendarTodayOutlined />
            <div>
              <p className="text-sm">Date of Birth</p>
              <p className="font-semibold text-xs">
                {patientData.date_of_birth}
              </p>
            </div>
          </div>
        </li>
        <li className="flex justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Female />
            <div>
              <p className="text-sm">Gender</p>
              <p className="font-semibold text-xs">{patientData.gender}</p>
            </div>
          </div>
        </li>
        <li className="flex justify-between mb-8">
          <div className="flex items-center space-x-4">
            <LocalPhoneOutlined />
            <div>
              <p className="text-sm">Contact Info.</p>
              <p className="font-semibold text-xs">
                {patientData.phone_number}
              </p>
            </div>
          </div>
        </li>
        <li className="flex justify-between mb-8">
          <div className="flex items-center space-x-4">
            <LocalPhoneOutlined />
            <div>
              <p className="text-sm">Emergency Contacts</p>
              <p className="font-semibold text-xs">
                {patientData.emergency_contact}
              </p>
            </div>
          </div>
        </li>
        <li className="flex justify-between mb-8">
          <div className="flex items-center space-x-4">
            <GppGoodOutlined />
            <div>
              <p className="text-sm">Insurance Provider</p>
              <p className="font-semibold text-xs">
                {patientData.insurance_type}
              </p>
            </div>
          </div>
        </li>
      </ul>
      <div className="flex justify-center">
        <Button
          variant="contained"
          style={{
            backgroundColor: "#01F0D0",
            borderRadius: "25px",
            color: "#000",
            textTransform: "capitalize",
          }}
        >
          Show All Information
        </Button>
      </div>
    </section>
  );
};

export default PatientInfo;
