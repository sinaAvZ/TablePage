import './App.css';
import TournomnentPage from './container/TrounomentPage';
import { Route, BrowserRouter, Switch, Link } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={() => <Link to='/tournoment'>tournoment</Link>} />
          <Route path='/dsadas' exact component={() => <Link to='/tournoment'>tournoment</Link>} />
          <Route path='/tournoment'  >
            <TournomnentPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
