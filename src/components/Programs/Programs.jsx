import React from "react";
import "./Program.css";
import { programsData } from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png";

const Programs = () => {
  return (
    <div className="Programs" id="programs">
      <div className="programs-header">
        <span className="stroke-text">Explore our</span>
        <span>Programs</span>
        <span className="stroke-text">to shape you</span>
      </div>
      <div className="program-category">
        {programsData.map((program, i, e) => (
          <div className="category" key={i}>
            {program.image}
            <span>{program.header}</span>
            <span>{program.details}</span>
            <div className="join-now">
              <span>Join Now</span>
              <img alt={i} src={RightArrow} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
