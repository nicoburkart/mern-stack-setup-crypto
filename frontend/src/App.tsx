import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from 'core/header/header';
import './styles/main.scss';
import { checkIfWalletIsConnected } from 'core/services/wallet.service';
import { useAppDispatch } from 'core/redux/hooks';
import { setAccountPublicAddress } from 'core/redux/slices/accountSlice';
import AppHome from 'modules/home/home';
const App = () => {
  const dispatch = useAppDispatch();

  const init = async () => {
    const address = await checkIfWalletIsConnected();
    if (address) {
      dispatch(setAccountPublicAddress(address));
    }
  };

  init();

  return (
    <Router>
      <div className="App">
        <Header></Header>
        <main>
          <Switch>
            <Route exact path="/" component={AppHome}></Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
