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
  listWork: function(val,x){
    return <li key={val+"work"} className="addCheckMark">
          <div>&thinsp;{val}</div>
        </li>
  },
  renderWorkExp: function(val,x){
    return <li key={this.props.route.profInfo.work[val]+val} className="resumeWidth"><div className="container-size"> 

      <div className="container-fluid">
        <div>
          <h4 className="inlineP"><strong>{this.props.route.profInfo.work[val]["company"]},&thinsp;</strong></h4>
          <div className="inlineP">{" "+this.props.route.profInfo.work[val]["position"]}</div>
          <div className="inlineP pull-right Resumepadding">{this.props.route.profInfo.work[val]["startDate"]} - {this.props.route.profInfo.work[val]["endDate"]}</div>
          <div><p className="summaryFont">{this.props.route.profInfo.work[val]["summary"]}</p>
              <ul className="WorkPadding">
            {this.props.route.profInfo.work[val]["highlights"].map(this.listWork)}
          
          </ul>
          </div>
          
        </div>
      </div>

    </div></li>
  },
  listEduA:function(val,x){
    return <p key={val} className="EduBoxes inlineP">{val}</p>
  },
  renderEducation: function(val,x){
    return <li className="resumeWidth" key={this.props.route.profInfo.education[val]["institution"]}><div className="container-size parentE">
      <div className="childE">
        <div className="container-size">
          <div className="inlineP"><strong>{this.props.route.profInfo.education[val]["institution"]},&thinsp;</strong></div>
          <div className="inlineP">{" "+this.props.route.profInfo.education[val]["area"]}</div>
          <div className="inlineP pull-right">{this.props.route.profInfo.education[val]["startDate"]} - {this.props.route.profInfo.education[val]["endDate"]}</div>
          <div className="makebr"><p className="summaryFont">{this.props.route.profInfo.education[val]["studyType"]}</p></div>
          {this.props.route.profInfo.education[val]["courses"].map(this.listEduA)}
          
        </div>
      </div>

    </div>
      </li>
  },
  render: function () {
    return (
      
      <div className="ResumeCSS">
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
        <div className="resumeWidth">
          <div className="ResumeHeader1">
            <span className="glyphicon glyphicon-briefcase icon_sizeRH" aria-hidden="true"></span>
            <div className="Rl">WORK EXPERIENCE</div>
          </div>
          <div >
            <ul className="Resumepadding">{Object.keys(this.props.route.profInfo.work).map(this.renderWorkExp)}</ul>
          </div>
        </div>
        <div className="resumeWidth">
          <div className="ResumeHeader1">
            <span className="glyphicon glyphicon-education icon_sizeRH" aria-hidden="true"></span>
            <div className="Rl">EDUCATION</div>
          </div>
          <div >
            <ul className="Resumepadding">{Object.keys(this.props.route.profInfo.education).map(this.renderEducation)}</ul>
          </div>
        </div>
        
      </div>
      
    )
  }
});

export default resumePane;
