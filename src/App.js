import './index'
import SignUpFirst from './pages/SignUpFirst';
import SignUpSecond from './pages/SignUpSecond';
import SignUpThird from './pages/SignUpThird';
import SplashScreen from './pages/SplashScreen';
import SignIn from './pages/SignIn';

function App() {
  return (
    <div className="App flex items-center justify-center h-screen" style={{background: 'white'}}>
      <SignIn/>
    </div>
  );
}

export default App;
