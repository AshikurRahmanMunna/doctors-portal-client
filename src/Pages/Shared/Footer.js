import React from "react";
import { Link } from "react-router-dom";
import footerBg from "../../assets/images/footer.png";

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <footer
      style={{
        background: `url(${footerBg})`,
        backgroundSize: "cover",
        backgroundPosition: 'center'
      }}
      class="p-10"
    >
      <div className="footer">
        <div>
          <span class="footer-title">Services</span>
          <Link to="/" class="link link-hover">
            Branding
          </Link>
          <Link to="/" class="link link-hover">
            Design
          </Link>
          <Link to="/" class="link link-hover">
            Marketing
          </Link>
          <Link to="/" class="link link-hover">
            Advertisement
          </Link>
        </div>
        <div>
          <span class="footer-title">Company</span>
          <Link to="/" class="link link-hover">
            About us
          </Link>
          <Link to="/" class="link link-hover">
            Contact
          </Link>
          <Link to="/" class="link link-hover">
            Jobs
          </Link>
          <Link to="/" class="link link-hover">
            Press kit
          </Link>
        </div>
        <div>
          <span class="footer-title">Legal</span>
          <Link to="/" class="link link-hover">
            Terms of use
          </Link>
          <Link to="/" class="link link-hover">
            Privacy policy
          </Link>
          <Link to="/" class="link link-hover">
            Cookie policy
          </Link>
        </div>
      </div>
      <div className="my-10 text-center">
        <p>Copyright © {year} - All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
