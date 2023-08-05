import React from "react";
import {useRef} from "react";
import emailjs from "emailjs-com";
import "./contact.css";
import {
  AiOutlineMail,
  AiOutlineLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2l35hph",
        "template_ie5yia8",
        form.current,
        "W0I1fuD0isR1sXp9Q"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>With me </h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <AiOutlineMail className="contact_option_icon" />
            <h4>Email</h4>
            <h5>yuvraj2172@gmail.com</h5>
            <a href="mailto:yuvraj2172@gmail.com">Send a message</a>
          </article>
          <article className="contact_option">
            <AiOutlineLinkedin className="contact_option_icon" />
            <h4>Linkedin</h4>

            <a
              href="https://www.linkedin.com/in/yuvraj-soni-5483aa206/"
              target="_blank"
            >
              Connect with me
            </a>
          </article>
          <article className="contact_option">
            <AiOutlineWhatsApp className="contact_option_icon" />
            <h4>Whatsapp</h4>
            <h5>+917417560089</h5>
            <a
              href="https://api.whatsapp.com/send?phone=7417560089"
              target="_blank"
            >
              Contact me
            </a>
          </article>
          <form ref={form} onSubmit={sendEmail} >
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              {" "}
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
