import React from 'react';

const Title = ({light, handleSnowRate, letItSnow, blizzard}) => {
  

  return (<>
    <div className="row mx-0 mt-1 title-row">
      <div className="col-12">
        <h1 className="titleName">M{light?
          <span className="yellowWar blinky">i</span>:
          <span className="titleNameSpec">i</span>}chael Cote
        </h1>
        <p className="titleSub">
          <span style={{color: 'white', letterSpacing: 0}}>&#8943;&#8886;</span>
          &nbsp;WEB DEVELOPER IN 2021
          <span style={{color: 'white', letterSpacing: 0}}>&#8887;&#8943;</span>
        </p>
      </div>
    </div>

    <div className="row snow-row">
      <div className="col-md-6 mx-auto">
        {letItSnow?
        <div className="snow-wrap">
          <span className="snow-range">
            <label title={blizzard?`Blizzard`:`Snow`} htmlFor="snow">
              {blizzard?<span><i style={{color: 'rgb(96, 217, 251)', transform: 'rotate(90deg)'}}
                className="fa fa-snowflake-o snow-icon" aria-hidden="true"></i></span>:
              <span><i className="fa fa-snowflake-o snow-icon" aria-hidden="true"></i></span>}
            </label>
            <input title={blizzard?`Blizzard`:`Snow`} type="range" min="25" max="99"
            onChange={(e)=>{handleSnowRate(e)}} className="form-control-range snow-input"/>
          </span>
        </div>:<div style={{height: '5rem'}}></div>}
      </div>
    </div>
</>
  );
};
export default Title;