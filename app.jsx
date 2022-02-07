import React, { useState, useEffect } from 'react';

let kepek=["sovereign.png", "magyarszentek.png",
		   "magyarszabadsag.png","aranymeteorit.jpg",
		   "aranyerme.jpg","aranydukat.png"];

let aktualis = 0;

ReactDOM.render(
    React.createElement(App),
    document.getElementById("app-container")
);

function App(){
    const [kep, setKep] = React.useState(aktualis);
    
    return <div style={{textAlign: "center"}}>
        <img src={kepek[kep]} style={{width: "600px", height: "300px"}}></img> 

    </div>
}