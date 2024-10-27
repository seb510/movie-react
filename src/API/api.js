import axios from 'axios';

export const fetchMovies = async (query) => {
    try {
        // Основний запит для пошуку шоу за назвою
        const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${query}`);
        const shows = response.data.map(item => item.show);

        // Отримання епізодів для кожного шоу
        const showsWithEpisodes = await Promise.all(
            shows.map(async (show) => {
                const episodesResponse = await axios.get(`https://api.tvmaze.com/shows/${show.id}/episodes`);
                return { ...show, episodes: episodesResponse.data };
            })
        );

        return showsWithEpisodes;
    } catch (error) {
        console.error('Error fetching shows or episodes:', error);
        return [];
    }
};
