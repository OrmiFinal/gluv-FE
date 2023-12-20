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

        console.log("Notice Data:", res.data);

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
        console.log(accessToken);
        console.log("통신전");

        const res = await axios.post("http://localhost:8000/posts/", {
            title: title,
            content: content,
            category: category
        }, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });

        console.log("통신후");
        console.log("Create Data:", res.data);

        // rest of the code...
        return res.data;
    } catch (error) {
        console.error("Fetching Create failed:", error.message);
        return null;
    }
};
