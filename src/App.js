import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './contexts/AuthContext';
import Home from './components/Home/Home';
import SignInUp from './components/Auth/SignInUp';
import Login from './components/Login/Login';



function App() {
  return (
    //BEM 
     
        <Router>
          <AuthProvider>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/SignInUp" element={<SignInUp />}></Route>
              <Route path="/Login" element={<Login />}></Route>
            </Routes>
            </div>
          </AuthProvider>  
        </Router>
  );
}

export default App;
 