import React from 'react';
import { Link } from 'react-router';

function Home() {
  return (
    <div className="nav_pad container">
      <div className="row">
        <div className="col-md-12"><br></br></div>
        <div className="col-md-1"></div>
        <div className="col-md-10">
        <div className="col-md-12">
          <div className="col-md-8 HomePicStyle">
            <img src="http://via.placeholder.com/590x300" className="img-responsive ThemeSize"/>
          </div>
          <div className="col-md-4 HomePicStyle">
              <Link to="/example"><img src="http://via.placeholder.com/290x97" className="img-responsive HomeAppSize"/></Link>
              <Link to="/example"><img src="http://via.placeholder.com/290x97" className="img-responsive HomeAppSize"/></Link>
              <Link to="/example"><img src="http://via.placeholder.com/290x97" className="img-responsive HomeAppSize"/></Link>
          </div>
        </div>
        </div>
        </div>
          <div className="">
      <div className="row">
        <div className="col-md-12">
          <div className="col-md-1"></div>
          <div className="col-md-2">
            <br></br>
            <img src="http://via.placeholder.com/290x200" className="img-responsive profileSize"/>
            <h2>Antonio Ng</h2>  
            <h4> Acountant (CPA, CMA) and Programmer</h4>
          </div>
          <div className="col-md-4">
            <br></br>
          <h1>About Me</h1>
          
                <br></br>
                <p>In my 4 years of accounting experience, I had used my knowledge of Excel, SQL, and VBA to enhance the overall accounting system at work by automating multiple functions. From this experience, I became interested and started to learn programming. From there, I have learned Python, Django, HTML, and CSS. As of now, I am learning to program from Free Code Camp. </p>
                <p>I am currently seeking for opportunities initiaives. Please contact me at Siiv3rd@gmail.com!</p>
                <br></br>
          </div>
          <div className="col-md-4">
            <br></br>
            <center><h3>History</h3></center>
          </div>
        </div>
        </div>
        <div className="col-md-1"></div>
      </div>
    </div>
  );
}

export default Home;
