import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { fetchPatients } from "../mocks/mockPatients";

interface Patient {
  picture: string;
  gender: string;
  age: number;
  name: string;
}

const Patients: React.FC<{}> = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;

    const getPatients = async () => {
      const data = await fetchPatients();
      if (isMounted) {
        setPatients(data);
        setLoading(false);
      }
    };

    getPatients();

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <aside className="bg-white w-full py-5 px-5 rounded-2xl overflow-y-hidden">
      <Typography variant="h6" className="pb-10">Patients</Typography>
      <ul>
        {patients.map((patient, index) => (
          <li key={index} className="flex items-center space-x-4 mb-8">
            <img src={patient.picture} alt={patient.name} className="w-14 h-14 rounded-full" />
            <div>
              <Typography variant="body1">{patient.name}</Typography>
              <Typography variant="body2">{patient.gender}, {patient.age}</Typography>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Patients;