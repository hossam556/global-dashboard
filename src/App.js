import './App.css';
import './assets/styles/global.css'
import React , {Suspense} from 'react'
import Home from './pages/home/Index'
import HomeId from './pages/home/id/Index'
import {Routes ,Route} from "react-router-dom";
import MainLayout from './layouts/MainLayout'
import {routes} from './routes/index'


function App() {

  return (
    <Suspense fallback='loading....'>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout/>}>
            <Route index element={<Home/>}/>
            <Route path=":id" element={<HomeId/>}/>
            {Object.values(routes).map((route , i) => 
              <Route 
                key={i}
                path={`${route.path}`} 
                element={<route.component/>}
              />
            )}
          </Route>
        </Routes>
      </div>
   </Suspense>
  );
}

export default App;
