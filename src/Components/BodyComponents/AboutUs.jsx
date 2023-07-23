import { Box, Container, Grid, Hidden } from "@material-ui/core";
import React from "react";
import { useStyles } from "./BodyStyles";
import image from "../../images/About.jpg";
import { RenderSectionHeading, CardMedia } from "../common/commonComponent";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import PermDeviceInformationIcon from "@material-ui/icons/PermDeviceInformation";
import ToysIcon from "@material-ui/icons/Toys";
import SchoolIcon from '@mui/icons-material/School';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import DashboardIcon from "@material-ui/icons/Dashboard";

import ScrollAnimation from "react-animate-on-scroll";

export default function AboutUs() {
  const classes = useStyles();

  const cardMediaData = [
    {
      title: " Web Development",
      description: "As a web developer, my objective is to create user-friendly and efficient websites that are visually appealing and easy to navigate. I utilize my skills in HTML, CSS, JavaScript, and Node.js to develop websites that meet all the requirements of the client",
      icon: <DashboardIcon />,
    },
    {
      title: "React developer",
      description: "Front-end developer with proven ability to design and develop JavaScript-based applications for web or mobile environments. Strong knowledge of React.",
      icon: <PermDeviceInformationIcon />,
    },
   {
      title: "Technical Skills",
      description: " I Possess these Skills HTML , CSS , Javascript , React.Js , MySQL , Github",
      icon: <CastForEducationIcon/>,
    },
    {
      title: "Education",
      description: "I have completed my btech in Computer Science from Faculty of Enginnering & Technology Agra college Agra in 2023",
      icon: <SchoolIcon/>,
      },
    {
      title: "Web Design",
      description: "The most modern website design with interactive UI/UX.",
      icon: <AcUnitIcon />,
    },
    // {
    //   title: "Education",
    //   description: "The most modern website design with interactive UI/UX.",
    //   icon: <ToysIcon />,
    // },
   
  ];
  return (
    <Box className={classes.section} id='About'>
      <ScrollAnimation animateIn='fadeIn'>
        <Container>
          <Grid container spacing={1}>
            <Grid item sm={5}>
              <Box component={Hidden} xsDown>
                <img
                  src={image}
                  alt=' about us'
                  className={classes.responsiveImg}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={7}>
              {RenderSectionHeading({
                smallText: "ABOUT ME",
                heading: "Hello I'm Parul lawaniya and Frontend Developer",
                description:
                  // "I'm Frontend Developer from India,I build apps with a focus on React.Js.",
                  "Hi! My name is Parul lawaniya. I am a Web Developer, and I'm very passionate and dedicated to my work.I have acquired the skills and knowledge necessary to make your project a success."
              })}
              <br />
              {/* {CardMedia({
              label: "labae1",
              Desc: "Desc1",
              Icon: <AcUnitIcon />,
            })} */}
              <Grid container>
                {cardMediaData.map((item, i) => (
                  <Grid item xs={12} sm={6} key={i}>
                    {CardMedia({
                      label: item.title,
                      Desc: item.description,
                      Icon: item.icon,
                    })}
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </ScrollAnimation>
    </Box>
  );
}
