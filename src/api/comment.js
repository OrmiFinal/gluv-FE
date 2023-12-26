import axios from "axios";
import {httpClient} from './interceptor';

const baseURL = import.meta.env.VITE_APP_API_KEY;

export const FetchAllCommentsData = async ({id,page=1}) => {
    try {
        const user = JSON.parse(localStorage.getItem("user"));
        const accessToken = user?.access_token || "";
        if (!accessToken) {
            console.error("Access token not available");
            return null;
        }
     
        const res = await httpClient.get(`${baseURL}/comments/?post_id=${id}&page=${page}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

      
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
    
        const res = await httpClient.get(`${baseURL}/comments/?recruits=${id}&page=${page}`, {
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
      const res = await httpClient.post(`${baseURL}/comments/`, {
        "post_id": numericPostId,
        "recruits": numericRecuritId,  // recruits가 이미 숫자라면 변환 필요 없음
        "content": content,
        "to_user": to_user
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
  

  