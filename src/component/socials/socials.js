import React from "react";
import "./socials.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faSquareInstagram,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import WhatsAppButton from "../../whatsapp";

function Socials({
  fontSize = "2rem",
  gap = "5px",
  justifyContent = "center",
}) {
  let socialIcon = {
    color: "var(--color-secondary)",
    fontSize,
    display: "flex",
    gap,
    justifyContent,
  };
  return (
    <div style={socialIcon}>
      <FontAwesomeIcon icon={faSquareFacebook} style={socialIcon} />
      <FontAwesomeIcon icon={faSquareXTwitter} style={socialIcon} />
      <FontAwesomeIcon icon={faSquareInstagram} style={socialIcon} />
      <span className="ml-0 -mt-2 md: lg:-ml-3 lg:-mt-2">
        <WhatsAppButton style={{}} fontSize={fontSize} />
      </span>
    </div>
  );
}

export default Socials;
