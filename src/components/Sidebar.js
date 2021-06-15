import React from 'react';
import "./styles/Sidebar.css";
import Channel from "./Channel";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
            <h5>FOLLOWED CHANNELS</h5>
            <Channel avatar="https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK.jpg" name="rookasrudzianskas" followers="834K"/>
            <Channel avatar="https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK.jpg" name="rookasrudzianskas" followers="834K"/>
            <Channel avatar="https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK.jpg" name="rookasrudzianskas" followers="834K"/>
            <h5>RECOMMENDED CHANNELS</h5>
            <p className="sidebar__topShowMore">Show More</p>
            </div>

            <div className="sidebar__bottom">
                <div className="sidebar__bottomContainer">
                    <i className="fas fa-search"></i>
                    <input type="text" placeholder="Search To add friends"/>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
