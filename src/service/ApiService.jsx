import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3000' // <= mudar para localhost:3000
});

export const fetchEvents = async () => {
  try {
    const response = await api.get('/participant/get-events');
    return response.data;
  } catch (error) {
    console.error('Error fetching events', error);
  }
};

export const fetchFilteredEvents = async (filters) => {
  try {
    const response = await api.get('/participant/get-events/filter', { params: filters });
    return response.data;
  } catch (error) {
    console.error('Error fetching filtered events', error);
  }
};

// export const fetchCategories = async () => {
//   try {
//     const response = await api.get('/participant/get-events/:category');
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching categories', error);
//   }
// };

// export const fetchEventsByDate = async (date) => {
//     try {
//       const response = await api.get(`/event/get-events/${date}`);
//       return response.data;
//     } catch (error) {
//       console.error('Erro ao buscar eventos', error);
//     }
// };

// export const fetchLocals = async () => {
//   try {
//     const response = await api.get('/participant/get-events/:local');
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching locals', error);
//   }
// };
