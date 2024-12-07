import axios from "axios";

const baseUrl = "http://localhost:8800/api/users";

export const registerUser = async (data) => {
  try {
    console.log("Registering user with data:", data);
    const response = await axios.post(`${baseUrl}/register`, data, {
      headers: { "Content-Type": "application/json" },
    });
    console.log("Response from server:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error registering user:",
      error.response?.data || error.message
    );
    throw error; // Rethrow the error for handling in the calling function
  }
};

export const loginUser = async (data) => {
  try {
    const response = await axios.post(`${baseUrl}/login`, data);
    return response.data;
  } catch (error) {
    console.error("Error logging in user:", error);
    throw error;
  }
};

export const getUserData = async (token) => {
  try {
    const response = await axios.get(`${baseUrl}/me`, {
      headers: { Authorization: `Bearer ${token}` }, // Pass token in the header
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};


