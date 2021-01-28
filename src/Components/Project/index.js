import React from "react";
import { Grid, Container } from "@material-ui/core";
import ProjectCard from "./ProjectCard";
import ProjectData from "./ProjectData";
import style from "./projectstyle.module.css";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import QuotesImg from "../img/QuotesImg.png";
import chat from "../img/chat.png";
import youtubeclone from "../img/youtubeclone.png";
function Projects() {
  return (
    <>
      <div className={style.page_link}>
        <Link to="/" className={style.link}>
          Home
        </Link>
        <IoIosArrowForward />
        <p>Portfolio</p>
      </div>
      <div className={style.title}>
        <h1>My latest Projects</h1>
      </div>
      <Container>
        <div className={style.card}>
          <Grid container spacing={3}>
            <Grid item sm={4}>
              <ProjectCard
                projectName={ProjectData[0].projectName}
                image={QuotesImg}
                aboutProject={ProjectData[0].aboutProject}
                link={ProjectData[0].link}
                buttonName={ProjectData[0].buttonName}
              />
            </Grid>
            <Grid item sm={4}>
              <ProjectCard
                projectName={ProjectData[1].projectName}
                image={youtubeclone}
                aboutProject={ProjectData[1].aboutProject}
                link={ProjectData[1].link}
                buttonName={ProjectData[1].buttonName}
              />
            </Grid>
            <Grid item sm={4}>
              <ProjectCard
                projectName={ProjectData[2].projectName}
                image={chat}
                aboutProject={ProjectData[2].aboutProject}
                link={ProjectData[2].link}
                buttonName={ProjectData[2].buttonName}
              />
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
}

export default Projects;
