import React from "react";
import DiagnosisHistory from "../../components/DiagnosisHistory";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Header from "../../layout/header/Header";
import Patients from "../../components/Patients";
import PatientInfo from "../../components/PatientInfo";
import DiagnosticList from "../../components/DiagnosticList";
import LabResults from "../../components/LabResults";
import { useFetchAPIData } from "../../services/userService";

const Dashboard: React.FC = () => {
  const { data, error, isLoading } = useFetchAPIData();

  return (
    <>
      <div className="content-section hidden md:block">
        <Header />
        <main>
          {!isLoading ? (
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                  <Patients data={data} error={error} isLoading={isLoading} />
                </Grid>

                <Grid
                  item
                  xs={12}
                  md={6}
                  className="overflow-y-scroll"
                  style={{ maxHeight: "87vh" }}
                >
                  <DiagnosisHistory
                    data={data}
                    error={error}
                    isLoading={isLoading}
                  />
                  <DiagnosticList
                    data={data}
                    error={error}
                    isLoading={isLoading}
                  />
                </Grid>

                <Grid
                  item
                  xs={12}
                  md={3}
                  className="overflow-y-scroll"
                  style={{ maxHeight: "87vh" }}
                >
                  <PatientInfo
                    data={data}
                    error={error}
                    isLoading={isLoading}
                  />
                  <LabResults data={data} error={error} isLoading={isLoading} />
                </Grid>
              </Grid>
            </Box>
          ) : (
            <div className="flex align-center justify-center">
              <p>Loading....</p>
            </div>
          )}
        </main>
      </div>
      <div className="info-message block md:hidden text-center p-4 bg-red-100 text-red-700 border border-red-400 rounded">
        <p>
          This content is not available on devices smaller than a tablet. Please
          use a larger screen.
        </p>
      </div>
    </>
  );
};

export default Dashboard;
