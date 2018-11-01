import React from 'react';
import {Link} from 'react-router-dom';

const HomePage = () => (
    <div>
        <h1>Home Page
        <Link to="/login">Login</Link>
        </h1>
    </div>
);

export default HomePage;