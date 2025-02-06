import React from 'react';
import './style.css';

const Presentation = () => {
    return (
        <div className="container">
            {/* <div className="profile-pic"></div> */}
            <img src="./MichiAcosador.png" alt="profile-pic" className="profile-pic" />
            <h1>Eliot Aldersson</h1>
            <div className="info">
                <p><strong>Address:</strong> Columbia - Maryland</p>
                <p><strong>Email:</strong> eliotAldersson@example.com</p>
                <p><strong>Phone:</strong> +123 45678901</p>
            </div>
            <h2>Experience</h2>
            <div className="experience">
                <div className="job">
                    <p><strong>Enterprise Name:</strong> Ecorp</p>
                    <p><strong>Time:</strong> Past - Now</p>
                    <p><strong>Job:</strong> Architect software</p>
                </div>
                <div className="job">
                    <p><strong>Enterprise Name:</strong> AllSafe</p>
                    <p><strong>Time:</strong> 2021-2022</p>
                    <p><strong>Job:</strong> Cybersecurity Engineer </p>
                </div>
            </div>
        </div>
    );
}

export default Presentation;