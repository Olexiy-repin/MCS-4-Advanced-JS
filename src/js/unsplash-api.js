import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com';

export const fetchPhotos = query => {
  const axiosConfigs = {
    params: {
      query: query,
      client_id: 'N2hFKxqELoV2Hd6dcIRJn1oRrjfp310WTtPLEXfMXjg',
    },
  };

  return axios.get(`/search/photos`, axiosConfigs);
};
