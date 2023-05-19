import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import  Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import PrivateRoutes from './utils/PrivateRoute';
import Forgotpassword from './Components/ForgotPassword/Forgotpassword';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/login' element={ <Login/>}/>
          <Route element={<PrivateRoutes/>}>
            <Route exact path='/dashboard' element={ <Dashboard/>}/>
          </Route>
          <Route exact path='/' element={ <Login/>}/>
          <Route exact path='/Forgotpassword' element={ <Forgotpassword/>}/>
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
