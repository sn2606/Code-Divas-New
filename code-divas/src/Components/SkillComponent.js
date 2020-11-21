import React from "react";
import "./Hire.css";
import { Button } from "./Button";
import womanImg from "./images/woman.png";
import locationImg from "./images/location.png";
import timeImg from "./images/time.png";

function renderContact(contactArray) {
  // if (contactArray.length === 1) {
  //   return <p className="text-sm">&#x260F; {contactArray[0]}</p>;
  // } else 
  if (contactArray.length === 2) {
    return (
      <p className="text-sm">
        {/* &#x260F; {contactArray[0]} <br /> */}
        &#x2709; {contactArray[1]}
      </p>
    );
  }
}

const SkillComponent = ({ skill }) => (
  <div className="flex bg-yellow-200 font-normal shadow-lg m-10 p-5 rounded ml-20 mr-20 text-black">
    <div className="items-center">
      <img className="profileImg" src={womanImg} alt={skill.name} />
    </div>
    <div className="ml-5">
      <h2 className="text-lg font-bold inline mr-1">
        {skill.name}, {skill.age}
      </h2>
      {skill.experienced ? (
        <span className="text-sm bg-red-400 rounded-full m-2 pl-2 pr-2 uppercase">
          experienced
          <br />
        </span>
      ) : (
        <br />
      )}
      <img className="cardInfo" src={timeImg} alt="time-icon" />
      <p className="cardInfo text-sm">
        {skill.timeAvailability}, {skill.dayAvailability}
      </p>
      <br />
      <img className="cardInfo" src={locationImg} alt="location-icon" />
      <p className="cardInfo text-sm">
        {skill.locationCity}, {skill.locationState}
      </p>
      <br />
      {renderContact(skill.contact)}
      <button className="bg-red-400 m-2 p-1 pl-2 pr-2 rounded-full text-sm hover:bg-red-600">Send SMS</button>

    </div>
    <div className="flex flex-wrap items-center justify-center ml-auto">
      {skill.skills
        ? skill.skills.map((skills) => (
            <span className="bg-red-400 m-2 p-1 pl-2 pr-2 rounded-md">
              {skills}
            </span>
          ))
        : ""}
    </div>
  </div>
);

export default SkillComponent;
