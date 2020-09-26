import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProfilPhoto from './Component/Profile/ProfilPhoto';
import FullName from './Component/Profile/FullName';
import Adress from './Component/Profile/Adress';

function App() {
  return (
    <>
      <div style={{ borderRadius: '25px ', border: '2px solid blue', }}>
        <ProfilPhoto></ProfilPhoto>
        <FullName></FullName>
        <Adress></Adress>
      </div>
    </>

  );
}

export default App;
