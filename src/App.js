import './App.css';
import './assets/styles/global.css'
import React from 'react'
import Home from './pages/home/Index'
import Projects from './pages/projects/Index'
import HomeId from './pages/home/id/Index'
import Nav from './pages/Nav'
import {Routes ,Route} from "react-router-dom";
import MainLayout from './layouts/MainLayout'


function App() {

  return (
    <div className="App">
      <MainLayout>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>}/>
            <Route path="/:id" element={<HomeId/>}/>
          </Route>
          <Route path="/projects" element={<Projects />}/>
        </Routes>
      </MainLayout>
    </div>
  );
}

export default App;
