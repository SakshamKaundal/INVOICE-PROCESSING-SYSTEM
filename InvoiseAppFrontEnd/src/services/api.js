import axios from "axios";

const API_URL = "http://localhost:8080";


export const saveInvoice = async(payload) =>{

    try{
        return await axios.post(`${API_URL}/invoice`, payload);
    }catch (error) {
        console.error('Error:', error.message);
        // Ensure we handle cases where error.response might be undefined
        if (error.response) {
            return error.response.data; // Return error data from the server
        } else {
            return { message: 'Something went wrong, please try again later.' }; // Fallback error message
        }
    }   
}

export const getAllInvoice = async () =>{
    try{
        return await axios.get(`${API_URL}/invoice`);
    }catch (error) {
        console.error("Error fetching invoices:", error);
        return { data: [] }; // Return an empty array in case of error
    }
} 

export const deleteInvoice = async(id) =>{

    try{
        return await axios.delete(`${API_URL}/invoice/${id}`);
    }catch (error) {
        console.error('Error:', error.message);
        // Ensure we handle cases where error.response might be undefined
        if (error.response) {
            return error.response.data; // Return error data from the server
        } else {
            return { message: 'Something went wrong, please try again later.' }; // Fallback error message
        }
    }   
}