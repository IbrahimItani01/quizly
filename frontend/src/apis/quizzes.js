import axios from "axios";

const baseUrl = "http://localhost:8800/api/quizzes"; // Update base URL as needed

export const getAllQuizzes = async (token) => {
  try {
    const response = await axios.get(baseUrl, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching quizzes:", error);
    throw error;
  }
};

export const getQuizById = async (id, token) => {
  try {
    const response = await axios.get(`${baseUrl}/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching quiz by ID:", error);
    throw error;
  }
};
