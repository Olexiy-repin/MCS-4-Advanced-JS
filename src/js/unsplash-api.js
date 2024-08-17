import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com';

const API_KEY = 'N2hFKxqELoV2Hd6dcIRJn1oRrjfp310WTtPLEXfMXjg';

export const fetchPhotos = (query, page) => {
  const axiosOptions = {
    params: {
      query: query,
      page: page,
      per_page: 12,
      client_id: API_KEY,
    },
  };

  return axios.get(`/search/photos`, axiosOptions);
};
