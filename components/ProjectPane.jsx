import React from 'react';
import { Link } from 'react-router';


var ProjectPane = React.createClass({
  renderAllList:function(val,x){  
    return <div key={val} id={val} className="col-sm-12" ><div className="col-sm-4 projectPicPad" > <a href={this.props.route.ProjectData[val].link}><img alt={val} src={this.props.route.ProjectData[val].img} className="img-responsive"/></a></div>
      <div className="col-sm-8"><h4>{val}</h4>{this.props.route.ProjectData[val].detail}</div>
    </div>
  },
  render: function () {
    return (
      <div>{Object.keys(this.props.route.ProjectData).map(this.renderAllList)}</div>
    )
  }
});

export default ProjectPane;
