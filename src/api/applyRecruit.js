// api.js
import {httpClient} from './interceptor';
import axios from 'axios';

const user = JSON.parse(localStorage.getItem("user"));
const accessToken = user?.access_token || "";
const baseURL = import.meta.env.VITE_APP_API_KEY;


const axiosInstance = httpClient.create({
  baseURL: baseURL,  // Replace with your API base URL
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

export const applyForRecruit = async (recruitId) => {
  try {
    const response = await httpClient.post(`/recruits/${recruitId}/apply/`);
    return response.data;
  } catch (error) {
    console.error('Error applying for recruit:', error);
    throw error;
  }
};

export const cancelRecruitApplication = async (recruitId) => {
  try {
    const response = await httpClient.delete(`/recruits/${recruitId}/apply/`);
    return response.data;
  } catch (error) {
    console.error('Error canceling recruit application:', error);
    throw error;
  }
};

export const checkRecruitApplication = async (recruitId) => {
  try {
    const response = await httpClient.get(`/recruits/${recruitId}/apply/`);
    return response.data;
  } catch (error) {
    console.error('Error checking recruit application:', error);
    throw error;
  }
};
