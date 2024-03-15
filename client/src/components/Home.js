import React from 'react';
import Graph from './Graph';
import './Home.css';

function toggleVisibility(){
    var c = document.querySelector(".editMenu");
    c.classList.toggle('editMenu-active');
    if (c.classList.contains('editMenu-active')){
        for (let i= 1; i <= 7; i++){
            var counter = document.getElementById("cv"+i);
            // console.log("Before: " + counter.value);
            counter.value=0;
            
        }
    }
}


function Home() {

    return (
    <div>
        <h1 className="functionTitle">My Events Throughout This Week</h1>
        <Graph className="graph" doIt={toggleVisibility}></Graph>
    </div>
    )
};

export default Home;