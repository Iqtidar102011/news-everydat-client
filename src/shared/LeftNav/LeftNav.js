import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    // creting state to load data
    // there are no route for this .. if there would a route we could use loader()

    const [catagories, setCatagories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/catagory')
            .then(res => res.json())
            .then(data => setCatagories(data))
    }, [])
    return (
        <div>
            <h3>All catagory :{catagories.length}</h3>
            <div>
                {
                    catagories.map(catag => <p key={catag.id}><Link to={`/catagory/${catag.id}`}>{catag.name}</Link></p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;