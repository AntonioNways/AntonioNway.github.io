import React from 'react';
import { Link } from 'react-router';

function App({ children, routes }) {

  return(
    <div style={{maxWidth: '500px'}}>
      <h2 style={{marginBottom: 0}}>React for GitHub Pages</h2>
      <a href="https://github.com/rafrex/react-github-pages"
        style={{marginBottom: '1em', display: 'block'}}
      >
        https://github.com/rafrex/react-github-pages
      </a>
      <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container-fluid">
          <div class="navbar-header">    
              <button type="button" class="nav_top_margin navbar-toggle collapsed" data-toggle="collapse" data-target="#TopNavBar1" >
              <!-- this will add line in the button-->
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
          </button>
            <a href="#Home" class="Nav_Ant" style="text-decoration:none;">Antonio Ng&nbsp;</a>
          </div>
          <!-- collapse div-->
          <div class="collapse navbar-collapse" id="TopNavBar1">
            <ul class="nav navbar-nav navbar-right nav_top_margin1">
              <li class="">
                <a href="#Home"><span class="sr-only">(current)</span>
                  <span class="glyphicon glyphicon-user" aria-hidden="true"></span>&nbsp; About
                </a>
              </li>
              <li class="">
                <a href="#Portfolio"><span class="sr-only">(current)</span>
                  <span class="glyphicon glyphicon-folder-open" aria-hidden="true"></span>&nbsp; Porfolio
                </a>
              </li>
              <li class="">
                <a href="#Contact_me"><span class="sr-only">(current)</span>
                  <span class="glyphicon glyphicon-envelope" aria-hidden="true"></span>&nbsp; Contact
                </a>
              </li>
            </ul>
            <ul class="nav navbar-nav navbar-centre nav_top_margin1">
                <a class="navbar-brand" href="https://ca.linkedin.com/in/antonio-ng-cpa-cma-7b8a6949" target="_blank"><span class="sr-only">(current)</span>
                  <img alt="Linkedin" src="http://www.freeiconspng.com/uploads/linkedin-icon-1.png" class="icon_size">
                </a>
                <a class="navbar-brand" href="https://github.com/AntonioNways" target="_blank"><span class="sr-only">(current)</span>
                  <img alt="GitHub" src="http://www.freeiconspng.com/uploads/github-logo-icon-5.png" class="icon_size">
                </a>
                <a class="navbar-brand" href="https://www.freecodecamp.com/antonionways" target="_blank"><span class="sr-only">(current)</span>
                  <img alt="FreeCodeCamp" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/231853/freecodecamp.png" class="icon_size">
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {children}
    </div>
  );
}

export default App;
