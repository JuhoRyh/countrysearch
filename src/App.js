import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home'
import Country from './Pages/Country'

const App = () => {
  return(
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/:isocode">
          <Country /> 
        </Route>
      </Switch>
    </Router>

  )
}

export default App;
