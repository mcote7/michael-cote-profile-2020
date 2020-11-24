import React, {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';

import '../../css/navbar.css';

import SpeechNavigation from './SpeechNavigation';


const NavBar = ({history}) => {

  const [loading, setLoading] = useState(true);
  const [showHomeButton, setShowHomeButton] = useState(false);
  useEffect(() => {
    setTimeout(()=> {
      setLoading(false);
      setShowHomeButton(false);
    }, 9000)
  },[]);

  const [navtoggle, setNavtoggle] = useState(false);
  const [navtoggleIcon, setNavtoggleIcon] = useState("bars");
  const [navtoggleBackgroundcolor, setNavtoggleBackgroundcolor] = useState("hsl(193, 95%, 48%)");
  const [navtoggleClippath, setNavtoggleClippath] = useState("polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)");
  useEffect(() => {
    if(navtoggle) {
      setNavtoggleIcon("chevron-circle-down");
      setNavtoggleBackgroundcolor("hsl(193, 95%, 68%)");
      setNavtoggleClippath("polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)")
    }
    else if(!navtoggle) {
      setNavtoggleIcon("bars");
      setNavtoggleBackgroundcolor("hsl(193, 95%, 48%)");
      setNavtoggleClippath("polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)");
    }
  },[navtoggle]);

  useEffect(() => {
    const targetnavbar = document.getElementById("navbarText");
    setTimeout(() => {
      if(targetnavbar !== null && !targetnavbar.classList.contains("show")) {
        setNavtoggle(false);
      }
    }, 1500);
  },[history.location]);

  useEffect(() => {
    if(history.location.pathname === '/michael-cote-profile-2020') {
      setShowHomeButton(false);
    }
    else {
      setShowHomeButton(true);
    }
  },[history.location.pathname]);

  if(loading) return null;
  return (
    <nav id="myNavbar" className="navbar fixed-bottom navbar-expand-xl myNavBar">

      <div className="homeButtonWrap">
      {showHomeButton ?
        <NavLink className="homeButton" to="/">
          <span><i className="fa fa-home fa-2x" aria-hidden="true"></i></span>
        </NavLink> :
        <div className="homeButtonActivePlaceholder"></div>}
      </div>

      <button 
        onClick={()=>{setNavtoggle(!navtoggle)}}
        style={{clipPath: `${navtoggleClippath}`, backgroundColor: `${navtoggleBackgroundcolor}`}}
        className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span><i className={`fa fa-${navtoggleIcon} barsIcon`} aria-hidden="true"></i></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarText">

        <ul className="navbar-nav m-auto">

          <li className="nav-item">

            {/* --- test new NavLink HERE --- */}
            
            <NavLink activeClassName="myNavLinks-on" className="myNavLinks" to="/technical">
            <span><i className="fa fa-cog" aria-hidden="true"></i></span>&nbsp;Technical</NavLink>
            
            {/*  */}
          </li>


          <li className="nav-item">
            <NavLink activeClassName="myNavLinks-on" className="myNavLinks" to="/education">
            <span><i className="fa fa-graduation-cap" aria-hidden="true"></i></span>&nbsp;Education</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="myNavLinks-on" className="myNavLinks" to="/projects">
            <span><i className="fa fa-th-list" aria-hidden="true"></i></span>&nbsp;Projects</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="myNavLinks-on" className="myNavLinks" to="/resume">
            <span><i className="fa fa-file-text-o" aria-hidden="true"></i></span>&nbsp;Resume</NavLink>
          </li>

        </ul>

        <div className="speechNavigationWrap">
          <SpeechNavigation history={history}/>
        </div>

      </div>

    </nav>
  );
};
export default NavBar;