import React from "react";
import NavLogo from "../assets/nav-logo.png";
import { Link } from "react-router-dom";
import PhoneIcon from "../assets/phone-icon.png";
import MailIcon from "../assets/mail-icon.png";
import TwitterIcon from "../assets/twitter-icon.png";
import InstagramIcon from "../assets/instagram-icon.png";
import LinkedInIcon from "../assets/linkedin-icon.png";
import FacebookIcon from "../assets/facebook-icon.png";
import LocationIcon from "../assets/location-icon.png";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="newsletter">
          {" "}
          <img
            src={NavLogo}
            width={150}
            height={500}
            alt="uptick logo"
            loading="lazy"
          />
          <h6 className="text-lg font-semibold">
            <span id="content1">
              Stay in the loop with the latest industry insights,
            </span>{" "}
            <span id="content2">success stories, and program updates.</span>
            <span id="content3"> Subscribe to our newsletter today!</span>
          </h6>
          <div className="subscribe-form">
            <form>
              <input
                type="email"
                name="newsletter-email"
                placeholder="Enter your email address"
              />
              <button>SUBSCRIBE</button>
            </form>
          </div>
        </div>
        <div className="useful-links">
          <h5>Useful Links</h5>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/jobs">Jobs</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/support">Support</Link>
            </li>
          </ul>
        </div>
        <div className="programs">
          <h5>Our Programs</h5>
          <ul>
            <li>
              <Link to="/programs/beginner">Uptick Talent Beginners</Link>
            </li>
            <li>
              <Link to="/programs/tech">Uptick Talent Tech</Link>
            </li>
            <li>
              <Link to="/programs/business">Uptick Talent Business</Link>
            </li>
            <li>
              <Link to="/programs/map">Uptick Talent Map</Link>
            </li>
          </ul>
        </div>
        <div className="contact-us">
          <h5>Contact Us</h5>
          <ul>
            <li>
              <img
                src={PhoneIcon}
                width={25}
                height={25}
                alt="phone icon"
                loading="lazy"
              />
              <span>+234 9037424764</span>
            </li>
            <li>
              <img
                src={MailIcon}
                width={25}
                height={25}
                alt="mail icon"
                loading="lazy"
              />
              <span>hey@upticktalent.africa</span>
            </li>
            <li>
              <img
                src={LocationIcon}
                width={25}
                height={25}
                alt="location icon"
                loading="lazy"
              />
              <span>
                7A, Hara-Hyel House, Dogon Karfe, Jos, Plateau State, Nigeria
              </span>
            </li>
          </ul>
        </div>
      </div>{" "}
      <div className="footer-end">
        <h6>Copyright © 2023 Uptick Talent All Rights Reserved</h6>
        <div className="footer-socials">
          <Link to="uptick-twitter">
            <img
              src={TwitterIcon}
              width={30}
              height={30}
              loading="lazy"
              alt="twitter icon"
            />
          </Link>
          <Link to="uptick-instagram">
            <img
              src={InstagramIcon}
              width={30}
              height={30}
              loading="lazy"
              alt="instagram icon"
            />
          </Link>
          <Link to="uptick-linkedin">
            <img
              src={LinkedInIcon}
              width={30}
              height={30}
              loading="lazy"
              alt="linkedin icon"
            />
          </Link>
          <Link to="uptick-facebook">
            <img
              src={FacebookIcon}
              width={30}
              height={30}
              loading="lazy"
              alt="facebook icon"
            />
          </Link>
        </div>
        <h6>| Privacy Policy | Terms of Service</h6>
      </div>
    </footer>
  );
};

export default Footer;