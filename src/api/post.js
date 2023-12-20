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



export const FetchAllContext = async ({ search, category,subcategory ,order_by, order, page, author }) => {
    try {
        const user = JSON.parse(localStorage.getItem("user"));
        const accessToken = user?.access_token || "";
        console.log("category")
        console.log("category")
        console.log("category")
        console.log("category")
        console.log(category)
        console.log(subcategory)
        if (!accessToken) {
            console.error("Access token not available");
            return null;
        }
  
        let URLvalue;

        if (category === "공지상황") {
            URLvalue = "creation";
        } else if(category === "질문게시판"){
            URLvalue = "qna";
        } 
        else if (category === "자유게시판") {
            if (subcategory === "소설") {
                URLvalue = "comm-novel";
            } else if (subcategory === "시") {
                URLvalue = "comm-poem";
            } else if (subcategory === "수필") {
                URLvalue = "comm-essay";
            } else {
                URLvalue = "comm";
            }
        }
        else if (category === "창작게시판") {
            if (subcategory === "소설") {
                URLvalue = "creation-novel";
            } else if (subcategory === "시") {
                URLvalue = "creation-poem";
            } else if (subcategory === "수필") {
                URLvalue = "creation-essay";
            } else {
                URLvalue = "creation";
            }
        }
        console.log("URLvalue")
        console.log("URLvalue")
        console.log(URLvalue)
        console.log(URLvalue)
        console.log(URLvalue)
        console.log(URLvalue)
        const res = await axios.get(`http://localhost:8000/posts/?category=${URLvalue}`, {
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
