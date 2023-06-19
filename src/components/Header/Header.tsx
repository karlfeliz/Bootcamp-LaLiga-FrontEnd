import "./Header.scss";

const Header = (): JSX.Element => {
  return (
    <header className="header">
      <h1 className="header__title">| FOOTBALL MANAGER </h1>
      <button className="header__login">LOGIN / REGISTRO</button>
    </header>
  );
};

export default Header;

