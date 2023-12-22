import axios from "axios";

export const FetchAllCommentsData = async ({id}) => {
    try {
        const user = JSON.parse(localStorage.getItem("user"));
        const accessToken = user?.access_token || "";
        if (!accessToken) {
            console.error("Access token not available");
            return null;
        }

        const res = await axios.get(`http://localhost:8000/comments/${id}/:`, {
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



export const FetchCreateComments = async ({ post_id, recurit_id, page ,content,to_user}) => {
    try {
        const user = JSON.parse(localStorage.getItem("user"));
        const accessToken = user?.access_token || "";
        if (!accessToken) {
            console.error("Access token not available");
            return null;
        }
   

        const res = await axios.post("http://localhost:8000/comments/", {
            "post_id":{post_id},
            "recurit_id":{recurit_id},
            "page":{page},
            "content":{content},
            "to_user": {to_user}
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

