// api.js

import axios from 'axios';
const baseURL = import.meta.env.VITE_APP_API_KEY;
import {httpClient} from './interceptor';

const user = JSON.parse(localStorage.getItem("user"));
const accessToken = user?.access_token || "";

const axiosInstance = httpClient.create({
  baseURL: baseURL,  // Replace with your API base URL
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

export const checkIfLike = async (postId) => {
  try {
    const response = await axiosInstance.get(`/likes/is_liked/?post_id=${postId}`);
  
    return response.data.is_liked;
  } catch (error) {
    console.error('Error checking if liked:', error);
    throw error;
  }
};

export const likePost = async (postId) => {
  try {
    await axiosInstance.post('/likes/like_post/', { post_id: postId });
  } catch (error) {
    console.error('Error liking the post:', error);
    throw error;
  }
};

export const unlikePost = async (postId) => {
  try {
    await axiosInstance.post('/likes/unlike_post/', { post_id: postId });
  } catch (error) {
    console.error('Error unliking the post:', error);
    throw error;
  }
};


export const likeRecruit = async (postId) => {
  try {
    await axiosInstance.post('/likes/like_post/', { recruit_id: postId });
  } catch (error) {
    console.error('Error liking the post:', error);
    throw error;
  }
};

export const unlikeRecruit = async (postId) => {
  try {
    await axiosInstance.post('/likes/unlike_post/', { recruit_id: postId });
  } catch (error) {
    console.error('Error unliking the post:', error);
    throw error;
  }
};

export const checkIfReLike = async (postId) => {
    try {
      const response = await axiosInstance.get(`/likes/is_liked/?recruit_id=${postId}`);
    
      return response.data.is_liked;
    } catch (error) {
      console.error('Error checking if liked:', error);
      throw error;
    }
  };
  
  export const likeRe = async (postId) => {
    try {
      await axiosInstance.post('/likes/like_post/', { recruits: postId });
    } catch (error) {
      console.error('Error liking the post:', error);
      throw error;
    }
  };
  
  export const unlikeRe = async (postId) => {
    try {
      await axiosInstance.post('/likes/unlike_post/', { recruits: postId });
    } catch (error) {
      console.error('Error unliking the post:', error);
      throw error;
    }
  };
  