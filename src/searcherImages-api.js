import axios from "axios";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

axios.defaults.baseURL = "https://api.unsplash.com";

export const searchImages = async (query, page) => {
  const response = await axios.get("/search/photos", {
    params: {
      orientation: "landscape",
      per_page: 12,
      page: page,
      query: query,
      client_id: "QFHtF_jB1XddBPCXNzRt9Lx9WIqL3MYsBWr77V6XOsI",
    },
  });
  return response.data;
};
