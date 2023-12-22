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
  introduce= "설명도 필요 없는 엄청난 팀",
  maxAttendance
}) => {
  try {
    // Retrieve user information from local storage
    const user = JSON.parse(localStorage.getItem("user"));
    const accessToken = user?.access_token || "";
    console.log(region)
    // Check if access token is available
    if (!accessToken) {
      console.error("Access token not available");
      return null;
    }

    // Make a POST request to create a recruit post
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

    // Log the response data for debugging (you can remove this in production)
    console.log("Recruits post created successfully:", response.data);

    // Return the data from the response
    return response.data;
  } catch (error) {
    // Handle errors during the create
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
      console.log("asdasd")
      console.log("page,search,category,order_by,order")
console.log(page,search,category,order_by,order)
      const queryString = `?page=${page}&search=${search}&category=${category}&order_by=${order_by}&order=${order}`;
      const apiUrl = `http://localhost:8000/recruits/${queryString}`;

      const res = await axios.get(apiUrl, {
          headers: {
              Authorization: `Bearer ${accessToken}`,
          },
      });
      console.log("FetchRecruitsPost");
      console.log("FetchRecruitsPost");
      console.log(res.data);
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
   
      console.log("FetchRecruitsPost");
      console.log("FetchRecruitsPost");
      console.log(res.data);
      // rest of the code...
      return res.data;
  } catch (error) {
      console.error("Fetching notice failed:", error.message);
      return null;
  }
};
