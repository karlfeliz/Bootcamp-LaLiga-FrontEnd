import "./Header.scss";
import { NavLink } from "react-router-dom";

const Header = (): JSX.Element => {
  return (
    <header className="header">
      <NavLink to="/" className="header__title">
        <h1 className="header__title-text">| FOOTBALL MANAGER </h1>
      </NavLink>
      <NavLink to="/login">
        <button className="header__login">LOGIN / REGISTRO</button>
      </NavLink>
    </header>
  );
};

export default Header;
