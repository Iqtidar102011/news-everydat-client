import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../userContext/UserContext';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();

    if (loading) {
        return <Spinner animation='border'></Spinner>
    }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }}></Navigate>
    }
    return children
};

export default PrivateRoute;



// লগিন করার আগে user যে পেইজে যেতে চেয়েছিল, লগিন করার পর ঠিক সে জায়গায় তাকে রিডাইরেক্ট করতে হলে /login page এ যাওয়ার আগেই সেই location history টা পেতে হবে। এবং last login history টাকে আগের history দিয়ে replace করে দিতে হবে।