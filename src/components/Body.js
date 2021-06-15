import React from 'react';
import "./styles/Body.css";
import Profile from "./Profile";

const Body = () => {
    return (
        <div className="body">
            <div className="body__left">
                <Profile />
            </div>

            <div className="body__rightPlaceHolder">

            </div>
        </div>
    );
};

export default Body;
