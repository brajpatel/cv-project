import '../styles/preview.css'
import React from "react";
import Header from './preview components/Preview-Header';
import Aside from './preview components/Preview-Aside';
import Main from './preview components/Preview-Main';


function Preview(props) {
    const { title, forename, surname, address, email, phone, description, skills, deleteSkill, educations, deleteEducation, jobs, deleteWorkExperience } = props;
        
    return (
        <div className="cv-preview">
            <Header title={title} forename={forename} surname={surname}/>
            <Aside address={address} email={email} phone={phone} skills={skills} deleteSkill={deleteSkill}/>
            <Main description={description} educations={educations} deleteEducation={deleteEducation} jobs={jobs} deleteWorkExperience={deleteWorkExperience}/>
        </div>
    )
}

export default Preview;