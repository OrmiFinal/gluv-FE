import axios from 'axios';
import { httpClient } from './interceptor';



const user = JSON.parse(localStorage.getItem("user"));
const accessToken = user?.access_token || "";

const baseURL = import.meta.env.VITE_APP_API_KEY;




const axiosInstance = httpClient.create({
  baseURL: baseURL,
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});


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
