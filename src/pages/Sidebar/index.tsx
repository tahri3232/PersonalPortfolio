import React from "react";
import './index.css'
import Tahir from '../../assets/images/Tahir.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import {
  faFacebookF,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
const SideBar =()=>{
    return (
      <>
        <div className="sidebar"  style={{display:"flex", flexDirection:"column", justifyContent:"space-between"}}>

          <div className="log_content">
            <div className="Logo">
              <img src={Tahir} alt="" />
            </div>
            <div className="headingName">Tahir</div>
            <div className="headingProfession">Software Engineer</div>
          </div>

            <div className="navList">
              <ul>
                <Link to="/" className="custom-link">
                  <li>Home</li>
                </Link>
                <Link to="/skills" className="custom-link">
                  <li>My Skills</li>
                </Link>
                <Link to="/work" className="custom-link">
                  <li>Work</li>
                </Link>
                <Link to="/contact" className="custom-link">
                  <li>Contact</li>
                </Link>
                <Link to="/blog" className="custom-link">
                  <li>Blog</li>
                </Link>
              </ul>
            </div>

          <div className="social">
            <span className="social-span">
              <FontAwesomeIcon icon={faFacebookF} />
            </span>
            <span className="social-span">
              <FontAwesomeIcon icon={faLinkedin} />
            </span>
            <span className="social-span">
              <FontAwesomeIcon icon={faGithub} />
            </span>
          </div>

        </div>  
      </>
    );
}

export default SideBar;