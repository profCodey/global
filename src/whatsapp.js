import React from "react";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faSquareWhatsapp,
} from "@fortawesome/free-brands-svg-icons";


const WhatsAppButton = ({
  phoneNumber = ["+447862038656", "+447899011270"],
  message = "Hello, I would like to make an enquiry.",
  style,
  fontSize,
  color = "var(--color-secondary)",
}) => {
  //   const handleClick = () => {
  //     const url = `https://wa.me/${phoneNumber}?text=${message}`;
  //     window.location.href = url;
  //   };

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    const newWindow = window.open(url, "_blank");

    if (newWindow) {
      newWindow.opener = null;
    }
  };

  return (
    <Link to="" onClick={handleClick}>
      {style ? (
        <FontAwesomeIcon
          icon={faSquareWhatsapp}
          className="icons"
          style={{ fontSize }}
        />
      ) : (
        <FontAwesomeIcon icon={faWhatsapp} className="icons" />
      )}
    </Link>
  );
};

export default WhatsAppButton;
