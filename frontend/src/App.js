import './App.css';
import HomePage from './App/Pages/HomePage';
import {Route, Switch, useLocation} from 'react-router-dom'
import PageNotFound from './App/Pages/PageNotFound';
import 'semantic-ui-css/semantic.min.css'
import SignIn from './App/Pages/SignIn';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Navbar from './App/Component/Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path = "/" component = {HomePage}/>
        <Route exact path = "/signIn" component = {SignIn}/>
        <Route component = {PageNotFound}/>
      </Switch>
    </>
  );
}

export default App;
