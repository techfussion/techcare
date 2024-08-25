import React, { useState } from "react";
import { Typography } from "@mui/material";
import MoreHorizTwoToneIcon from "@mui/icons-material/MoreHorizTwoTone";

interface tansData {
  data: any;
  isLoading: boolean;
  error: any;
}

const Patients: React.FC<tansData> = ({ data, isLoading, error }) => {
  const [activeUser] = useState<string>("Jessica Taylor");
  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography>Could not load data..</Typography>;
  }

  return (
    <aside
      className="bg-white w-full py-5 rounded-2xl overflow-y-scroll"
      style={{ maxHeight: "83vh" }}
    >
      <h2 className="pb-5 px-5 text-base font-bold">Patients</h2>
      <ul>
        {data.map((patient: any, index: number) => (
          <li
            key={index}
            className="flex justify-between px-5 py-3"
            style={
              activeUser === patient.name ? { backgroundColor: "#D8FCF7" } : {}
            }
          >
            <div className="flex items-center space-x-4">
              <img
                src={patient.profile_picture}
                alt={patient.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="text-xs font-semibold">{patient.name}</p>
                <p className="text-xs">
                  {patient.gender}, {patient.age}
                </p>
              </div>
            </div>
            <MoreHorizTwoToneIcon fontSize="small" />
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Patients;
