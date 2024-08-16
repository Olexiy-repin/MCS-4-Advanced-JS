const API_KEY = 'N2hFKxqELoV2Hd6dcIRJn1oRrjfp310WTtPLEXfMXjg';

export const fetchPhotos = query => {
  const searchParams = new URLSearchParams({
    query: query,
    client_id: API_KEY,
  });

  return fetch(`https://api.unsplash.com/search/photos?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
};
