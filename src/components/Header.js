import React from 'react';
import {Avatar} from "@material-ui/core";
import "./styles/Header.css";

const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <img className="header__leftLogo" src="https://snipstock.com/assets/cdn/png/6bd943cf1a28d665a6f38402c1bbf293.png" alt=""/>
                <h2>Following</h2>
                <h2>Browse</h2>
                <div className="header__verticalLine"/>
                    <h2>ESports</h2>
                    <h2>Music</h2>
                    <i className="fas fa-ellipsis-h"/>
            </div>

            <div className="header__center">
                <input type="text" placeholder="Search"/>
                <div className="header__centerLogoContainer">
                    <i className="fas fa-search"/>
                </div>
            </div>

            <div className="header__right">
                <div className="header__rightContainer">
                    <i className="fas fa-crown"/>
                    <i className="fas fa-inbox"/>
                    <i className="fas fa-comment-alt"/>

                    <div className="header__rightBits">
                        <i className="fas fa-gem"/>
                        <h4>Get Bits</h4>
                    </div>
                    <Avatar />

                </div>
            </div>
        </div>
    );
};

export default Header;
