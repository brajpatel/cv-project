import '../styles/editor.css'
import React, { useState } from "react";
import uniqid from "uniqid";
import Personal from "./form components/Personal";
import Skills from './form components/Skills';
import Education from './form components/Education';
import Work from './form components/Work';
import Preview from './Preview';

// PREVIOUS CLASS COMPONENT USED ABOUT 425 LINES - CURRENT FUNCTIONAL COMPONENT USES 274 - DAYM.

function Main() {
    // example content
    const exampleDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nam libero justo laoreet. Platea dictumst vestibulum rhoncus est pellentesque. Aenean euismod elementum nisi quis eleifend. Consectetur adipiscing elit ut aliquam curs.';

    const exampleSkills = [
        {
            text: 'Communication',
            id: uniqid()
        },
        {
            text: 'Teamwork',
            id: uniqid()
        },
        {
            text: 'Problem Solving',
            id: uniqid()
        },
        {
            text: 'Listening',
            id: uniqid()
        },
        {
            text: '65wpm Typing Speed',
            id: uniqid()
        }
    ];

    const exampleEducations = [
        {
            title: 'Bakery Science',
            school: 'The Schoo of Bakery',
            start: '20/08/2019',
            end: '18/06/2020',
            id: uniqid()
        },
        {
            title: 'Jujutsu Sorcerer',
            school: 'Jujutsu High',
            start: '22/08/2018',
            end: '09/07/2021',
            id: uniqid()
        },
        {
            title: 'Anime Connoisseur',
            school: 'Any May University',
            start: '31/07/2021',
            end: '26/06/2022',
            id: uniqid()
        }
    ];

    const exampleJobs = [
        {
            company: 'Cancer Research UK',
            position: 'Assistant Manager',
            duties: 'Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sit amet congue lorem, in ultrices est. Aenean molestie nulla et eros ornare, et malesuada quam egestas. Vivamus condimentum sol.',
            start: '26/09/2022',
            end: '03/03/2023',
            id: uniqid()
        },
        {
            company: 'A Tech Company',
            position: 'Full Stack Developer',
            duties: 'Curabitur varius odio quam, at ornare est bibendum sed. Aenean lacinia rutrum enim lacinia consectetur. Sed est ante, accumsan in facilisis eu, tincidunt vel tortor. Suspendisse potenti nulla at este.',
            start: '31/10/2023',
            end: '03/05/2025',
            id: uniqid()
        }
    ];

    // useState
    const [title, setTitle] = useState('Mr.');
    const [forename, setForename] = useState('John');
    const [surname, setSurname] = useState('Smith');
    const [address, setAddress] = useState('125 Top Lane');
    const [email, setEmail] = useState('john-smith@email.com');
    const [phone, setPhone] = useState('07123456789');
    const [description, setDescription] = useState(exampleDescription);
    const [skill, setSkill] = useState({ text: '', id: uniqid() });
    const [skills, setSkills] = useState(exampleSkills);
    const [education, setEducation] = useState({ title: '', school: '', start: '', end: '', id: uniqid() });
    const [educations, setEducations] = useState(exampleEducations);
    const [job, setJob] = useState({ position: '', company: '', duties: '', start: '', end: '', id: uniqid() });
    const [jobs, setJobs] = useState(exampleJobs);

    // functions
    const handleTitle = (e) => {
        setTitle(e.target.value);
    }

    const handleForename = (e) => {
        setForename(e.target.value);
    }

    const handleSurname = (e) => {
        setSurname(e.target.value);
    }

    const handleAddress = (e) => {
        setAddress(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePhone = (e) => {
        setPhone(e.target.value);
    }

    const handleDescription = (e) => {
        setDescription(e.target.value);
    }

    const handleSkill = (e) => {
        setSkill({ text: e.target.value, id: skill.id});
    }

    const addSkill = () => {
        if(skills.length >= 12) {
            alert('You have reached the maximum number of skills you can add.');
            return;
        };

        if(skill.text === '') {
            alert('Skill name cannot be blank');
            return;
        }
        
        setSkills(skills.concat(skill));
        setSkill({ text: '', id: uniqid() });
    }

    const deleteSkill = (skillId) => {
        const updatedSkills = skills.filter((skill) => skill.id !== skillId);
            
        setSkills(updatedSkills);
    }

    const handleTitleOfStudy = (e) => {
        setEducation({ title: e.target.value, school: education.school, start: education.start, end: education.end, id: education.id });
    }

    const handleSchoolName = (e) => {
        setEducation({ title: education.title, school: e.target.value, start: education.start, end: education.end, id: education.id });
    }


    const handleStudyStart = (e) => {
        setEducation({ title: education.title, school: education.school, start: e.target.value, end: education.end, id: education.id });
    }

    const handleStudyEnd = (e) => {
        setEducation({ title: education.title, school: education.school, start: education.start, end: e.target.value, id: education.id });
    }

    const addEducation = () => {
        if(educations.length === 3) return;

        if (
            education.title === '' ||
            education.school === '' ||
            education.start === '' ||
            education.end === ''
            ) {
                alert('Please fill in all the fields in the education section.');
                return;
            }
        
        setEducations(educations.concat(education));
        setEducation({ title: '', school: '', start: '', end: '', id: uniqid() })
    }

    const deleteEducation = (educationId) => {
        const updatedEducations = educations.filter((education) => education.id !== educationId);

        setEducations(updatedEducations);
    }

    const handlePositionTitle = (e) => {
        setJob({ position: e.target.value, company: job.company, duties: job.duties, start: job.start, end: job.end, id: job.id });
    }

    const handleCompanyName = (e) => {
        setJob({ position: job.position, company: e.target.value, duties: job.duties, start: job.start, end: job.end, id: job.id });
    }

    const handlePositionDuties = (e) => {
        setJob({ position: job.position, company: job.company, duties: e.target.value, start: job.start, end: job.end, id: job.id });
    }

    const handleWorkStart = (e) => {
        setJob({ position: job.position, company: job.company, duties: job.duties, start: e.target.value, end: job.end, id: job.id });
    }

    const handleWorkEnd = (e) => {
        setJob({ position: job.position, company: job.company, duties: job.duties, start: job.start, end: e.target.value, id: job.id });
    }

    const addWorkExperience = () => {
        if (
            job.position === '' ||
            job.company === '' ||
            job.start === '' ||
            job.end === ''
            ) {
                alert('Please fill in all the fields in the work experience.');
                return;
            }

        setJobs(jobs.concat(job));
        setJob({ position: '', company: '', duties: '', start: '', end: '', id: uniqid() });
    }

    const deleteWorkExperience = (jobId) => {
        const updatedJobs = jobs.filter((job) => job.id !== jobId);

        setJobs(updatedJobs);
    }

    // html to return
    return (
        <div>
            <div className="cv-editor">
                <Personal
                    handleTitle={handleTitle}
                    handleForename={handleForename}
                    handleSurname={handleSurname}
                    handleAddress={handleAddress}
                    handleEmail={handleEmail}
                    handlePhone={handlePhone}
                    handleDescription={handleDescription}
                />
                <Skills
                    skill={skill}
                    handleSkill={handleSkill}
                    addSkill={addSkill}
                />
                <Education
                    education={education}
                    handleSchoolName={handleSchoolName}
                    handleTitleOfStudy={handleTitleOfStudy}
                    handleStudyStart={handleStudyStart}
                    handleStudyEnd={handleStudyEnd}
                    addEducation={addEducation}
                />
                <Work
                    job={job}
                    handleCompanyName={handleCompanyName}
                    handlePositionTitle={handlePositionTitle}
                    handlePositionDuties={handlePositionDuties}
                    handleWorkStart={handleWorkStart}
                    handleWorkEnd={handleWorkEnd}
                    addWorkExperience={addWorkExperience}
                />
            </div>
            <Preview
                title={title}
                forename={forename}
                surname={surname}
                address={address}
                email={email}
                phone={phone}
                description={description}
                skills={skills}
                deleteSkill={deleteSkill}
                educations={educations}
                deleteEducation={deleteEducation}
                jobs={jobs}
                deleteWorkExperience={deleteWorkExperience}

            />
        </div>
    )
}

export default Main;