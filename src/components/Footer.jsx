import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} Chirag Bhayana</p>
    </footer>
  );
}

export default Footer;
