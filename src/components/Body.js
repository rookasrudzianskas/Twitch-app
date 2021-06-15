import React from 'react';
import "./styles/Body.css";
import Profile from "./Profile";
import Stream from "./Stream";

const Body = () => {
    return (
        <div className="body">
            <div className="body__left">
                <Stream />

                <Profile />
            </div>

            <div className="body__rightPlaceHolder">

            </div>
        </div>
    );
};

export default Body;
