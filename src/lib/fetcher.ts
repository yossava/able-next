import axios from 'axios';

export const fetchStore = async () => {
  try {
    const response = await axios.get('https://app.baiili.id/api/shops/today');
    return response.data.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
