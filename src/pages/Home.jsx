import { Button, Typography } from "@mui/material";
import React from "react";
import { GiOlive } from "react-icons/gi";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import { Link } from "react-router-dom";

const images = [
  {
    url: "/static/images/buttons/breakfast.jpg",
    title: "Weddings",
    width: "40%",
  },
  {
    url: "/static/images/buttons/burgers.jpg",
    title: "Birthdays",
    width: "30%",
  },
  {
    url: "/static/images/buttons/camera.jpg",
    title: "Camera",
    width: "30%",
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 200,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0, // <-- Make fully transparent
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

const Home = () => {
  return (
    <>
      <Typography variant="h2" align="center" color="pink">
        <b>
          WELCOME TO OLIVE EVENTS
          <GiOlive />
        </b>
      </Typography>

      <Typography
        style={{ marginTop: "10px" }}
        variant="h5"
        color="white"
        align="center"
      >
        Your trusted partner for unforgettable event experiences.
      </Typography>

      <Box
        sx={{ display: "flex", flexWrap: "wrap", minWidth: 300, width: "100%" }}
      >
        {images.map((image) => (
          <ImageButton
            focusRipple
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={(theme) => ({
                  position: "relative",
                  p: 4,
                  pt: 2,
                  pb: `calc(${theme.spacing(1)} + 6px)`,
                })}
              >
                {image.title}
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </Image>
          </ImageButton>
        ))}
      </Box>

      <Typography
        style={{ marginTop: "5px" }}
        variant="h3"
        align="center"
        color="white"
      >
        About
      </Typography>
      <Typography
        style={{ padding: "80px" }}
        variant="h5"
        align="center"
        color="pink"
      >
        Olive Events is a modern event management platform designed to make
        planning and organizing events simple, fast, and enjoyable. Whether it’s
        a wedding, corporate meetup, birthday party, or festival — we help you
        manage everything efficiently.
      </Typography>

      <Typography variant="h5" align="center" color="pink">
        Ready to plan your next event? <br />
        Start organizing with Olive Events today!
        <br />
        <br />
         <Link to="/addevents">
        <Button color="secondary">Add New Event</Button>
      </Link>
      </Typography>
    </>
  );
};

export default Home;
