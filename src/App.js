import React from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import './App.css';
import RegistrationPage from './components/registrationpage';
import LoginForm from './components/loginform';
import NavigationPage from './components/navigationpage';
import VolunteerForm from './components/volunteerform';
import Grid from './components/grid';
import HomePage from './components/homepage';
import About from './components/about';

function App() {
  return (
      <>
    <Routes>
      <Route exact path='/' element={<LoginForm/>}/>
      <Route exact path='/RegistrationPage' element={<RegistrationPage/>}/>
      <Route exact path='/LoginForm' element={<LoginForm/>}/>

      <Route path='/LoginForm' element={<LoginForm/>}/>
      <Route path='/NavigationPage' element={<NavigationPage/>}/>   
      <Route path='/LoginForm' element={<NavigationPage/>}/>
      <Route path='/VolunteerForm' element={<VolunteerForm/>}/>
      <Route path='/Grid' element={<Grid/>}/>
      <Route path='/HomePage' element={<HomePage/>}/>
      <Route path='/About' element={<About/>}/>

    </Routes>
  
    </>
  )
}
export default App;
