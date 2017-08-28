import React from 'react';
import { Link } from 'react-router';


var Projects = React.createClass({
  render : function() {
    return (
    <div className="ProjectBG">
    <div className="container">
      <div className="row">
        <nav className="col-sm-3">
          <ul className="nav nav-pills nav-stacked ProjNavPad" data-spy="affix" data-offset-top="105">
            <li className={this.props.route.allTabStat["allTabStat"][0]}><Link to='/projects/'>All</Link></li>
            <li className={this.props.route.allTabStat["allTabStat"][1]}><Link to='/projects/basic'>Canvas/SVG/CSS</Link></li>
            <li className={this.props.route.allTabStat["allTabStat"][2]}><Link to='/projects/react'>React</Link></li>
            <li className={this.props.route.allTabStat["allTabStat"][3]}><Link to='/projects/d3'>D3</Link></li>
            {console.log(this.props.route.allTabStat["allTabStat"])}
          </ul>
        </nav>
        <div className="col-sm-9 ProjNavPadData">
          <div>{this.props.children}</div>
        </div>
      </div>
  </div>
  </div>
  );
  }
});

export default Projects;
