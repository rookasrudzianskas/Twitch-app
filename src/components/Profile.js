import React from 'react';
import "./styles/Profile.css";
import RecentItem from "./RecentItem";
import Stream from "./Stream";

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

            <div className="profile__topRight">
                <i className="fas fa-heart graybg"></i>
                <i className="fas fa-bell graybg"></i>
                <i className="fas fa-ellipsis-v"></i>
            </div>

            <div className="profile__menu">
                <h2 className="active">Home</h2>
                <h2>About</h2>
                <h2>Schedule</h2>
                <h2>Videos</h2>
                <h2><i className="fas fa-arrow-up"></i></h2>
                <h2>Chat</h2>
            </div>

            <div className="profile__recent">
                <h2>Recent broadcast</h2>

                <div className="profile__recentItems">
                    <RecentItem url={"https://www.youtube.com/embed/UfGMj10wOzg"} title={' 🔴 Learn the MERN Stack - Full tutorial for beginners (Mongo DB, Express and more)'} />
                    <RecentItem url={"https://www.youtube.com/embed/UfGMj10wOzg"} title={' 🔴 Learn the MERN Stack - Full tutorial for beginners (Mongo DB, Express and more)'} />
                    <RecentItem url={"https://www.youtube.com/embed/UfGMj10wOzg"} title={' 🔴 Learn the MERN Stack - Full tutorial for beginners (Mongo DB, Express and more)'} />

                </div>

                <div className="profile__categories">
                    <h2>Rokas Rudzianskas recently streamed categories</h2>
                    <img src="https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK.jpg" alt=""/>
                    <h3>Science & Technology</h3>
                </div>
            </div>
        </div>
    );
};

export default Profile;
