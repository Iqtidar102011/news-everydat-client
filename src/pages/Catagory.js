import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSumCard from '../shared/newsSumCard/NewsSumCard';

const Catagory = () => {
    const categoryNews = useLoaderData()

    return (
        <div>
            {
                categoryNews.map(news => <NewsSumCard key={news._id} news={news} ></NewsSumCard>)
            }
        </div>
    );
};

export default Catagory;