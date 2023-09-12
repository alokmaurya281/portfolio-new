import React from "react";

export default function SkillSingleComponent(props) {
    return(
        <div className="single-skill">
            <div className="skill-component">
                 <img src={props.icon} alt="" />
            </div>
            <p>{props.skillName}</p>
        </div>
        
        

    );

}