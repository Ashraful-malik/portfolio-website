import React from "react";
import { Link } from "react-router-dom";
import { Grid, Container, Typography } from "@material-ui/core";
import { SiTwitter } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import style from "./Footer.module.css";
function Footer() {
  return (
    <>
      <div className={style.footer}>
        <Container>
          <Grid container spacing={2}>
            <Grid item sm={7}>
              <Link to="/" className={style.logo}>
                Ashraful Malik
              </Link>
            </Grid>
            <Grid item sm={4} id={style.centerDiv}>
              <div className={style.socialMedia_Link}>
                <a
                  href={"https://www.instagram.com/ashraful_malik_/"}
                  target="_blank"
                  rel="noreferrer"
                  id={style.instagram}
                >
                  <AiFillInstagram />
                </a>
                <a
                  href={"https://github.com/Ashraful-malik"}
                  target="_blank"
                  rel="noreferrer"
                  id={style.github}
                >
                  <AiOutlineGithub />
                </a>
                <a
                  href={"https://twitter.com/Ashrafu10098684"}
                  target="_blank"
                  rel="noreferrer"
                  id={style.twitter}
                >
                  <SiTwitter />
                </a>
              </div>
            </Grid>
          </Grid>
          <Typography
            variant="body1"
            align="center"
            style={{ marginTop: "1rem" }}
          >
            Ashraful Malik © 2021 All Rights Reserved.
          </Typography>
        </Container>
      </div>
    </>
  );
}

export default Footer;
