import React from 'react';
import { Link } from 'react-router';

function Home() {
  return (
    <div className="nav_pad container">
      <div className="col-md-1"></div>
      <div className="col-md-10">
      <div className="col-md-5">
        <img src="http://via.placeholder.com/300x400"/>
      </div>  

      <div className="col-md-7">
        <div className="col-md-12">
        <h2>Antonio Ng</h2>  
              <h4> Acountant (CPA, CMA) and Programmer</h4>
              <p>In my 4 years of accounting experience, I had used my knowledge of Excel, SQL, and VBA to enhance the overall accounting system at work by automating multiple functions. From this experience, I became interested and started to learn programming. From there, I have learned Python, Django, HTML, and CSS. As of now, I am learning to program from Free Code Camp. </p>
              <p>I am currently seeking for opportunities initiaives. Please contact me at Siiv3rd@gmail.com!</p>
              <br></br>
        </div>
        <div className="col-md-4">
            <a href="#"><img src="http://via.placeholder.com/80x80"/></a>
            <h3>React Apps</h3>
        </div>
        <div className="col-md-4">
          <a href="#"><img src="http://via.placeholder.com/80x80"/></a>
          <h3>Games</h3>
        </div>
        <div className="col-md-4">
          <a href="#"><img src="http://via.placeholder.com/80x80"/></a>
          <h3>Apps</h3>
        </div>

      </div>
      <div className="col-md-12">
        <h2>My Story</h2>
      </div>
      </div>
      <div className="col-md-1"></div>
    </div>
  );
}

export default Home;
