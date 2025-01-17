import {Box, Typography, TextField, Button, styled} from '@mui/material'
import React, {useState} from "react";
import { saveInvoice } from '../services/api';

const Components = styled(Box)({

    marginTop : 20,
    '& > p ' : {
        fontSize: 26,
        marginBottom: 10
    },
    '& > div > div' : {
        marginRight: 20,
        minWidth: 200
    }


})

const defaultObj = {
    vendor:'',
    product:'',
    amount:0,
    date:'',
    action:'pending'
}

const AddInvoice = ({setAddInvoice,uinvoice,setUinvoice}) =>{

    const [invoice, setInvoice] = useState(defaultObj)

    const onValueChange = (e) =>{
        setInvoice({ ...invoice, [e.target.name]:e.target.value});
    }

    const addNewInvoice = async() =>{
            setUinvoice(uinvoice+1);
            await saveInvoice({ ...invoice,amount:Number(invoice['amount'])});

            setAddInvoice(false);
    }


    return(

        <Components>
            <Typography>Add Invoice</Typography>
            <Box>
                <TextField variant='standard' placeholder='Enter verdor name'
                    onChange={(e) => onValueChange(e)}
                    name='vendor'
                    autoComplete='off'
                />

                <TextField variant='standard' placeholder='Enter product name'
                    onChange={(e) => onValueChange(e)}
                    name='product'
                    autoComplete='off'
                />

                <TextField variant='standard' placeholder='Enter amount (in Rs)' type='number'
                    onChange={(e) => onValueChange(e)}
                    name='amount'
                    autoComplete='off'
                />

                <TextField variant='standard' placeholder='Enter Date' type='date'
                    onChange={(e) => onValueChange(e)}
                    name='date'
                    autoComplete='off'
                />
            
            <Button variant="contained" onClick={addNewInvoice}>
                    Add Invoice
                </Button>

            </Box>
        </Components>
    )
}

export default AddInvoice;