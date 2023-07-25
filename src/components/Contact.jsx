import Particle from "./Particle";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    toast.info("Email is sending...", { autoClose: true });
    emailjs
      .sendForm(
        "service_am5rvjf",
        "template_eviw649",
        form.current,
        "QPgjShn0Gwpuvdthd"
      )
      .then(
        (result) => {
          // console.log(result.text);
          toast.success("Email sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send email!");
        }
      );
  };
  return (
    <>
      <Particle />
      <div className="contact-page">
        <div class="main">
          <form ref={form} onSubmit={sendEmail}>
            <span> Contact Me</span>
            <label for="">
              <input type="text" placeholder="Your Name" name="from_name" />
            </label>
            <label for="">
              <input type="email" placeholder="Your Email" name="from_email" />
            </label>
            <textarea placeholder="Your Message" name="message"></textarea>
            <input type="submit" value="Send" className="do-submit" />
          </form>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default Contact;
