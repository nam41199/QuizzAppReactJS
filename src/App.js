import './App.css';
import { Login } from './component/Login';
import { Register } from './component/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './component/Header';
import { HomeComponent } from './component/HomeComponent';
import { CreateGlobalContext } from './context/globalContext';
import { useState } from 'react';


function App() {
  const [login, isLogin] = useState(false);
  
  return (
      <CreateGlobalContext.Provider
        value={{
          login,
          isLogin,
        }}
      >
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </CreateGlobalContext.Provider>
  );
}

export default App;
