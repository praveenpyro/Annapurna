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
import LUC_Check from './Components/LUC/LUC_Check/LUC_Check';
import LUC from './Components/LUC/LUC';
import ClientList from './Components/ClientList/ClientList';
import LUC_ClientDetails from './Components/LUC/LUC_ClientDetails/LUC_ClientDetails';
import CBDeviationData from './Components/CBDeviation/CBDeviationData';
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
              <Route exact path='cbdeviation' element = {<CBDeviationData/>}/>
              <Route exact path='luc' element = {<LUC/>}>
                <Route exact path='luc_check' element = {<LUC_Check/>}/>
                <Route exact path='clientlist' element = {<ClientList/>}/>
                <Route exact path='lucclientdetails' element = {<LUC_ClientDetails/>}/>
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
