import React from "react";
import { Container } from "@material-ui/core";
import style from "./contact.module.css";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
function Contact() {
  return (
    <>
      <div className={style.page_link}>
        <Link to="/" className={style.link}>
          Home
        </Link>
        <IoIosArrowForward />
        <p>Contact</p>
      </div>
      <Container>
        <div className={style.map}>
          <iframe
            title="my Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d82453.34134937827!2d84.01750415511451!3d24.032570874311816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398c77d07575bf15%3A0x6cb6ce98e26ce7fe!2sDaltonganj%2C%20Jharkhand%20822101!5e0!3m2!1sen!2sin!4v1611757953853!5m2!1sen!2sin"
            width="900"
            height="400"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
        <h2>Contact Me</h2>
        <ul id={style.mail}>
          <li>
            <a href={"mailto:ashrafulmalik71@gmail.com"}>
              <div className={style.icons}>
                <AiOutlineMail />
              </div>
              ashrafulmalik71@gmail.com
            </a>
          </li>
        </ul>
      </Container>
    </>
  );
}
export default Contact;
