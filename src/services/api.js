import axios from 'axios';

export const fetchFinder = async (postId, page) => {
  const API_KEY = '39087480-448d61c12fa4136500785e5b6';
  const URL = 'https://pixabay.com/api/';
  const END_POINT =
    '&q=' + postId + '&image_type=photo&orientation=horizontal&safesearch=true';
  const params = new URLSearchParams({
    key: API_KEY,
    page,
    per_page: 12,
  });

  const { data } = await axios.get(`${URL}?${params}${END_POINT}`);
  return data;
};
