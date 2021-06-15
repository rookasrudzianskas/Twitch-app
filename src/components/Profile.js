import React from 'react';
import "./styles/Profile.css";

const Profile = () => {
    return (
        <div className="profile">
            <div className="profile__topLeft">
                <img src="https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK.jpg" alt=""/>

                <div className="profile__topLeftDetails">
                    <h1>Rokas Rudzianskas</h1>
                    <h3>830K followers</h3>
                </div>
            </div>
        </div>
    );
};

export default Profile;
