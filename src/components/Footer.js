import React from "react";

const Footer = () => {
    const year = new Date().getFullYear();
  
    return <footer>{`Copyright © Elite Residency ${year}`}</footer>;
  };
  
  export default Footer;