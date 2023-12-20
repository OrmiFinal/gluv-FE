import axios from "axios";

export const FetchNoticeData = async () => {
    try {
        const user = JSON.parse(localStorage.getItem("user"));
        const accessToken = user?.access_token || "";
        if (!accessToken) {
            console.error("Access token not available");
            return null;
        }

        const res = await axios.get("http://localhost:8000/posts/notices/", {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

       

        // rest of the code...
        return res.data;
    } catch (error) {
        console.error("Fetching notice failed:", error.message);
        return null;
    }
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


export const FetchAllContext = async ({ search, category, order_by, order, page, author }) => {
    try {
        const user = JSON.parse(localStorage.getItem("user"));
        const accessToken = user?.access_token || "";
        if (!accessToken) {
            console.error("Access token not available");
            return null;
        }

        const res = await axios.get("http://localhost:8000/posts/", {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            params: {
                search: search,
                category: category,
                order_by: order_by,
                order: order,
                page: page,
                author: author
            }
        });

        // rest of the code...
        return res.data;
    } catch (error) {
        console.error("Fetching notice failed:", error.message);
        return null;
    }
};

