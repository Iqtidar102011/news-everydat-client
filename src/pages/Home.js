import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSumCard from '../shared/newsSumCard/NewsSumCard';

const Home = () => {
    const allNews = useLoaderData()
    return (
        <div>
            <h2>home</h2>
            {
                allNews.map(news => <NewsSumCard key={news._id} news={news}></NewsSumCard>)
            }
        </div>
    );
};

export default Home;