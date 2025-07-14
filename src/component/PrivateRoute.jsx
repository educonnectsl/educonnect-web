import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ children, allowedUserTypes = [] }) => {
    const { user } = useAuth();
    
    if (!user) {
        console.log("User is not authenticated");
        return <Navigate to="/login" />;
    }
    
    if (allowedUserTypes.length > 0 && !allowedUserTypes.includes(user.user_type)) {
        return <Navigate to="/" />;
    }
    
    return children;
};

export default PrivateRoute;
