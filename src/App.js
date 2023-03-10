import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './MainLayout';
import SignUpFirst from './pages/SignUpFirst';
import SignUpSecond from './pages/SignUpSecond';
import SignUpThird from './pages/SignUpThird';
import SplashScreen from './pages/SplashScreen';
import SignIn from './pages/SignIn';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/signup/first" element={<SignUpFirst />} />
          <Route path="/signup/second" element={<SignUpSecond />} />
          <Route path="/signup/third" element={<SignUpThird />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
