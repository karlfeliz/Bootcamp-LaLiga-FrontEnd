import "./HomePage.scss";
import Header from "../../components/Header/Header";

const HomePage = (): JSX.Element => {
  return (
    <div className="home-page">
      <Header />
      <h1>This is a home page</h1>
      <div className="info-container"></div>
      <div className="info-container"></div>
    </div>
  );
};

export default HomePage;
