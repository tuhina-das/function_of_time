import React from 'react';
import './Profile.css';

function Profile() {
    return (
        <div>
            <h1 className="homeTitle">Welcome to Function of Time</h1>
            <h3 className="homeSubTitle">Your New Time Management Friend</h3>
            <div className="textBox">
                <p>Function of Time is a simple web application that graphs the number of events you have throughout the week. </p>
                <p>It only takes us 13 milliseconds to process visuals, but it can take up to 5 whole minutes for us to consider our availability throughout the week.
                    Function of Time simplifies the mental strain put into planning and preparation by offering you a visual of how busy you are.</p>
                <p>Keep a track of your tasks in our built-in to-do list, which allows you to specify what day of the week your tasks are ongoing
                    and edit it as you please.
                </p>
            </div>
        </div>
    )
};

export default Profile;