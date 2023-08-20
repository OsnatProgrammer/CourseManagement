import React from 'react';
// import { Container } from '@mui/material';
import './App.css';
import { UserProvider } from './component/context/userContext';
import HomePage from './component/homePage';
import { CoursesProvider } from './component/context/coursesContext';
// import Layout from './component/Layout';
import MenuAppBar from './component/header';


function App() {
  return (
    <CoursesProvider>
      <UserProvider >
        {/* <Container> */}
        {/* <Layout /> */}
        <MenuAppBar />
        <HomePage />
        {/* </Container > */}
      </UserProvider>
    </CoursesProvider>
  );
}

export default App;
