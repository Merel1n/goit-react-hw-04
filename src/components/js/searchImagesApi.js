import axios from "axios";

const createApi = axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID hwWs5KXFx0JpzqD3vIsMGdy9xAvhR9aLwupMziIehuA",
  },
});

export default async function fetchImagesWithQuery(query) {
  const params = {
    query,
    // page,
    per_page: 12,
  };

  const response = await createApi.get("search/photos", { params });
  return response.data.results;
}
