import { Typography } from "@mui/material";
import React from "react";
import Card from "react-bootstrap/Card";
import { GiOlive } from "react-icons/gi";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";

const Footer = () => {
  return (
    <>
      <Card
        style={{ backgroundColor: "black", color: "white" }}
        className="text-center"
      >
        <Typography variant="h4" style={{ color: "pink", marginTop: "5px" }}>
          {" "}
          <b>
            {" "}
            <i>
              Olive events <GiOlive />
            </i>
          </b>
        </Typography>
        <Card.Body>
          <Typography variant="p">
            your trusted partner for wedding,corporate events, and any events..{" "}
          </Typography>  <br />
          <Typography variant="h5" style={{ color: "pink", marginTop: "5px" }}>
            {" "}
            <b>
              {" "}
              <i>Contacts</i>
            </b>
          </Typography>
          <Card.Text>
            <FaInstagram /> <CiFacebook />
          </Card.Text>
           <p>© 2025 Olive Events | All Rights Reserved</p>
        </Card.Body>
      </Card>
    </>
  );
};

export default Footer;
