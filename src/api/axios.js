import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'cb43608029ea7498da3ad0b05c4be536',
    language: 'ko-KR',
  },
});

export default instance;
