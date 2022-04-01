import './App.css';
import { Login } from './component/AuthComponent/Login';
import { Register } from './component/AuthComponent/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './component/Header';
import { CreateGlobalContext } from './context/globalContext';
import { useState } from 'react';
import { GuardCheck } from './RouterGuard/GuardCheck';
import { HomeComponent } from './component/UserComponent/HomeComponent';
import { QuizzComponent } from './component/UserComponent/QuizzComponent';
import { Results } from './component/UserComponent/Result';
import { AdminDashboard } from './component/AdminComponent/AdminDashboard';
import { AddQuestion } from './component/AdminComponent/AddQuestion';
import { EditQuestion } from './component/AdminComponent/EditQuestion';


function App() {
  const [numberQuestion, setNumberQuestion] = useState(1);
  const [user, setUser] = useState({});
  return (
      <CreateGlobalContext.Provider
        value={{
          numberQuestion,
          setNumberQuestion,
          user,
          setUser,
        }}
      >
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} /> 
            <Route element={<GuardCheck/>}>
              <Route path="/home" element={ user.role === "user" ? <HomeComponent /> : <AdminDashboard />} />
              <Route path="/quizQuestion" element={<QuizzComponent />} />
              <Route path="/result" element={<Results />} />
              <Route path="/addQuestion" element={<AddQuestion />} />
              <Route path="/editQuestion/:id" element={<EditQuestion />} />
            </Route>      
          </Routes>
        </BrowserRouter>
      </CreateGlobalContext.Provider>
  );
}

export default App;
