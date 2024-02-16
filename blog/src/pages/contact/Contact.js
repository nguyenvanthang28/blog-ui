import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <span className="contactTitle">Contact</span>
      <form className="contactForm">
        <label>Email</label>
        <input className="contactInput" type="text" placeholder="Enter your email..." />
        <label>Name</label>
        <input className="contactInput" type="text" placeholder="Enter your name..." />
        <textarea name="" id="" cols="50" rows="10"></textarea>
        <button className="contactButton">Submit</button>
      </form>
    </div>
  );
}


