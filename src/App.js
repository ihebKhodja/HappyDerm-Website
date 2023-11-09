import './App.css';
import Home from './Pages/Home';
import Checkup from './Pages/Checkup';
import ErrorPage from './Pages/ErrorPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Results from './Pages/Results';
import AboutUs from './Pages/AboutUs';

function App() {
  return (

    <Router >
        <Switch>
          <Route exact path="/">
              <Home />
          </Route>
          <Route path="/checkup">
              <Checkup />
          </Route>
          <Route path="/results">
              <Results />
          </Route>
          <Route path="/about">
              <AboutUs />
          </Route>
          <Route path="*">
              <ErrorPage />
          </Route>
        </Switch>   
    </Router>

    );
}

export default App;
