// import react
import React from 'react';
import ReactDOM from 'react-dom';

// importing style - removed app.js & replaced it with components below
import './index.css';

// replacing app.js with components for page display
import Main from '../src/components/main-content/main-content';
import Footer from '../src/components/footer/footer';

// must add components to render ^
ReactDOM.render(
  [
  <Main key='1' />, 
  <Footer key='2' />
  ],
  document.getElementById('root')
);

// removed this option
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
