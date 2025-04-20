import axios from "axios";
const API_URL = "https://your-postgis-api.com";  // Replace with actual API
export const fetchLocations = async () => {
  try {
    const response = await axios.get(`${API_URL}/locations`);
    return response.data;
  } catch (error) {
    console.error("Error fetching locations:", error);
    return [];
  }
};