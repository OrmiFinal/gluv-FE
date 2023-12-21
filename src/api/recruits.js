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
        region:"서울",
        frequency,
        week,
        day,
        category,
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
