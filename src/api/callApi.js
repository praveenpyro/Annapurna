// callApi.js
import axios from 'axios';

// Create an Axios instance
const apiInstance = axios.create();

// Add an interceptor to send JWT token with each request
apiInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('jwtToken'); // Retrieve the JWT token from wherever it's stored
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Utility function to make API calls
export async function callApi(requestdata) {
  const {url, method = 'GET', headers, data = null, options = {}} = requestdata;
  try {
    const response = await apiInstance({
      url,
      method,
      headers,
      data,
      withCredentials: false,
      ...options,
    });
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}
