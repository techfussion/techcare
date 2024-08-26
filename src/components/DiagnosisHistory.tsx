import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import HeartBPM from "../assets/HeartBPM.svg";
import RSP from "../assets/respiratory rate.svg";
import TMP from "../assets/temperature.svg";
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import {
  ArrowDropDownOutlined,
  ArrowDropUpOutlined,
} from "@mui/icons-material";

interface tansData {
  data: any;
  isLoading: boolean;
  error: any;
}

const DiagnosisHistory: React.FC<tansData> = ({ data, isLoading, error }) => {
  const [historyRange, setHistoryRange] = React.useState("6_months");

  const handleChange = (event: SelectChangeEvent) => {
    setHistoryRange(event.target.value);
  };

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography>Could not load data..</Typography>;
  }

  const patientData = data.find((item: any) => item.name === "Jessica Taylor");

  const chartData = {
    labels: patientData.diagnosis_history.map(
      (item: any) => `${item.month.slice(0, 3)}. ${item.year}`,
    ),
    datasets: [
      {
        label: "Systolic",
        data: patientData.diagnosis_history.map(
          (item: any) => item.blood_pressure.systolic.value,
        ),
        borderColor: "#C26EB4",
        backgroundColor: "#C26EB4",
        fill: false,
      },
      {
        label: "Diastolic",
        data: patientData.diagnosis_history.map(
          (item: any) => item.blood_pressure.diastolic.value,
        ),
        borderColor: "#7E6CAB",
        backgroundColor: "#7E6CAB",
        fill: false,
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md">
      <h2 className="text-base font-bold mb-4">Diagnosis History</h2>
      <div className="mb-4 bg-gray-100 rounded-2xl p-5">
        <div style={{ width: "70%" }}>
          <div className="flex justify-between">
            <p className="text-sm font-bold">Blood Pressure</p>
            <FormControl
              variant="standard"
              sx={{ m: 1, minWidth: 120 }}
              size="small"
            >
              <Select value={historyRange} onChange={handleChange}>
                <MenuItem value="1_month">Last 1 month</MenuItem>
                <MenuItem value="3_months">Last 3 months</MenuItem>
                <MenuItem value="6_months">Last 6 months</MenuItem>
                <MenuItem value="1_year">Last 1 year</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="flex gap-2">
            <Line data={chartData} />
            <div>
              <div>
                <p className="font-semibold">Systolic</p>
                <p className="font-bold text-lg my-1">
                  {
                    patientData.diagnosis_history[0].blood_pressure.systolic
                      .value
                  }
                </p>
                <p className="whitespace-nowrap">
                  <ArrowDropUpOutlined />
                  {
                    patientData.diagnosis_history[0].blood_pressure.systolic
                      .levels
                  }
                </p>
              </div>
              <hr className="my-3" />
              <div>
                <p className="font-semibold">Diastolic</p>
                <p className="font-bold text-lg my-1">
                  {
                    patientData.diagnosis_history[0].blood_pressure.diastolic
                      .value
                  }
                </p>
                <p className="whitespace-nowrap">
                  <ArrowDropDownOutlined />
                  {
                    patientData.diagnosis_history[0].blood_pressure.diastolic
                      .levels
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-4">
        <div className="bg-blue-100 p-4 rounded-2xl w-60 h-60">
          <img src={RSP} alt="BPM" className="mb-5 w-16 h-16" />
          <p className="text-xs font-semibold">Respiratory Rate</p>
          <p className="text-2xl font-bold pt-2 pb-3">
            {patientData.diagnosis_history[0].respiratory_rate.value} bpm
          </p>
          <p className="text-xs">
            {patientData.diagnosis_history[0].respiratory_rate.levels}
          </p>
        </div>
        <div className="bg-pink-100 p-4 rounded-2xl w-60 h-60">
          <img src={TMP} alt="BPM" className="mb-5 w-16 h-16" />
          <p className="text-xs font-semibold">Temperature</p>
          <p className="text-2xl font-bold pt-2 pb-3">
            {patientData.diagnosis_history[0].temperature.value}°F
          </p>
          <p className="text-xs">
            {patientData.diagnosis_history[0].temperature.levels}
          </p>
        </div>
        <div className="bg-red-100 p-4 rounded-2xl w-60 h-60">
          <img src={HeartBPM} alt="BPM" className="mb-5 w-16 h-16" />
          <p className="text-xs font-semibold">Heart Rate</p>
          <p className="text-2xl font-bold pt-2 pb-3">
            {patientData.diagnosis_history[0].heart_rate.value} bpm
          </p>
          <p className="text-xs mt-auto">
            {patientData.diagnosis_history[0].heart_rate.levels}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DiagnosisHistory;
