import "../styles/packages.css";

function Packages() {
  return (
    <section className="packages">
      <h2>Tour Packages</h2>

      <div className="package">
        <h3>Goa Tour</h3>
        <p>Duration: 3 Days</p>
        <p>Price: ₹8000</p>
        <p>Enjoy beaches and nightlife.</p>
      </div>

      <div className="package">
        <h3>Manali Tour</h3>
        <p>Duration: 5 Days</p>
        <p>Price: ₹12000</p>
        <p>Experience snow and mountains.</p>
      </div>

      <div className="package">
        <h3>Kerala Tour</h3>
        <p>Duration: 4 Days</p>
        <p>Price: ₹10000</p>
        <p>Explore backwaters and nature.</p>
      </div>

      <div className="package">
        <h3>Rajasthan Tour</h3>
        <p>Duration: 6 Days</p>
        <p>Price: ₹15000</p>
        <p>Visit royal palaces and deserts.</p>
      </div>

    </section>
  );
}

export default Packages;