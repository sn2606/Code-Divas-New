import React, { useState, useEffect } from "react";
import "../Hire.css";
import data from "./assets/hireData.json";
import SkillComponent from "../SkillComponent.js";


function Hire() {
  const [skills, setSkills] = useState([]);
  const [filters, setFilters] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => setSkills(data), []);

  const filterFunc = ({ skills }) => {
    if (filters.length === 0) {
      return true;
    }
  };

  const filteredSkills = skills.filter((obj) => {
    let val;
    obj.skills.forEach((skill) => {
      val = skill.toLowerCase().includes(search.toLowerCase());
    });
    return val;
  });

  // console.log(data);
  return (
    <div className="Hire my-10">
      <div className="mx-20 mb-20">
        <input
          className="search-box rounded"
          type="text"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        ></input>
      </div>
      {filteredSkills.length === 0 ? (
        <p>Fetching Profiles...</p>
      ) : (
        filteredSkills.map((skill) => (
          <SkillComponent skill={skill} key={skill.id} />
        ))
      )}
    </div>
  );
}

export default Hire;