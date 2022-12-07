import axios from 'axios';

const BASE_URL = 'https://snake-game-be.onrender.com/players';

export const getPlayers = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const addPlayer = async body => {
  const response = await axios.post(BASE_URL, body);
  return response.data;
};
