import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header,SideBar,Footer, Main } from './component/molecules';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <SideBar></SideBar>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
