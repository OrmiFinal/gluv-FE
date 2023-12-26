import { httpClient } from './interceptor';
import axios from 'axios';

// Retrieve the user and access token from local storage
const user = JSON.parse(localStorage.getItem("user"));
const accessToken = user?.access_token || "";

// Replace 'YOUR_API_BASE_URL' with your actual API base URL
const baseURL = import.meta.env.VITE_APP_API_KEY;



// Create an instance of Axios with the provided configuration
const axiosInstance = httpClient.create({
  baseURL: baseURL,
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

// Function to apply for recruit
export const applyForRecruit = async (recruitId) => {
  try {
    const numericRecruitId = parseInt(recruitId, 10);
    const response = await axiosInstance.post(`recruits/${numericRecruitId}/apply/`);
    console.log("responseget")
    console.log(response)
    return response.data;
  } catch (error) {
    console.error('Error applying for recruit:', error);
    throw error;
  }
};

// Function to cancel recruit application
export const cancelRecruitApplication = async (recruitId) => {
  try {
  
    const response = await axiosInstance.delete(`recruits/${recruitId}/apply/`);
    console.log(response)
    return response.data;
  } catch (error) {
    console.error('Error canceling recruit application:', error);
    throw error;
  }
};


// Function to check recruit application
export const checkRecruitApplication = async (recruitId) => {
  try {
    const numericRecruitId = parseInt(recruitId, 10);
    const response = await axiosInstance.get(`recruits/${numericRecruitId}/apply/`);
    console.log(response)
    return response.data;
  } catch (error) {
    console.error('Error checking recruit application:', error);
    throw error;
  }
};
