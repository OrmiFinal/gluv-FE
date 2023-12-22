import axios from "axios";

export const FetchAllCommentsData = async ({id,page=1}) => {
    try {
        const user = JSON.parse(localStorage.getItem("user"));
        const accessToken = user?.access_token || "";
        if (!accessToken) {
            console.error("Access token not available");
            return null;
        }
     
        const res = await axios.get(`http://localhost:8000/comments/?post_id=${id}&page=${page}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

             
console.log("res.dataFetchAllCommentsData")       
console.log("res.dataFetchAllCommentsData")       
console.log("res.dataFetchAllCommentsData") 
console.log(res.data)
        // rest of the code...
        return res.data;
    } catch (error) {
        console.error("Fetching notice failed:", error.message);
        return null;
    }
};



export const FetchAllReqCommentsData = async ({id,page=1}) => {
    try {
        const user = JSON.parse(localStorage.getItem("user"));
        const accessToken = user?.access_token || "";
        if (!accessToken) {
            console.error("Access token not available");
            return null;
        }
        console.log("id,page")
        console.log("id,page")
        console.log("id,page")
        console.log("id,page")
        console.log("id,page")
        console.log("id,page")
        console.log("id,page")
        console.log("id,page")
     console.log(id,page)
     console.log("id,page")
     console.log("id,page")
     console.log("id,page")
     console.log("id,page")
        const res = await axios.get(`http://localhost:8000/comments/?recruits=${id}&page=${page}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

             
console.log("res.req")       
console.log("res.req")       
console.log("res.req") 
console.log(res.data)
        // rest of the code...
        return res.data;
    } catch (error) {
        console.error("Fetching notice failed:", error.message);
        return null;
    }
};



export const FetchCreateComments = async ({ post_id, recruits, content, to_user }) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const accessToken = user?.access_token || "";
      if (!accessToken) {
        console.error("Access token not available");
        return null;
      }
  
      // post_id를 숫자로 변환
      const numericPostId = Number(post_id);
      const numericRecuritId= Number(recruits);
      const res = await axios.post("http://localhost:8000/comments/", {
        "post_id": numericPostId,
        "recruits": numericRecuritId,  // recruits가 이미 숫자라면 변환 필요 없음
        "content": content,
        "to_user": to_user
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
  