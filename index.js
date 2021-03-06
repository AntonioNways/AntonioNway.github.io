import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import Home from './components/Home';

import Projects from './components/Projects';
import ProjectPane from './components/ProjectPane';
import SelBasic from './components/SelBasic';
import SelReact from './components/SelReact';
import SelD3 from './components/SelD3';

import resumePane from './components/resumePane';

import PageNotFound from './components/PageNotFound';
import ExampleComponent from './components/ExampleComponent';
import ExampleTwoDeepComponent from './components/ExampleTwoDeepComponent';


var currentLink="https://antonionways.github.io";
///DATA to pass down to Children////
var ProjectData= {"Dungeon Crawler":{"img":"https://drive.google.com/uc?export=download&id=0B9ldvGLcmpFzanZKbEJidURrM1E","link":"https://codepen.io/SilverAnt/full/PjVyLB/","detail": "A basic Dungeon Crawler game. Instructions: Travel the Dungeon an beat the boss in Dungeon level 4. (Note: Blue = Player, Red = enemy, Green = HP, Yellow = Weopen Upgrade, Purple = Move to next Dungeon)","type":"React" },
"Game of Life":{"img":"https://drive.google.com/uc?export=download&id=0B9ldvGLcmpFzNUl0cE9JV2EyMzg","link":"https://codepen.io/SilverAnt/full/yXjEKx/","detail": "A simple game with where you can click on a cell to turn it alive or dead. After each generation, the cells will either reproduce or die. For more rules of the game, please refer to https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life","type":"React" }, 
"Tic Tac Toe":{"img":"https://drive.google.com/uc?export=download&id=0B9ldvGLcmpFzOUM3ZnVvaXZQZDQ","link":"https://codepen.io/SilverAnt/full/EWOWvN/","detail": "A basic Tic Tac Toe game","type":"Other" },
"Simon's Game":{"img":"https://drive.google.com/uc?export=download&id=0B9ldvGLcmpFzY2ZEWmh6YTN6MjQ","link":"https://codepen.io/SilverAnt/full/JNERyJ/","detail": "A basic game to test your memory. Try to repeat the pattern given by the computer","type":"Other" },
"Force Directed Graph":{"img":"https://drive.google.com/uc?export=download&id=0B9ldvGLcmpFzMFFqREFfT2t1eFU","link":"https://codepen.io/SilverAnt/full/wqvKrz/","detail": "An interactive Force Directed Graph that connects countries by their borders. For fun, you can drag a country map around and view the effect on its neighbouring countries.","type":"D3" },
"Visualize Data with a Scatterplot Graph":{"img":"https://drive.google.com/uc?export=download&id=0B9ldvGLcmpFzdk8tazBid00tMVE","link":"https://codepen.io/SilverAnt/full/qjzGPQ/","detail": "An interactive scatterplot graph that shows the doping allegations of professional bicycle racing","type":"D3" },
"Recipe Box":{"img":"https://drive.google.com/uc?export=download&id=0B9ldvGLcmpFzV3VDb0xoQUg5ck0","link":"https://codepen.io/SilverAnt/full/LLLZQN/","detail": "A simple recipe box built using React.Js where you can add, edit, and delete recipes.","type":"React" },
"Calculator":{"img":"https://drive.google.com/uc?export=download&id=0B9ldvGLcmpFzcl9CWEt0enBtR1k","link":"https://codepen.io/SilverAnt/full/XMEREj/","detail": "A simple calculator App.","type":"Other" }
}
var allTabStat0={"allTabStat":["active","none","none","none"]}
var allTabStat1={"allTabStat":["none","active","none","none"]}
var allTabStat2={"allTabStat":["none","none","active","none"]}
var allTabStat3={"allTabStat":["none","none","none","active"]}

var profileInfo = {
  "basics": {
      "name": "Antonio Ng",
      "label": "Programmer, B.B.A., CPA, CMA",
      "picture": "",
      "email": "antonion90@gmail.com",
      "phone": "",
      "website": "",
      "summary": "",
      "location": "Markham, ON, Canada"},
    "work": [{
      "company": "Fieldgate",
      "position": "Staff Accountant/Accounting Analyst  ",
      "website": "",
      "startDate": "July 2014",
      "endDate": "March 2017",
      "summary": "Fieldgate is one of top Home Builders within the GTA with over 60 years of experience.",
      "highlights": [
        "Used VBA, Macro, and MS Office to automate annual roll-forward schedules",
        "Used SQL to retrieve and create informative table for analysis purpose",
        "Prepared over 50 accurate and comprehensive financial statements per year",
        "Tested accounting database and new accounting templates"
    ]
  }],

  "education": [{
      "institution": "Free Code Camp",
      "area": "Computer Science",
      "studyType": "Certificate",
      "startDate": "May 2017",
      "endDate": "July 2017",
      "gpa": "",
      "courses": [
      "Front-end development Certificate", "Data-Visualization Certificate"
    ]
  },{
      "institution": "Chartered Professional Accountants of Canada",
      "area": "Accounting & Management",
      "studyType": "Designation (CPA,CMA)",
      "startDate": "October 2015",
      "endDate": "Current",
      "gpa": "",
      "courses": []
  },{
      "institution": "University of Toronto",
      "area": "Accounting & Management",
      "studyType": "B.B.A with Distinction",
      "startDate": "September 2008",
      "endDate": "June 2012",
      "gpa": "4.0",
      "courses": []
  }],

  "skills": [{
      "name": " Technical Skills",
      "level": "Master",
      "keywords": [
        "React", "D3", "SQL","Node","HTML","Bootstrap","CSS","Javascript","MS Office and Excel"
    ]
  },{
      "name": "Soft Skills",
      "level": "Excellent",
      "keywords": [
        "Analytical and problem solving", "Communication", "Interpersonal","Leadership",
        "time management",  "Prioritization", "Attention-to-details"
    ]
  },{
      "name": "Others",
      "level": "Excellent",
      "keywords": [
        "Cantonese","Financial and Business knowledge", "Accounting"
    ]
  }]
  }

