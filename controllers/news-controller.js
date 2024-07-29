const axios = require('axios');

const getNews = async (req, res) => {
    const user = req.user;
    const preferences = user.preferences;

    if (!preferences.length) {
        return res.status(400).json({ message: 'No preferences found' });
    }

    try {
        const newsPromises = preferences.map(pref =>
            axios.get(`https://newsapi.org/v2/everything?q=${pref}&apiKey=your_news_api_key`)
        );

        const newsResponses = await Promise.all(newsPromises);
        const newsArticles = newsResponses.flatMap(response => response.data.articles);

        res.json(newsArticles);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching news', error: error.message });
    }
};

module.exports = { getNews };
