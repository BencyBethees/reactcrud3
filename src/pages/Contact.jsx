import { Typography } from "@mui/material";
import React from "react";

const Contact = () => {
  return (
    <div
      
    >
      <Typography style={{marginTop:"30px"}} variant="h3" align="center" color="pink">
        Contact As:
      </Typography>{" "}
      <br />
      <br />
      <div
        style={{
          width: "300px",
          height: "380px",
          backgroundColor: "pink",
          color: "white",
          margin: "50px",
          textAlign: "center",
          marginLeft: "460px",
          padding: "40px",
        }}
      >
        <input type="text" name="" id="" placeholder="enter your name" /> <br />
        <br />
        <input type="text" name="" id="" placeholder="phone number" />
        <br />
        <br />
        <textarea name="" id="" placeholder="message"></textarea> <br />
        <br />
        <button className="btn btn-success">Submit</button> <br />
        <br />
        <button className="btn btn-primary">Reset</button>
      </div>
    </div>
  );
};

export default Contact;
