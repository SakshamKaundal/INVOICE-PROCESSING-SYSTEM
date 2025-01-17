import {Table , TableHead , TableBody , TableCell, TableRow, Button} from '@mui/material';

const Invoices = ({invoices, removeInvoice}) => {


    return (
       <Table>
            <TableHead>
                <TableRow>
                    <TableCell>
                        Vendor
                        </TableCell>
                        <TableCell>Product</TableCell>
                        <TableCell>Amount</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Action</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    invoices.map(invoices => ( 
                        <TableRow>
                            <TableCell>{invoices.vendor}</TableCell>
                            <TableCell>{invoices.product}</TableCell>
                            <TableCell>{invoices.amount}</TableCell>
                            <TableCell>{invoices.date}</TableCell>
                            <TableCell>{invoices.action}</TableCell>
                            <TableCell>
                                
                                <Button variant='contained' 
                                color='success'
                                onClick={()=>removeInvoice(invoices.id)}>Mark Done</Button>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
       </Table>
    )
}

export default Invoices;