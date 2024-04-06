import React from 'react';
import './App.css';
import Header from './components/Header';
import UserInput from './components/UserInput';
import ShowWord from './components/ShowWord';
import { data } from './assets/data';

function App() {

  const getRandomWord = () => {
    const keys = Object.keys(data);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    return {
        word: data[randomKey].word,
        description: data[randomKey].description
    };
};


  return (
    <div className='App'>
        <div id='center'>
          <Header />
          <UserInput getRandomWord={getRandomWord} />
          <ShowWord />
        </div>
    </div>
  );
}

export default App;
