import axios from "axios";

export const Request = async (method, endPoint, headers, params, data) => {
    const baseURL = import.meta.env.VITE_APP_API_KEY;

    try {
        const user = JSON.parse(localStorage.getItem("user"));
        const accessToken = user?.access_token || "";
        if (accessToken) {
            headers.Authorization = `Bearer ${accessToken}`;
        }
        
        const instance = axios.create({
            baseURL,
            headers: {
                ...headers,
            },
        });

        let response;
        switch (method.toLowerCase()) {
            case "get":
                response = await instance.get(endPoint, { params });
                break;
            case "post":
                response = await instance.post(endPoint, data, { params });
                break;
            case "patch":
                response = await instance.patch(endPoint, data, { params });
                break;
            case "delete":
                response = await instance.delete(endPoint, { params });
                break;
            default:
                throw new Error(`Unsupported HTTP method: ${method}`);
        }
        return response.data;
    } catch (error) {
        console.error("Request failed : ", error.message);
        return null;
    }
};