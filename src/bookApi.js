
import axios from 'axios';

const API_BASE_URL = 'https://www.googleapis.com/books/v1/volumes';

export const fetchBooks = async (query) => {
  try {
    const response = await axios.get(`${API_BASE_URL}?q=${query}`);
    return response.data.items; 
  } catch (error) {
    console.error('Error fetching books:', error);
    return [];
  }
};

export const fetchBookDetails = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${id}`);
    return response.data;  
  } catch (error) {
    console.error('Error fetching book details:', error);
    return null;
  }
};
