import "../styles/contact.css";

function Contact() {
  return (
    <section className="contact">
      <h2>Contact Us</h2>

      <p>Address: Pune, Maharashtra</p>
      <p>Phone: +91 9876543210</p>
      <p>Email: tourism@gmail.com</p>

      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Message"></textarea>
        <button>Send</button>
      </form>
    </section>
  );
}

export default Contact;