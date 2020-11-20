import React from 'react';
import '../../App.css';
import NewVolunteer from '../NewVolunteer';
import VolunteerCard from '../VolunteerCard';

function Volunteer() {
  return (
    <>
        <VolunteerCard />
        <NewVolunteer />
    </>
  );
}

export default Volunteer;