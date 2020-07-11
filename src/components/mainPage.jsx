import React from 'react';
import self from '../images/self1_edited.jpg';
import '../css/main.css';

const MainPage = () => {
  return (
    <React.Fragment>
      <div className="titleCont col-xl-12">
        <h1 className="titleName">M<span className="yellowWar titleName">i</span>chael P Cote</h1>
        <p className="titleSub ml-3"> web developer in &nbsp;2020</p>
        <div className="titleLinks">
          <p className="ml-3 linkedin"><span><i className="fa fa-github-square fa-2x" aria-hidden="true"></i></span>
          &nbsp;<a className="titleAtag" target="_blank" rel="noopener noreferrer"
          href="https://github.com/mcote7">www.github.com/mcote7</a></p>
          <p className="ml-3 linkedin"><span><i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></span>
          &nbsp;<a className="titleAtag" target="_blank" rel="noopener noreferrer"
          href="https://linkedin.com/in/michael-cote-wa">www.linkedin.com/in/michael-cote-wa</a></p>
          <p className="ml-3 linkedin"><span><i className="fa fa-facebook-square fa-2x" aria-hidden="true"></i></span>
          &nbsp;<a className="titleAtag" target="_blank" rel="noopener noreferrer"
          href="https://facebook.com/profile.php?id=100012957396194">www.facebook.com/mikec</a></p>
        </div>
      </div>
      <div className="titleQuote col-xl-7">
        <img src={self} className="mySelf rounded-circle float-right ml-3" alt="self"/>
        <h4 className="quote">~ 
          Dedicated and motivated professional seeking an opportunity to showcase my creative and 
          technical proficiency.  My goal is to attain a position which will provide an opportunity 
          for growth and personal development, as well as the opportunity to expand my knowledge.
        </h4>
      </div>
    </React.Fragment>
  );
}
export default MainPage;