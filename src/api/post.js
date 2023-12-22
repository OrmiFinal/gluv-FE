import axios from "axios";
import { Request } from "./api";

export const FetchNoticeData = async (page) => {
    let params = {}
    params.page = page
    return await Request('get', '/posts/notices/', {}, params, {})
};

export const FetchPost = async (endPoint, params) => {
    if(endPoint === '/posts/notices/'){
        return await Request('get', endPoint, {}, params, {})   
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
   

        const res = await axios.post("http://localhost:8000/posts/", {
            title: title,
            content: content,
            category: category
        }, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });

  
        // rest of the code...
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
   
        const res = await axios.get(`http://localhost:8000/posts/${id}/`, {
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




export const FetchDelectData = async ({id}) => {
    try {
        const user = JSON.parse(localStorage.getItem("user"));
        const accessToken = user?.access_token || "";
        if (!accessToken) {
            console.error("Access token not available");
            return null;
        }
   
        const res = await axios.delete(`http://localhost:8000/posts/${id}/`, {
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
