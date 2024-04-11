import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import woman from "../../assets/images/woman.jpeg";
import "./HomePage.scss";
import HomeFeatures from "../../components/HomeFeatures/HomeFeatures";
import WhyComp from "../../components/WhyComp/WhyComp";

function HomePage() {
  return (
    <section className="overall">
      <Header />
      <div className="home">
        <div className="home__textarea">
          <h1 className="home__title">Provoke. En Vogue. Provogue.</h1>
          <p className="home__subtext">Stirring Style. Evoking Elegance.</p>
          <button className="home__btn">GET STARTED</button>
        </div>
        <img src={woman} alt="hero" className="home__hero" />
      </div>
      <HomeFeatures />
      <WhyComp />
      <Footer />
    </section>
  );
}

export default HomePage;
