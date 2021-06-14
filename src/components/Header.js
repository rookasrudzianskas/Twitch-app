import React from 'react';

const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <img className="header__leftLogo" src="https://cdn.pixabay.com/photo/2018/05/08/21/28/twitch-3384005_960_720.png" alt=""/>
                <h2>Following</h2>
                <h2>Browse</h2>
                <div className="header__verticalLine">
                    <h2>ESports</h2>
                    <h2>Music</h2>
                    <i className="fas fa-ellipsis-h"/>
                </div>
            </div>

            <div className="header__center">

            </div>

            <div className="header__right">

            </div>
        </div>
    );
};

export default Header;
