import React from 'react';
import MainLayout from './layout/MainLayout';
import SignUpFirst from './pages/SignUpFirst';
import SignUpSecond from './pages/SignUpSecond';
import SignUpThird from './pages/SignUpThird';
import SplashScreen from './pages/SplashScreen';
import SignIn from './pages/SignIn';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/sign-up" element={<SignUpFirst />} />
          <Route path="/sign-up/next" element={<SignUpSecond />} />
          <Route path="/sign-up/end" element={<SignUpThird />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Route>
     </Routes>
    </Router>
  );
}

export default App;
