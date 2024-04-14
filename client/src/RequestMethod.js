import axios from "axios"
export const baseUrl = "https://aeonaxy-assessment-oovq.onrender.com/api";
// export const baseUrl = "http://localhost:5000/api";


export const requestMethod = async (url, method, data, token) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
    };
    const config = {
        method,
        url: `${baseUrl}${url}`,
        headers,
        data,
    };

    try {
        const response = await axios(config);
        return response.data;
    } catch (error) {
        throw error;
    }
}