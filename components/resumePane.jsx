import React from 'react';
import { Link } from 'react-router';


var resumePane = React.createClass({
    listKeyWords: function(val,x){
    return <span key={val} className="SkillBoxes">{val}</span>
  },
  renderSkills: function(val,x){
    return <li key={this.props.route.profInfo.skills[val]+val}><div className="skill-progress"></div><div className="listStyle"> 
      
      <div className="skill-style" >
        <strong>{this.props.route.profInfo.skills[val]["name"]}<br></br></strong>
        {this.props.route.profInfo.skills[val]["keywords"].map(this.listKeyWords)}
      </div>

    </div></li>
  },
  render: function () {
    return (
      
      <div>
        <div className="ResumeHeader">
          <h2>BACKGROUND</h2>
        </div>
        <div className="resumeWidth">
          <div className="ResumeHeader1">
            <span className="glyphicon glyphicon-star icon_sizeRH" aria-hidden="true"></span>
            <div className="Rl">SKILLS</div>
          </div>
          <div >
            <ul className="Resumepadding">{Object.keys(this.props.route.profInfo.skills).map(this.renderSkills)}</ul>
          </div>
        </div>
        
      </div>
      
    )
  }
});

export default resumePane;
