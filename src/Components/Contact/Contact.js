import React from "react";
import "./Contact.css";
import '../../index.css'
import msg_icon from "../../Assets/Img/msg-icon.png";
import white_arrow from "../../Assets/Img/white-arrow.png";
// import { Link } from "react-router";

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "db470873-fc1d-4453-81d1-c15e3e821227");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
{/* 1e1cf043efc118e27bc0a0388f9529b0b4bd77ac */}
      <div className="contact-col">
        <h2>
          Send a Message <img src={msg_icon} alt="" />
        </h2>
        <p>Reach out through the contact form to send a message.</p>
        {/* <Link className='btn' to="/">Back</Link> */}
      </div>


      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />
          <label>Write your message here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter Your Message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit Now <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
}

