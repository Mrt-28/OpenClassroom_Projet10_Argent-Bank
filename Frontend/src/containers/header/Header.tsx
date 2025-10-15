import HeaderNav from '../../components/header_nav/HeaderNav';
import logo from '../../assets/images/argentBankLogo.png';
import "./header.scss";

const Header = () => {
  return (
    <nav className='header'>
        <a className="header__logo" href="/">
            <img className="header__logo__img" src={logo} alt="Argent Bank Logo" />
        </a>
        <HeaderNav />
    </nav>
  );
};

export default Header;