import React from 'react';
import "./styles/RecentItem.css";

const RecentItem = ({ url, title }) => {
    return (
        <div className="item">
            <iframe width="400" height="235" src={url}
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen/>
            
            <div className="item__details">
                <img src="https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK.jpg" alt=""/>
                <div className="item__detailsText">
                    <h4>{title}</h4>
                    <p>rokasrudzianskas</p>
                    <p>Science & Technology</p>
                </div>
            </div>
        </div>
    );
};

export default RecentItem;
