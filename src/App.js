import './App.css';
import Navbar from './Navbar';
import CV from './CV';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import ReactJS from './Courses/reactJS';


function App() {

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/CV'>
              <CV/>
            </Route>
            <Route path='/Course/ReactJS'>
              <ReactJS/>
            </Route>
            <Route path='/Course/Full-Stack'>
              <fullStack/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
