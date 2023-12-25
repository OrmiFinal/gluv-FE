import axios from "axios";
const baseURL = import.meta.env.VITE_APP_API_KEY;
import {httpClient} from './interceptor';


const reportUrl = `${baseURL}/reports/`; // Replace with your actual API endpoint

export const submitReport = async ({ user_id, content }) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    const accessToken = user?.access_token || "";

    if (!accessToken) {
      console.error("Access token not available");
      return null;
    }

    const response = await httpClient.post(
      reportUrl,
      {
        user_id: user_id,
        content: content,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json", // Set content type if needed
        },
      }
    );

    console.log("Report submitted successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Reporting failed:", error.message);
    return null;
  }
};
