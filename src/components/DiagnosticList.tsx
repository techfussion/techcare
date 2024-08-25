import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

interface tansData {
  data: any;
  isLoading: boolean;
  error: any;
}

const DiagnosticList: React.FC<tansData> = ({ data, isLoading, error }) => {
  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography>Could not load data..</Typography>;
  }

  const patientData = data.find((item: any) => item.name == "Jessica Taylor");

  return (
    <section className="mt-5 bg-white p-4 rounded-2xl shadow-md">
      <h2 className="text-base mb-4 font-bold">Diagnostic List</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a simple table">
          <TableHead className="bg-gray-100">
            <TableRow>
              <TableCell className="font-bold">Problem/Diagnosis</TableCell>
              <TableCell className="font-bold" align="right">
                Description
              </TableCell>
              <TableCell className="font-bold" align="right">
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {patientData.diagnostic_list.map((item: any, index: number) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {item.name}
                </TableCell>
                <TableCell align="right">{item.description}</TableCell>
                <TableCell align="right">{item.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
};

export default DiagnosticList;
