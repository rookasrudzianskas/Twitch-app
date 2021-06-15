import React from 'react';
import "./styles/Stream.css";

const Stream = () => {
    return (
        <div className="stream">
            <div className="stream__container">
                <div className="stream__status">
                    <div className="stream__statusContainer">
                        <div className="stream__statusContainerTop">
                            <div className="stream__statusIndicator">OFFLINE</div>
                            <h2>Check out the below streams for Rokas Rudzianskas</h2>
                        </div>
                        <div className="stream__statusInfo">
                            <i className="fas fa-bell"></i>
                            <p>You will be notified then Rokas Rudzianskas goes live</p>
                        </div>
                    </div>
                </div>
                <div className="stream__videosEmbed">
                    <iframe width="500" height="295" src="https://www.youtube.com/embed/UfGMj10wOzg"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen/>
                </div>
            </div>
        </div>
    );
};

export default Stream;
