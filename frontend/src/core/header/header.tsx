import './header.scss';

import {
  resetAccount,
  setAccountName,
  setAccountPublicAddress,
} from '../redux/slices/accountSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { Link } from 'react-router-dom';

function Header() {
  const account = useAppSelector((state) => state.account);
  const dispatch = useAppDispatch();

  return (
    <nav id="nav" className="container">
      <Link to="/">
        <h1 className="logo header">WebsiteName</h1>
      </Link>
      <div className="right-align">
        {account.publicAddress === '' && (
          <button className="secondary-btn">Connect Wallet</button>
        )}
        {account.publicAddress !== '' && (
          <Link to="/profile">
            <div className="avatar">
              <img
                src={
                  'http://localhost:8080/avatars/' +
                  account.publicAddress +
                  '.png'
                }
                alt="avatar"
              />
            </div>
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Header;
