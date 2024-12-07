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

