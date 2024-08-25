import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { FileDownloadOutlined } from "@mui/icons-material";
import { Typography } from "@mui/material";

interface tansData {
  data: any;
  isLoading: boolean;
  error: any;
}

const LabResults: React.FC<tansData> = ({ data, isLoading, error }) => {
  const [activeLabResult] = useState<string>("CT Scans");
  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography>Could not load data..</Typography>;
  }

  const patientData = data.find((item: any) => item.name === "Jessica Taylor");

  return (
    <div className="rounded-2xl p-5 bg-white mt-5">
      <List
        sx={{ width: "100%", bgcolor: "background.paper" }}
        subheader={<p className="text-base font-bold pb-5">Lab Results</p>}
      >
        {patientData.lab_results.map((item: string, index: number) => (
          <ListItem
            key={index}
            style={
              activeLabResult === item
                ? { backgroundColor: "#F6F7F8", borderRadius: "5px" }
                : {}
            }
          >
            <ListItemText primary={item} />
            <ListItemIcon>
              <FileDownloadOutlined />
            </ListItemIcon>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default LabResults;
