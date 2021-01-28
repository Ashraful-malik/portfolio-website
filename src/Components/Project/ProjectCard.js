import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { FiCode } from "react-icons/fi";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  buttonSpacing: {
    marginRight: "1rem",
  },
});
export default function ProjectCard({
  aboutProject,
  image,
  projectName,
  buttonName,
  link,
}) {
  const [readMore, setReadMore] = useState(false);
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root} elevation={7}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="project Image"
            height="150"
            image={image}
            title="project Image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {projectName}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {readMore ? aboutProject : `${aboutProject.substring(0, 80)}...`}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            className={classes.buttonSpacing}
            variant="contained"
            size="small"
            color="primary"
            href={link}
            target="_blank"
            rel="noreferrer"
            startIcon={<FiCode />}
          >
            {buttonName}
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={() => {
              setReadMore(!readMore);
            }}
          >
            {readMore ? "Show less" : "Read More"}
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
