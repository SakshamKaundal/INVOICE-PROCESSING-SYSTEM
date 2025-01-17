import { Fragment } from "react";
import Header from "../components/Header";
import {Box, Typography, Button} from '@mui/material'
import AddInvoice from "../components/AddInvoices";
import React, {useState,useEffect} from "react";
import Invoices from "../components/Invoices";
import { getAllInvoice,deleteInvoice } from "../services/api";


const Home = () =>{
    
    const [addInvoice, setAddInvoice] = useState(false);
    const [invoices, setInvoices] = useState([]);
    const [uinvoice, setUinvoice] = useState(0);

    useEffect(()=>{
        const getData = async () =>{
            const response = await getAllInvoice();
            setInvoices(response.data);
        }
        getData();
    },[uinvoice])

    const toggleInvoice = () =>{
        setAddInvoice(true);
    }

   const removeInvoice = async(id) =>{
        await deleteInvoice(id);
        const updatedInvoice = invoices.filter(invoices => invoices.id != id);
        setInvoices(updatedInvoice);
   }

    return(
        <>
            <Header />
            <Box style={{ marginTop: '64px', padding: '16px' }}>
            <Typography variant="h6">Pending Invoices</Typography>
            {!addInvoice && <Button 
                    variant="contained" 
                    style={{marginTop:15}}
                    onClick={() => toggleInvoice()}    
                    >Add INVOICE</Button>}
                {addInvoice && <AddInvoice setAddInvoice={setAddInvoice} uinvoice={uinvoice} setUinvoice={setUinvoice} />}    
            
        </Box>
        <Box>
            <Invoices  
            invoices = {invoices}
                removeInvoice={removeInvoice}
            />
        </Box>

        </>
        
    );
}

export default Home;