///////////////////////////////////////////////////////////////////////////////
// React for GitHub Pages - https://github.com/rafrex/react-github-pages
// ----------------------------------------------------------------------------
// Checks to see if a redirect is required. There are two types of redirects:
// 1) specified in the query string generated by the 404 page
// 2) when the site is accessed at /my-repo-name
// This function checks for both types and calls the appropriate function
// to handle the redirect.
function checkForRedirect(nextState, replace) {
  const location = nextState.location;
  if (location.query.redirect === 'true') {
    parseRedirectQuery(location.query, replace);
  } else if (location.pathname.split('/')[1] === gitHubRepoName) {
    redirectToDomain();
  }
}
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
// React for GitHub Pages - https://github.com/rafrex/react-github-pages
// ----------------------------------------------------------------------------
// Takes the redirect query string created in 404.html, converts it back into
// the correct url, then uses react-router to redirect to the correct url which
// loads the respective routes and components. When there is a fresh page
// load for a path that is defined with frontend routes, GitHub Pages will
// return the custom 404.html page, which then redirects back to just the
// base domain with a query string representing the attempted url, to which
// GitHub Pages returns index.html. The single page react app is loaded,
// this function is run, and the correct route is entered.
function parseRedirectQuery(query, replace) {
  let redirectTo = {}

  if (typeof query.pathname === 'string' && query.pathname !== '') {
    redirectTo.pathname = query.pathname;
  }

  if (typeof query.query === 'string' && query.query !== '') {
    let queryObject = {};
    query.query.split('&').map(q => q.split('=')).forEach(arr => {
      queryObject[arr[0]] = arr.slice(1).join('=');
    })
    redirectTo.query = queryObject;
  }

  if (typeof query.hash === 'string' && query.hash !== '') {
    redirectTo.hash = `#${query.hash}`
  }

  replace(redirectTo)
}
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
// React for GitHub Pages - https://github.com/rafrex/react-github-pages
// ----------------------------------------------------------------------------
// Redirect for GitHub Pages from /my-repo-name to just the domain
// because GitHub Pages are always available at /my-repo-name even when a
// custom domain is in use. Accessing the site at /my-repo-name will
// cause the routing to break, so when the site is accessed at /my-repo-name,
// a redirect to the domain with no path is required.
// https://help.github.com/articles/custom-domain-redirects-for-github-pages-sites/
// SET THIS: e.g. my-repo-name
const gitHubRepoName = 'AntonioNways.github.io';
// The domain for your site
// SET THIS: e.g. http://subdomain.example.tld, or http://www.example.tld
const domain = 'https://antonionways.github.io/';
function redirectToDomain() {
  window.location.replace(domain);
}
///////////////////////////////////////////////////////////////////////////////


const routes = (
  // onEnter hook checks if a redirect is needed before App component is loaded
  <Route path="/"  component={App} onEnter={checkForRedirect} profInfo={profileInfo} currentLink={currentLink}>
    <IndexRoute component={Home} currentLink={currentLink}/> // pass the component as a child


    <Route path="projects"  component={Projects} allTabStat={allTabStat0}>
      <IndexRoute component={ProjectPane} ProjectData={ProjectData}/>
    </Route>
    <Route path="projects/basic"  component={Projects} allTabStat={allTabStat1}>
      <IndexRoute component={SelBasic} ProjectData={ProjectData}/>
    </Route>
    <Route path="projects/react"  component={Projects} allTabStat={allTabStat2}>
      <IndexRoute component={SelReact} ProjectData={ProjectData}/>
    </Route>
    <Route path="projects/d3" component={Projects} allTabStat={allTabStat3}>
      <IndexRoute component={SelD3} ProjectData={ProjectData}/>
    </Route>

    <Route path="resume" component={resumePane} profInfo={profileInfo}>
    </Route>

    <Route path="*" component={PageNotFound} />
  </Route>
);

render(
  <Router
    history={browserHistory}
    routes={routes}
  />,
  document.getElementById('AntPages')
)
