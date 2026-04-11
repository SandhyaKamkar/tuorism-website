import "../styles/home.css";
import banner from "../assets/images/banner.png";

function Home() {
  return (
    <section className="home">
      <img src={banner} alt="tourism banner" />
      <h2>Discover Beautiful Places</h2>
      <p>Your journey begins here</p>
    </section>
  );
}

export default Home;
