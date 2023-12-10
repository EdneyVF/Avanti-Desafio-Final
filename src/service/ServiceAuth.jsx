import axios from 'axios';

const API_URL = 'http://localhost:3000/participant';

const ServiceAuth = {
  login: async (email, password) => {
    try {
      const response = await axios.post(`${API_URL}/login`, {
        email,
        password,
      });
      return response.data.token;
    } catch (error) {
      console.error('Erro ao fazer login', error);
      throw error;
    }
  },

  signup: async (email, password) => {
    try {
      const response = await axios.post(`${API_URL}/signup`, {
        email,
        password,
        isAdmin: false,
      });
      return response.data.userId;
    } catch (error) {
      console.error('Erro ao fazer registro', error);
      throw error;
    }
  },
};

export default ServiceAuth;
