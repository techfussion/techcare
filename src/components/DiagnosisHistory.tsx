import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import Cdata from "../data/data.js";

// interface DiagnosisHistoryProps {
//   patient: any;
// }

const DiagnosisHistory: React.FC<{}> = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    setData(Cdata[0]);
  }, []);

  if (!data) return <div>Loading...</div>;

  const chartData = {
    labels: data.diagnosis_history.map((item: any) => item.month),
    datasets: [
      {
        label: "Systolic",
        data: data.diagnosis_history.map(
          (item: any) => item.blood_pressure.systolic.value,
        ),
        borderColor: "#ff6384",
        backgroundColor: "#ff6384",
        fill: false,
      },
      {
        label: "Diastolic",
        data: data.diagnosis_history.map(
          (item: any) => item.blood_pressure.diastolic.value,
        ),
        borderColor: "#36a2eb",
        backgroundColor: "#36a2eb",
        fill: false,
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md">
      <h2 className="text-lg font-bold mb-4">Diagnosis History</h2>
      <div className="mb-4">
        <Line data={chartData} />
      </div>
      <div className="flex justify-between">
        <div className="bg-blue-100 p-4 rounded-lg text-center">
          <p className="text-2xl font-bold">
            {data.diagnosis_history[0].respiratory_rate.value} bpm
          </p>
          <p className="text-sm">Respiratory Rate</p>
          <p className="text-sm">
            {data.diagnosis_history[0].respiratory_rate.levels}
          </p>
        </div>
        <div className="bg-pink-100 p-4 rounded-lg text-center">
          <p className="text-2xl font-bold">
            {data.diagnosis_history[0].temperature.value}°F
          </p>
          <p className="text-sm">Temperature</p>
          <p className="text-sm">
            {data.diagnosis_history[0].temperature.levels}
          </p>
        </div>
        <div className="bg-red-100 p-4 rounded-lg text-center">
          <p className="text-2xl font-bold">
            {data.diagnosis_history[0].heart_rate.value} bpm
          </p>
          <p className="text-sm">Heart Rate</p>
          <p className="text-sm">
            {data.diagnosis_history[0].heart_rate.levels}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DiagnosisHistory;
