import React from "react";
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'usehooks-ts';
import { CSSTransition } from 'react-transition-group';
import { useState } from 'react';
import './Navbar.css';
import hamburger from '../assets/hamburger.png';

//TODO: collapse navbar when switching tabs

function Navbar() {
    const [visible, setVisible] = useState(false);
    function toggleMenu() {
        setVisible(!visible);
    }
    const handleClick = () => {
        toggleMenu()
    }
    //constant to keep a track of the navbar's width (media query but in react!!)
    const big = useMediaQuery('(min-width: 800px)');

    return (
        (big) ?
            <div className="navbar">
                <span className="navOption">
                    <Link className="link" to="/"><h2>Home</h2></Link>
                </span>
                {/* TODO: make responsive */}
                <div className="navOption">
                    <Link className="link" to="/calendar"><h2>Calendar</h2></Link>
                </div>
                <span className="navOption">
                    <Link className="link" to="/my-graph"><h2>My Function of Time</h2></Link>
                </span>
                <span className="navOption">
                    <Link className="link" to="/balance"><h2>Weekly Balance</h2></Link>
                </span>
                <span className="navOption">
                    <Link className="link" to="/todo"><h2>To-Do List</h2></Link>
                </span>
            </div>
            :
            <>
                <div className="navbar">
                    <span className="navOption">
                        <img className="hamburger" src={hamburger} onClick={handleClick} />
                    </span>
                </div>
                {/* Question about transitions 3/14: When we use state, are we inserting/removing from DOM? (Transitions) */}
                {/* Ask about transitions in general? */}
                {visible &&
                    <div className="navmenu">
                        <div className="menuOption">
                            <Link className="link" to="/"><h2>Home</h2></Link>
                        </div>
                        <div className="menuOption">
                            <Link className="link" to="/calendar"><h2>Calendar</h2></Link>
                        </div>
                        <div className="menuOption">
                            <Link className="link" to="/my-graph"><h2>My Function of Time</h2></Link>
                        </div>
                        <div className="menuOption">
                            <Link className="link" to="/balance"><h2>Weekly Balance</h2></Link>
                        </div>
                        <div className="menuOption">
                            <Link className="link" to="/todo"><h2>To-Do List</h2></Link>
                        </div>
                    </div>
                }
            </>
    )
};

export default Navbar;