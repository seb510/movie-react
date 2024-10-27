import axios from 'axios';

export const fetchMovies = async (query) => {
    const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${query}`);
    return response.data.map(item => item.show);
};
