import axios from 'axios';
const baseURL = import.meta.env.VITE_APP_API_KEY;
import {httpClient} from './interceptor';

// Function to create a recruit post
export const createRecruitsPost = async ({
  team,
  author,
  title,
  content,
  region = "지역 무관",
  frequency,
  week,
  day,
  category,
  introduce= "모임 설명",
  maxAttendance
}) => {
  try {
    
    const user = JSON.parse(localStorage.getItem("user"));
    const accessToken = user?.access_token || "";
    
    if (!accessToken) {
      console.error("Access token not available");
      return null;
    }


    const response = await httpClient.post(
       `${baseURL}/recruits/`,
      {
        team,
        author,
        title,
        content,
        region,
        location:region,
        frequency,
        week,
        day,
        category,
        introduce,
        max_attendance: maxAttendance
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }
    );


    return response.data;
  } catch (error) {

    console.error("Creating recruits post failed:", error.response?.data || error.message);
    return null;
  }
};



export const FetchRecruitsPost = async ({ page = 1, search = "", category = "", order_by = "", order = "" ,region=""}) => {
  try {
      const user = JSON.parse(localStorage.getItem("user"));
      const accessToken = user?.access_token || "";
      if (!accessToken) {
          console.error("Access token not available");
          return null;
      }
     

      if(category=== "전체"){
        category=""
      }
    
      const queryString = `?page=${page}&search=${search}&category=${category}&order_by=${order_by}&order=${order}&region=${region}`;
      const apiUrl = `${baseURL}/recruits/${queryString}`;

      const res = await httpClient.get(apiUrl, {
          headers: {
              Authorization: `Bearer ${accessToken}`,
          },
      });
      // resfvt of the code...
      return res.data;
  } catch (error) {
      console.error("Fetching notice failed:", error.message);
      return null;
  }
};




export const FetchRecruits = async ({id}) => {
  try {
      const user = JSON.parse(localStorage.getItem("user"));
      const accessToken = user?.access_token || "";
      if (!accessToken) {
          console.error("Access token not available");
          return null;
      }
 
      const res = await httpClient.get(`${baseURL}/recruits/${id}/`, {
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



export const FetchDelectRecruits = async ({id}) => {
  try {
      const user = JSON.parse(localStorage.getItem("user"));
      const accessToken = user?.access_token || "";
      if (!accessToken) {
          console.error("Access token not available");
          return null;
      }
 
      const res = await httpClient.delete(`${baseURL}/recruits/${id}/`, {
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


export const CheckRecruitsApplied = async (recruit_id) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    const accessToken = user?.access_token || "";
    if (!accessToken) {
      console.error("Access token not available");
      return null;
    }

    const res = await httpClient.get(`${baseURL}/recruits/${recruit_id}/apply/`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    // rest of the code...
    return res.data;
  } catch (error) {
    console.error("Fetching notice failed:", error.message);
    const res = { data: []};
    return res.data;
  }
};


export const fetchHotRecruits = async () => {
  try {
    const response = await fetch(`${baseURL}/recruits/hot/`);
    const data = await response.json();



    return data;
  } catch (error) {
    console.error("Error fetching hot recruits:", error);
    throw error; // You might want to handle the error appropriately in your application
  }
};
