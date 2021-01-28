import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import myImage from "../img/MyImage.png";
import { FiInstagram } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { SiJavascript, SiReact, SiHtml5, SiCss3 } from "react-icons/si";

import style from "./homePage.module.css";
function HomePage() {
  return (
    <>
      <div className={style.home_color}>
        <Container>
          <div className={style.home}>
            <Grid container>
              <Grid item sm={5}>
                <div className={style.image}>
                  <img src={myImage} alt="img" />
                </div>
              </Grid>
              <Grid item sm={5}>
                <div id={style.Personal_text}>
                  <Typography variant="h6" gutterBottom>
                    HELLO EVERYONE I AM
                  </Typography>
                  <h2>
                    Ashraful <br />
                    Malik
                  </h2>
                  <Typography>
                    I am a creator of this website I am a 14-year-old boy from
                    India just learning to code and build amazing stuff and
                    start my own business.
                  </Typography>

                  <ul className={style.list}>
                    <li>
                      <a href={"mailto:ashrafulmalik71@gmail.com"}>
                        <div className={style.icons}>
                          <AiOutlineMail />
                        </div>
                        ashrafulmalik71@gmail.com
                      </a>
                    </li>
                    <li>
                      <a>
                        <div className={style.icons}>
                          <AiOutlineHome />
                        </div>
                        Daltonganj ,Jharkhand,India
                      </a>
                    </li>
                  </ul>
                </div>
                <div className={style.logo}>
                  <a
                    href={"https://www.instagram.com/ashraful_malik_/"}
                    target="_blank"
                    rel="noreferrer"
                    id={style.instagram}
                  >
                    <FiInstagram />
                  </a>
                  <a
                    href={"https://github.com/Ashraful-malik"}
                    target="_blank"
                    rel="noreferrer"
                    id={style.github}
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={"https://twitter.com/Ashrafu10098684"}
                    target="_blank"
                    rel="noreferrer"
                    id={style.twitter}
                  >
                    <FiTwitter />
                  </a>
                </div>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
      {/* about page */}
      <div className={style.about_section}>
        <Container>
          <Grid container>
            <Grid item sm={8} lg={6}>
              <h2>About Me</h2>
              <Typography gutterBottom variant="body1">
                Hello everyone my self Ashraful Malik I a student and I love to
                code and building things that help people. Currently, I am
                working with the JavaScript framework (React ) and Learn backend
                technology.
              </Typography>
            </Grid>
            <Grid item sm={4} lg={6}>
              <h2>My Skills</h2>
              <div className={style.languageIcon}>
                <SiJavascript />
                <SiReact />
                <SiHtml5 />
                <SiCss3 />
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default HomePage;
