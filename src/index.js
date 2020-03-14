//Import the React and ReactDOM libraries
import React from 'react';
import Reactdom from 'react-dom';


// Create a react component
const App=()=>{
    return <div>We will Rock You</div>;
};


//Take the react component and show it on the screen
Reactdom.render(
    <App/>,
    document.querySelector('#root')
);