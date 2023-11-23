import './App.css';
import ButtonAppBar from './components/navbar/navbar';
import TemporaryDrawer from './components/sidebar/sidebar';
import Dashboard from './components/dashboard/dashboard';
import Analytics from './components/analytics/analytics';
import Surveys from './components/surveys/surveys';
import Reports from './components/reports/reports';
import Settings from './components/settings/settings';
import Profile from './components/profile/profile';
import User from './components/user/user';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom"
function App() {
  sum(3,5)
  function sum(a,b){
    console.log(a,b)
  }

  return (
    <Router>
        <div className='App'>
          <ButtonAppBar></ButtonAppBar>
          <Routes>
            <Route path='/dashboard' element={<Dashboard/>}></Route>
            <Route path='/analytics' element={<Analytics/>}></Route>
            <Route path='/surveys' element={<Surveys/>}></Route>
            <Route path='/reports' element={<Reports/>}></Route>
            <Route path='/settings' element={<Settings/>}></Route>
            <Route path='/profile' element={<Profile/>}></Route>
            <Route path='/user' element={<User/>}></Route>
          </Routes>
        </div>
    </Router>
    
  );
}

export default App;
