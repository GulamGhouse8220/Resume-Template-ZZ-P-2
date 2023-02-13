import './App.css';
import React,{useState} from 'react';
import Login from './components/Login';
import Form from './components/Form';
import { BrowserRouter } from 'react-router-dom';
import {Route, Routes} from 'react-router-dom';


function App() {
  const[userData,setUserData] = useState({});
  return (
    <div className="App">
      <h1>Resume template</h1>
      <BrowserRouter >
      <Routes>
        <Route path="/"
         element={<Login userData={userData} setUserData={setUserData} />}/>
        <Route path="/form" element={<Form userData={userData}/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
