import React from 'react';
import { Link } from 'react-router';


var Home = React.createClass({
  componentDidMount() {
    { this.renderSVG() }
    { this.drawAxis() }
  },
  renderSVG() {
    var TimeLineData = [[2012, "B.B.A. Graduate with Distinction"],
    [2013, "Work as Account Payable"], [2014, "Promoted to Staff Accountant"], [2015, "Becomes CPA,CMA"],
    [2016, "Explore Programming"], [2017.25, "March - Resign as an Accountant to pursue Programing"], [2017.43, "May - Obtained FCC's Front-end Development Certificate"], [2017.56, "July - Obtained FCC's Data-Visualization Certificate"]]
    var xSpac = 42;
    var svg = d3.select("svg");
    var g = svg.append("g");
    var toolT = d3.select("#tooltip").style("opacity", 0);
    g.selectAll("circle")
      .data(TimeLineData)
      .enter()
      .append("circle")
      .style("opacity", 1)
      .attr("class", "HoverTL")
      .attr("cx", function (d, i) {
        return (d[0] - 2011) * xSpac + -1;
      })
      .attr("cy", function (d, i) {
        return (d[0] - 2011) * 0+50;
      })
      .attr("r", 5)
      .attr("fill", "blue")
      .attr("stroke", "brown")
      .attr("stroke-width", "0.3")
      //tooltip function here
      .on("mouseover", function (d, i) {
        toolT.transition()
          .duration(300)
          .style("opacity", .9);
        toolT.html("<center>" + d[0].toString().substring(0, 4) + " - " + d[1] + "</center>")
          .style("left", Number(d3.select(this).attr("cx")) + 10 + "px")
          .style("top", Number(d3.select(this).attr("cy")) + 330 + "px");
      })
      .on("mouseout", function (d) {
        toolT.transition()
          .duration(500)
          .style("opacity", 0);
      });
  },
  drawAxis(){
    var svg=d3.select("svg");
    var x = d3.scaleLinear().domain([2012,2018]).range([38, 295]);
    svg.append("g").attr("transform", "translate(0," + 68+ ")")
      .call(d3.axisBottom(x).tickFormat(d3.format("")).ticks(5));
    svg.append("text")             
      .attr("transform","")
      .attr("y", 100) //move downward
      .attr("x",180) //move from the left to right
      .style("text-anchor", "middle")
      .text("Year");
  },
  SkillList(val){
    return (
    <div key={val} id={val}>
      <div className="bulletPoint">
        <i className="fa fa-check-square GreenColour" aria-hidden="true"></i>
        &nbsp; {val}
      </div>
    </div>
    )
  },
  ProjectInfoList(val){
    return (
    <div key={val} id={val}>
      <div className="col-md-12 HomePicStyle"><a href={this.props.route.currentLink+"/projects/basic"}><img src={val} className="img-responsive"/></a></div>
    </div>
    )
  },
  render: function () {
    return (
      <div>
        <div className="Homebgc HomeTop">
          <div className="homeBGPic" id="bgholder">
            <div className="row">
              <div className="col-xs-12">
                <div className="">
                  <p className="text-center NameTitle">Antonio  Ng</p>
                </div>
                <br></br>
                <div>
                  <p className="text-center TitleTitle">Developer and Accountant</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      <div className="nav_pad container-fluid">
        <div className="">
          <div className="row">
            <div className="col-md-12">
              <div className="HomeTop">
                <img className="img-responsive FirstProfPic" src="https://drive.google.com/uc?export=download&id=0B9ldvGLcmpFzbFR5bUhmdXlCNFU"  />
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-2 HomeALR">
                <br></br>
                <br></br>
                <br></br>
                <img src="https://drive.google.com/uc?export=download&id=0B9ldvGLcmpFzUjd2MllMc3lQcjg" className="img-responsive profileSize img-circle" />
                <h2>Antonio Ng</h2>
                <h4> Programmer and Acountant (CPA, CMA) </h4>
              </div>
              <div className="col-md-4 AboutPad">
                <br></br>
                <h1>About Me</h1>

                <br></br>
                <p>In my 4 years of accounting experience, I had used my knowledge of Excel, SQL, and VBA to enhance the overall accounting system at work by automating multiple functions. From this experience, I became interested in programming. From there, I have learned Python, Django, HTML, and CSS, Javascript, React, D3. </p>
                <p>I am currently seeking for opportunities initiaives. Please contact me at antonion90@gmail.com</p>
                <br></br>
                <center><h3>History</h3></center>
                <div className="tooltip" id="tooltip"></div>
                <svg width="350" height="120">
                  <line x1={12 + 25} y1="50" x2={42 * 6.56} y2="50" stroke="black" />
                </svg>
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-3 HomeARL">
                <br></br>
                <div className="SkillPad">
                  <h1>Skills</h1>
                </div>
                <br></br>
                {["JavaScript","Python","SQL"].map(this.SkillList)}
                <br></br>
                <div className="SkillPad">
                  <h1>Projects</h1>
                  <br></br>
                </div>
                {["https://drive.google.com/uc?export=download&id=0B9ldvGLcmpFzcFFDbm5KT011YW8",
                "http://blog-assets.risingstack.com/2016/Jan/react_best_practices-1453211146748.png",
                "https://drive.google.com/uc?export=download&id=0B9ldvGLcmpFzdTJmT2s3TjFTcjQ"].map(this.ProjectInfoList)}
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
      </div>
    );
  }
});

export default Home;
