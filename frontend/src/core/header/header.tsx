import './header.scss';

import {
  resetAccount,
  setAccountName,
  setAccountPublicAddress,
} from '../redux/slices/accountSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { Link } from 'react-router-dom';

import { connectWallet } from 'core/services/wallet.service';

const Header = () => {
  const account = useAppSelector((state) => state.account);
  const dispatch = useAppDispatch();

  const handleWalletConnect = async () => {
    const result = await connectWallet();
    console.log(result);
    if (!result) {
      return;
    }
    dispatch(setAccountPublicAddress(result));
  };

  return (
    <nav id="nav" className="container">
      <Link to="/">
        <h1 className="logo header">WebsiteName</h1>
      </Link>
      <div className="right-align">
        {account.publicAddress === '' && (
          <button className="secondary-btn" onClick={handleWalletConnect}>
            Connect Wallet
          </button>
        )}
        {account.publicAddress !== '' && (
          <Link to="/profile">
            <div className="">
              <h2>{account.publicAddress}</h2>
            </div>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
