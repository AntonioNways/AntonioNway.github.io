import React from 'react';
import { Link } from 'react-router';


var Projects = React.createClass({
  render : function() {
    return (
    <div className="container">
  <div className="row">
    <nav className="col-sm-3">
      <ul className="nav nav-pills nav-stacked ProjNavPad" data-spy="affix" data-offset-top="105">
        <li className={this.props.route.allTabStat["allTabStat"][0]}><Link to='/project/'>All</Link></li>
        <li className={this.props.route.allTabStat["allTabStat"][1]}><Link to='/project/basic'>Canvas/SVG/CSS</Link></li>
        <li className={this.props.route.allTabStat["allTabStat"][2]}><Link to='/project/react'>React</Link></li>
        <li className={this.props.route.allTabStat["allTabStat"][3]}><Link to='/project/d3'>D3</Link></li>
        {console.log(this.props.route.allTabStat["allTabStat"])}
      </ul>
    </nav>
    <div className="col-sm-9 ProjNavPadData">
      <div>{this.props.children}</div>
    </div>
  </div>
</div>
  );
  }
});

export default Projects;
