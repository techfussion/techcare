import React from "react";
import DiagnosisHistory from "../../components/DiagnosisHistory";
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Header from "../../layout/header/Header";
import Patients from "../../components/Patients";

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={4}>
            <Grid xs={0} md={3}>
              <Patients />
            </Grid>
            <Grid xs={12} md={6}>
              <DiagnosisHistory />
            </Grid>
            <Grid xs={0} md={3}>
              <p>xs=6 md=4</p>
            </Grid>
          </Grid>
        </Box>  
      </main>
    </>
  );
};

export default Dashboard;
