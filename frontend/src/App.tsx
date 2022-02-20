import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from 'core/header/header';
import HomeHero from 'modules/home/components/hero/hero';
import './styles/main.scss';
const App = () => {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Switch>
          <Route exact path="/" component={HomeHero}></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
