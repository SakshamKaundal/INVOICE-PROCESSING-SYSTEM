import axios from "axios";

const API_URL = "http://localhost:8080";

export const saveInvoice = async (payload, username) => {
    try {
        return await axios.post(`${API_URL}/invoice?username=${username}`, payload);
    } catch (error) {
        console.error("Error:", error.message);
        if (error.response) {
            return error.response.data;
        } else {
            return { message: "Something went wrong, please try again later." };
        }
    }
};

export const getAllInvoice = async (username) => {
    try {
        return await axios.get(`${API_URL}/invoice?username=${username}`);
    } catch (error) {
        console.error("Error fetching invoices:", error);
        return { data: [] };
    }
};

export const deleteInvoice = async (id) => {
    try {
        return await axios.delete(`${API_URL}/invoice/${id}`);
    } catch (error) {
        console.error("Error:", error.message);
        if (error.response) {
            return error.response.data;
        } else {
            return { message: "Something went wrong, please try again later." };
        }
    }
};