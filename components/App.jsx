import React from 'react';
import { Link } from 'react-router';

var App = React.createClass({
  getInitialState: function() {
    var profileInfo = this.props.route.profInfo;
    return { 
      "navState": "active",
      "ProfState": "NavInvis",
      "allTabStat":["active","none","none","none"],
      "AntInfo":profileInfo
    };
  },
  componentWillReceiveProps(){
    if (this.props.routes[this.props.routes.length - 1]["component"]["displayName"]=="resumePane"){
      this.setState({ "navState": "active",
                        "ChildPad":"",
                       "ProfState": "NavInvis"});
    }
  },
  componentWillMount(){
    if (this.props.routes[this.props.routes.length - 1]["component"]["displayName"]=="resumePane"){
      this.setState({ "navState": "NavInvis",
                    "ChildPad":"RightColRes",
                     "ProfState": "active"});
    }
    else{
      this.setState({ "navState": "active",
                        "ChildPad":"",
                      "ProfState": "NavInvis"});
    }
  },
  hideNav:function(){
    console.log("Test");
    this.setState({ "navState": "NavInvis",
                    "ChildPad":"RightColRes",
                      "ProfState": "active"});
  },
  render: function() {
  return(
      <div>
        <div id="NavBar">
        <nav className={this.state.navState+" navbar navbar-inverse navbar-fixed-top"}>
            <div className="container-fluid">
              <div className="navbar-header Ant_nav">    
                  <button type="button" className="nav_top_margin navbar-toggle collapsed" data-toggle="collapse" data-target="#TopNavBar1" >
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
              </button>
                <Link to="/" className="Nav_Ant NavStyle">Antonio Ng&nbsp;</Link>
              </div>
              <div className="collapse navbar-collapse" id="TopNavBar1">
                <ul className="nav navbar-nav navbar-right nav_top_margin1">
                  <li className="">
                    <Link to="/"><span className="sr-only">(current)</span>
                      <span className="glyphicon glyphicon-user" aria-hidden="true"></span>&nbsp; Home
                    </Link>
                  </li>
                  <li role="presentation" className="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                      <span className="glyphicon glyphicon-folder-open" aria-hidden="true"></span>&nbsp; Projects <span className="caret"></span>
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href={this.props.route.currentLink+"/projects"}><span className="sr-only">(current)</span>
                          &nbsp; All
                        </a>
                      </li>
                      <li>
                        <a href={this.props.route.currentLink+"/projects/basic"}><span className="sr-only">(current)</span>
                          &nbsp; HTML/CSS
                        </a>
                      </li>
                      <li>
                        <a href={this.props.route.currentLink+"/projects/react"}><span className="sr-only">(current)</span>
                          &nbsp; React
                        </a>
                      </li>
                      <li>
                        <a href={this.props.route.currentLink+"/projects/d3"}><span className="sr-only">(current)</span>
                          &nbsp; D3
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="">
                    <Link to="/resume" onClick={this.hideNav}><span className="sr-only" >(current)</span>
                      <span className="glyphicon glyphicon-envelope" aria-hidden="true"></span>&nbsp; Resume
                    </Link>
                  </li>
                </ul>
                <ul className="nav navbar-nav navbar-centre nav_top_margin1">
                    <a className="navbar-brand" href="https://ca.linkedin.com/in/antonio-ng-cpa-cma-7b8a6949" target="_blank"><span className="sr-only">(current)</span>
                    <i className="fa fa-linkedin-square fa-lg" aria-hidden="true"></i>
                  </a>
                  <a className="navbar-brand" href="https://github.com/AntonioNways" target="_blank"><span className="sr-only">(current)</span>
                    <i className="fa fa-github fa-lg" aria-hidden="true"></i>
                  </a>
                  <a className="navbar-brand" href="https://www.freecodecamp.com/antonionways" target="_blank"><span className="sr-only">(current)</span>
                   <i className="fa fa-free-code-camp fa-lg" aria-hidden="true"></i>
                  </a>
                </ul>
              </div>
            </div>
          </nav>
         </div >
         <div id="resumebar" className={this.state.ProfState}>
           <div className="leftHomeNav container">
             <div className="col-md-12 RBBorder"><center>
              <div className="btn-group HomeButtonSize" role="toolbar" aria-label="...">
                  <Link to="/" className=""> <span className="glyphicon glyphicon-home" aria-hidden="true"></span></Link>
              </div>
              <br></br>
              <br></br>
              <img src="https://drive.google.com/uc?export=download&id=0B9ldvGLcmpFzQU5nRGNicDhRSHc" className="img-responsive profileSizeR img-rounded"/>
              <Link to="/" className=""><h2>{this.state.AntInfo.basics.name}</h2></Link>
              <h4>{this.state.AntInfo.basics.label}</h4>&nbsp;
              </center></div>
              
            <div className="col-md-12">
              <div className="Thr"></div>
              <div>
                <span className="glyphicon glyphicon-map-marker icon_sizeR" aria-hidden="true"></span>{this.state.AntInfo.basics.location}
                <br></br>
                <span className="glyphicon glyphicon-envelope icon_sizeR" aria-hidden="true"></span>{this.state.AntInfo.basics.email}
                <br></br>
                </div>
                <div className="col-md-12">
                <center>
                    <a className="navbar-brand" href="https://ca.linkedin.com/in/antonio-ng-cpa-cma-7b8a6949" target="_blank"><span className="sr-only">(current)</span>
                    <i className="fa fa-linkedin-square fa-lg" aria-hidden="true"></i>
                  </a>
                  <a className="navbar-brand" href="https://github.com/AntonioNways" target="_blank"><span className="sr-only">(current)</span>
                    <i className="fa fa-github fa-lg" aria-hidden="true"></i>
                  </a>
                  <a className="navbar-brand" href="https://www.freecodecamp.com/antonionways" target="_blank"><span className="sr-only">(current)</span>
                   <i className="fa fa-free-code-camp fa-lg" aria-hidden="true"></i>
                  </a>
                </center>
              </div>
              
            </div>
              
             
           </div>
        </div>
        <div className={this.state.ChildPad}>
          {this.props.children}
        </div>
      </div>
    );
  }
})

export default App;
