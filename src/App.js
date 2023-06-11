import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import  Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import PrivateRoutes from './utils/PrivateRoute';
import Forgotpassword from './Components/ForgotPassword/Forgotpassword';
import DashboardMain from './Components/DashboardMain/DashboardMain';
import Review from './Components/Review/Review';
import NewApplication from './Components/NewApplication/NewApplication';
import SearchClient from './Components/SearchClient/SearchClient';
import ClientDetails from './Components/ClientDetails/ClientDetails';
import ViewHouseholdDetails from './Components/ViewHouseholdDetails/ViewHouseholdDetails';
import MobileVerification from './Components/MobileVerifiaction/MobileVerification';
import OkycData from './Components/OkycData/OkycData';
import 'bootstrap/dist/css/bootstrap.min.css';
import './html/assets/css/nice-select.css';
import './html/assets/css/global.css';
import './html/assets/css/grid.css';
import './html/assets/css/typography.css';
import './html/assets/css/new-application.css';
import './html/assets/css/buttons.css';
import './html/assets/css/page.css';
import './html/assets/css/flexslider.css'
import './html/assets/css/onbording.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/login' element={ <Login/>}/>
          <Route exact path='/forgotpassword' element= {<Forgotpassword/>}/>
          <Route element={<PrivateRoutes/>}>
            <Route exact path='/dashboard' element={ <Dashboard/>}>
              <Route exact path='' element = {<DashboardMain/>}/>
              <Route exact path='review' element = {<Review/>}/>
              <Route exact path='newapplication' element = {<NewApplication/>}>
                <Route exact path='' element = {<SearchClient/>}/>
                <Route exact path='searchclient' element = {<SearchClient/>}/>
                <Route exact path='clientdetails' element = {<ClientDetails/>}/>
                <Route exact path='viewhousehold' element = {<ViewHouseholdDetails/>}/>
                <Route exact path='mobileverifiaction' element = {<MobileVerification/>}/>
                <Route exact path='okycdata' element = {<OkycData/>}/>
              </Route>
            </Route>
          </Route>
          <Route exact path='/' element={ <Login/>}/>
          <Route exact path='/Forgotpassword' element={ <Forgotpassword/>}/>
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
