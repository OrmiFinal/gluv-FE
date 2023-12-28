import axios from "axios";
import { Request } from "./api";
const baseURL = import.meta.env.VITE_APP_API_KEY;


export const FetchNoticeData = async (page) => {
    let params = {}
    params.page = page
    return await Request('get', '/posts/notices/', {}, params, {})
};
export const FetchPost = async (endPoint, params) => {

    if(endPoint === '/posts/notices/'){
        return await Request('get', endPoint, {}, params, {})   
    }



    if (params.category && params.category.slice(-1) === '/') {
        params.category = params.category.slice(0, -1);
    }

    if(params.category === 'qna'){
        return await Request('get', '/posts/', {}, params, {})    
    }else if(params.category === 'comm'){
        return await Request('get', '/posts/', {}, params, {})   
    }else if(params.category === 'creation'){
        return await Request('get', '/posts/', {}, params, {})   
    }
    return await Request('get', '/posts/', {}, params, {})
};


export const FetchCreatePost = async ({ title, content, category }) => {
    try {
        const user = JSON.parse(localStorage.getItem("user"));
        const accessToken = user?.access_token || "";
        if (!accessToken) {
            console.error("Access token not available");
            return null;
        }
   

        const res = await axios.post(`${baseURL}/posts/`, {
            title: title,
            content: content,
            category: category
        }, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });

  
     
        return res.data;
    } catch (error) {
        console.error("Fetching Create failed:", error.message);
        return null;
    }
};



export const FetchAllContext = async ({ search, category,subcategory ,order_by, order, page=1}) => {
    return null;
};



export const FetchPostData = async ({id}) => {
    try {
        const user = JSON.parse(localStorage.getItem("user"));
        const accessToken = user?.access_token || "";
        if (!accessToken) {
            console.error("Access token not available");
            return null;
        }
   
        const res = await axios.get(`${baseURL}/posts/${id}/`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
     

        // rest of the code...
        return res.data.data;
    } catch (error) {
        console.error("Fetching notice failed:", error.message);
        return null;
    }
};




export const FetchDelete = async ({id}) => {
    try {
        const user = JSON.parse(localStorage.getItem("user"));
        const accessToken = user?.access_token || "";
        if (!accessToken) {
            console.error("Access token not available");
            return null;
        }
   
        const res = await axios.delete(`${baseURL}/posts/${id}/`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
     

        // rest of the code...
        return res.data.data;
    } catch (error) {
        console.error("Fetching notice failed:", error.message);
        return null;
    }
};
