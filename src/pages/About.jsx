import { Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <>
      <Typography
        style={{ margin: "30px" }}
        variant="h4"
        align="center"
        color="pink"
      >
        🌿 About Olive Events
      </Typography>

      <Typography style={{ color: "white", textAlign:"center"}}>
        Olive Events is your trusted partner in creating unforgettable moments.
        We specialize in planning, organizing, and managing all types of events
        with creativity, precision, and passion. Whether it’s a wedding,
        birthday celebration, corporate event, or a cultural program, we ensure
        every detail is handled with care.
        <br />
        <br />
        At Olive Events, we believe every occasion deserves a unique touch. Our
        team works closely with clients to understand their vision and transform
        it into a beautiful and memorable experience.
        <br />
        <br />
        <Typography variant="body1">⭐ What We Offer</Typography> <br />
        <br />
        ✔️ Event Planning & Coordination <br />
        <br />
        ✔️ Venue & Decoration Management <br />
        <br />
        ✔️ Custom Themes & Designs <br />
        <br />
        ✔️ Entertainment & Catering Support <br />
        <br />
        ✔️ On-site Event Supervision <br />
        <br />
        <Typography variant="body1">🌟 Our Promise</Typography> <br />
        <br />
        We focus on quality, reliability, and customer satisfaction. With
        creativity at our core, we aim to make every event stress-free, elegant,
        and truly special.
        <br />
        <br />
        Let Olive Events bring your dream event to life — Where moments become
        memories.
      </Typography>
    </>
  );
};

export default About;
