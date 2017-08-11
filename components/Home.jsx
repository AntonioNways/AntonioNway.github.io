import React from 'react';
import { Link } from 'react-router';


var Home = React.createClass({
  componentDidMount(){
    {this.renderSVG()}
  },
  renderSVG(){
    var TimeLineData=[[2012,"B.B.A. Graduate with Distinction"],
[2013,"Work as Account Payable"],[2014, "Promoted to Staff Accountant"],[2015,"Becomes CPA,CMA"], 
[2016,"Explore Programming"],[2017,"Obtained FreeCodeCamp Certificate"]]
    var xSpac=10;
    var svg=d3.select("svg");
    var g = svg.append("g");
    var toolT=d3.select("#tooltip").style("opacity",0);
    g.selectAll("circle")
      .data(TimeLineData)
      .enter()
      .append("circle")
      .style("opacity", 1)
      .attr("cx",function(d,i){
        return (d[0]-2011)*xSpac+25;
      })
      .attr("cy",function(d,i){
        return (d[0]-2011)*55;
      })
      .attr("r", 5)
      .attr("fill","green")
      .attr("stroke","white")
      .attr("stroke-width", "0.3")
      //tooltip function here
      .on("mouseover", function(d,i) {
       toolT.transition()
         .duration(300)
         .style("opacity", .9);
       toolT.html(d[0]+" - "+d[1])
         .style("left", (d3.event.pageX)-650 + "px")
         .style("top", (d3.event.pageY)-420 + "px");
       })
     .on("mouseout", function(d) {
       toolT.transition()
         .duration(500)
         .style("opacity", 0);
       });
  },
  render : function() {
    return (
    <div className="nav_pad container">
      <div className="row">
        <div className="col-md-12"><br></br></div>
        <div className="col-md-1"></div>
        <div className="col-md-10">
        <div className="col-md-12">
          <div className="col-md-8 HomePicStyle HomeALR">
            <img src="http://via.placeholder.com/590x300" className="img-responsive ThemeSize"/>
          </div>
          <div className="col-md-4 HomePicStyle">
              <div className="col-md-12 HomePicStyle HomeARL"><Link to="/example"><img src="http://via.placeholder.com/290x97" className="img-responsive HomeAppSize"/></Link></div>
              <div className="col-md-12 HomePicStyle HomeARL1"><Link to="/example"><img src="http://via.placeholder.com/290x97" className="img-responsive HomeAppSize"/></Link></div>
              <div className="col-md-12 HomePicStyle HomeARL2"><Link to="/example"><img src="http://via.placeholder.com/290x97" className="img-responsive HomeAppSize"/></Link></div>
          </div>
        </div>
        </div>
        </div>
          <div className="">
      <div className="row">
        <div className="col-md-12">
          <div className="col-md-1"></div>
          <div className="col-md-2 HomeALR1">
            <br></br>
            <br></br>
            <br></br>
            <img src="http://via.placeholder.com/290x200" className="img-responsive profileSize"/>
            <h2>Antonio Ng</h2>  
            <h4> Acountant (CPA, CMA) and Programmer</h4>
          </div>
          <div className="col-md-4 HomeABTqu">
            <br></br>
          <h1>About Me</h1>
          
                <br></br>
                <p>In my 4 years of accounting experience, I had used my knowledge of Excel, SQL, and VBA to enhance the overall accounting system at work by automating multiple functions. From this experience, I became interested and started to learn programming. From there, I have learned Python, Django, HTML, and CSS. As of now, I am learning to program from Free Code Camp. </p>
                <p>I am currently seeking for opportunities initiaives. Please contact me at Siiv3rd@gmail.com!</p>
                <br></br>
          </div>
          <div className="col-md-4 HomeARL3">
            <br></br>
            <center><h3>History</h3></center>
            <div className="tooltip" id="tooltip"></div>
            <svg width="350" height="400">
              <line x1={10+25} y1="55" x2={10*6+25} y2="330" stroke-width="3" stroke="black"/>
            </svg>
          </div>
        </div>
        </div>
        <div className="col-md-1"></div>
      </div>
    </div>
  );
  }
});

export default Home;
