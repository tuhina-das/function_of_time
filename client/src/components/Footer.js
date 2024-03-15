import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';

function Footer(){
    return(
        <div className="footer">
            <div className="footerSection">
                <h1>About Us</h1>
                <Link className="footerLink" to="cnn.com" target="_blank">Developer Notes</Link>
                <Link className="footerLink" to="cnn.com" target="_blank">Terms of Service</Link>
                <Link className="footerLink" to="cnn.com" target="_blank">Privacy Policy</Link>
            </div>
            <div className="footerSection">
                <h1>Contact Us</h1>
                <Link className="footerLink" to="cnn.com" target="_blank">Click here!</Link>
            </div>
            <div className="footerSection">
                <h1>Social Media</h1>
                <Link className="footerLink" to="cnn.com" target="_blank">LinkedIn - Tuhina Das</Link>
            </div>
        </div>
    )
};

export default Footer;