import axios from 'axios';

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


    const response = await axios.post(
       "http://localhost:8000/recruits/",
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



export const FetchRecruitsPost = async ({ page = 1, search = "", category = "", order_by = "", order = "" }) => {
  try {
      const user = JSON.parse(localStorage.getItem("user"));
      const accessToken = user?.access_token || "";
      if (!accessToken) {
          console.error("Access token not available");
          return null;
      }
      const queryString = `?page=${page}&search=${search}&category=${category}&order_by=${order_by}&order=${order}`;
      const apiUrl = `http://localhost:8000/recruits/${queryString}`;

      const res = await axios.get(apiUrl, {
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
 
      const res = await axios.get(`http://localhost:8000/recruits/${id}/`, {
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
