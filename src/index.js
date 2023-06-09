// src/index.js
// Import react and react-dom
import React from 'react';
import ReactDOM from 'react-dom';
// Import the App.js to give react something to render
import App from './App';
// Attach the App component to the div with the id "root" in our index.html file
ReactDOM.render(<App />, document.getElementById('root'));
