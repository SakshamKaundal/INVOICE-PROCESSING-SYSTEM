// Home.js
import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Container, Paper } from "@mui/material";
import Header from "../components/Header";
import AddInvoice from "../components/AddInvoices";
import Invoices from "../components/Invoices";
import { getAllInvoice, deleteInvoice } from "../services/api";
import "../components/Invoice.css";

const Home = () => {
  const [addInvoice, setAddInvoice] = useState(false);
  const [invoices, setInvoices] = useState([]);
  const [uinvoice, setUinvoice] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const username = localStorage.getItem("username");
      const response = await getAllInvoice(username);
      setInvoices(response.data);
    };
    getData();
  }, [uinvoice]);

  const toggleInvoice = () => {
    setAddInvoice(true);
  };

  const removeInvoice = async (id) => {
    await deleteInvoice(id);
    const updatedInvoice = invoices.filter((inv) => inv.id !== id);
    setInvoices(updatedInvoice);
  };

  return (
    <div className="home">
      <Header />
      <Container  style={{ marginTop: 80 }}>
        <Paper elevation={3}style={{
      padding: 32,
      borderRadius: 16,
      background: "linear-gradient(to right,rgb(153, 96, 214),rgb(200, 211, 231))",
      maxWidth: "900px", // NEW: make it wider
      margin: "0 auto",   // NEW: center it
    }}>
          <Typography variant="h5" style={{ fontWeight: "bold", color: "white", marginBottom: 16 }}>
            Pending Invoices
          </Typography>

          {!addInvoice && (
            <Button
              variant="contained"
              onClick={toggleInvoice}
              style={{ marginBottom: 24, backgroundColor: "#00bfff"  }}
            >
              ADD INVOICE
            </Button>
          )}

          {addInvoice && <AddInvoice setAddInvoice={setAddInvoice} uinvoice={uinvoice} setUinvoice={setUinvoice} />}

          <Box mt={4}>
            <Invoices invoices={invoices} removeInvoice={removeInvoice} />
          </Box>
        </Paper>
      </Container>
    </div>
  );
};

export default Home;