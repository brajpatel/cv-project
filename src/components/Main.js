import '../styles/editor.css'
import React from "react";
import uniqid from "uniqid";
import Personal from "./form components/Personal";
import Skills from './form components/Skills';
import Education from './form components/Education';
import Work from './form components/Work';
import Preview from './Preview';

class Main extends React.Component {
    constructor() {
        super();

        this.state = {
            title: 'Mr.',
            forename: 'John',
            surname: 'Smith',
            address: '125 Top Lane',
            email: 'john-smith@email.com',
            phone: '07123456789',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nam libero justo laoreet. Platea dictumst vestibulum rhoncus est pellentesque. Aenean euismod elementum nisi quis eleifend. Consectetur adipiscing elit ut aliquam curs.',
            skill: {
                text: '',
                id: uniqid()
            },
            skills: [
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
            ],
            education: {
                school: '',
                title: '',
                start: '',
                end: '',
                id: uniqid()
            },
            educations: [
                {
                    school: 'The Schoo of Bakery',
                    title: 'Bakery Science',
                    start: '20/08/2019',
                    end: '18/06/2020',
                    id: uniqid()
                },
                {
                    school: 'Jujutsu High',
                    title: 'Jujutsu Sorcerer',
                    start: '22/08/2018',
                    end: '09/07/2021',
                    id: uniqid()
                },
                {
                    school: 'Any May University',
                    title: 'Anime Connoisseur',
                    start: '31/07/2021',
                    end: '26/06/2022',
                    id: uniqid()
                }
            ],
            job: {
                position: '',
                company: '',
                duties: '',
                start: '',
                end: '',
                id: uniqid()
            },
            jobs: [
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
            ]
        }

        this.handleTitle = this.handleTitle.bind(this);
        this.handleForename = this.handleForename.bind(this);
        this.handleSurname = this.handleSurname.bind(this);
        this.handleAddress = this.handleAddress.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePhone = this.handlePhone.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.handleSkill = this.handleSkill.bind(this);
        this.addSkill = this.addSkill.bind(this);
        this.deleteSkill = this.deleteSkill.bind(this);
        this.handleSchoolName = this.handleSchoolName.bind(this);
        this.handleTitleOfStudy = this.handleTitleOfStudy.bind(this);
        this.handleStudyStart = this.handleStudyStart.bind(this);
        this.handleStudyEnd = this.handleStudyEnd.bind(this);
        this.addEducation = this.addEducation.bind(this);
        this.deleteEducation = this.deleteEducation.bind(this);
        this.handlePositionTitle = this.handlePositionTitle.bind(this);
        this.handleCompanyName = this.handleCompanyName.bind(this);
        this.handlePositionDuties = this.handlePositionDuties.bind(this);
        this.handleWorkStart = this.handleWorkStart.bind(this);
        this.handleWorkEnd = this.handleWorkEnd.bind(this);
        this.addWorkExperience = this.addWorkExperience.bind(this);
        this.deleteWorkExperience = this.deleteWorkExperience.bind(this);
    }

    handleTitle(e) {
        this.setState({ title: e.target.value })
    }

    handleForename(e) {
        this.setState({ forename: e.target.value })
    }

    handleSurname(e) {
        this.setState({ surname: e.target.value })
    }

    handleAddress(e) {
        this.setState({ address: e.target.value })
    }

    handleEmail(e) {
        this.setState({ email: e.target.value })
    }

    handlePhone(e) {
        this.setState({ phone: e.target.value })
    }

    handleDescription(e) {
        this.setState({ description: e.target.value })
    }

    handleSkill(e) {
        this.setState({
            skill: {
                text: e.target.value,
                id: this.state.skill.id
            }
        })
    }

    addSkill() {
        if(this.state.skills.length >= 12) return;

        if(this.state.skill.text === '') {
            alert('Skill name cannot be blank');
            return;
        }

        this.setState({
            skills: this.state.skills.concat(this.state.skill),
            skill: {
                text: '',
                id: uniqid()
            }
        })
    }

    deleteSkill(skillId) {
        const updatedSkills = this.state.skills.filter((skill) => skill.id !== skillId)
        
        this.setState({ skills: updatedSkills })
    }

    handleSchoolName(e) {
        this.setState({
            education: {
                school: e.target.value,
                title: this.state.education.title,
                start: this.state.education.start,
                end: this.state.education.end,
                id: this.state.education.id
            }
        })

    }

    handleTitleOfStudy(e) {
        this.setState({
            education: {
                school: this.state.education.school,
                title: e.target.value,
                start: this.state.education.start,
                end: this.state.education.end,
                id: this.state.education.id
            }
        })
    }

    handleStudyStart(e) {
        this.setState({
            education: {
                school: this.state.education.school,
                title: this.state.education.title,
                start: e.target.value,
                end: this.state.education.end,
                id: this.state.education.id
            }
        })
    }

    handleStudyEnd(e) {
        this.setState({
            education: {
                school: this.state.education.school,
                title: this.state.education.title,
                start: this.state.education.start,
                end: e.target.value,
                id: this.state.education.id
            }
        })
    }

    addEducation() {
        if(this.state.educations.length === 3) return;

        if(
            this.state.education.school === '' ||
            this.state.education.title === '' ||
            this.state.education.start === '' ||
            this.state.education.end === ''
            ) {
                alert('Please fill in all the fields in the education section.');
                return;
            }
        
        this.setState({
            educations: this.state.educations.concat(this.state.education),
            education: {
                school: '',
                title: '',
                start: '',
                end: '',
                id: uniqid()
            }
        })
    }

    deleteEducation(educationId) {
        const updatedEducations = this.state.educations.filter((education) => education.id !== educationId);

        this.setState({ educations: updatedEducations });
    }

    handlePositionTitle(e) {
        this.setState({
            job: {
                position: e.target.value,
                company: this.state.job.company,
                duties: this.state.job.duties,
                start: this.state.job.start,
                end: this.state.job.end,
                id: this.state.job.id
            }
        })
    }

    handleCompanyName(e) {
        this.setState({
            job: {
                position: this.state.job.position,
                company: e.target.value,
                duties: this.state.job.duties,
                start: this.state.job.start,
                end: this.state.job.end,
                id: this.state.job.id
            }
        })
    }

    handlePositionDuties(e) {
        this.setState({
            job: {
                position: this.state.job.position,
                company: this.state.job.company,
                duties: e.target.value,
                start: this.state.job.start,
                end: this.state.job.end,
                id: this.state.job.id
            }
        })
    }

    handleWorkStart(e) {
        this.setState({
            job: {
                position: this.state.job.position,
                company: this.state.job.company,
                duties: this.state.job.duties,
                start: e.target.value,
                end: this.state.job.end,
                id: this.state.job.id
            }
        })
    }

    handleWorkEnd(e) {
        this.setState({
            job: {
                position: this.state.job.position,
                company: this.state.job.company,
                duties: this.state.job.duties,
                start: this.state.job.start,
                end: e.target.value,
                id: this.state.job.id
            }
        })
    }

    addWorkExperience() {
        if(
            this.state.job.company === '' ||
            this.state.job.position === '' ||
            this.state.job.start === '' ||
            this.state.job.end === ''
            ) {
                alert('Please fill in all the fields in the work experience.');
                return;
            }

        this.setState({
            jobs: this.state.jobs.concat(this.state.job),
            job: {
                position: '',
                company: '',
                duties: '',
                start: '',
                end: '',
                id: uniqid()
            }
        })
    }

    deleteWorkExperience(jobId) {
        const updatedJobs = this.state.jobs.filter((job) => job.id !== jobId);

        this.setState({ jobs: updatedJobs })
    }

    render() {
        const { title, forename, surname, address, email, phone, description, skill, skills, education, educations, job, jobs } = this.state;

        return (
            <div>
                <div className="cv-editor">
                    <Personal
                        handleTitle={this.handleTitle}
                        handleForename={this.handleForename}
                        handleSurname={this.handleSurname}
                        handleAddress={this.handleAddress}
                        handleEmail={this.handleEmail}
                        handlePhone={this.handlePhone}
                        handleDescription={this.handleDescription}
                    />
                    <Skills
                        skill={skill}
                        handleSkill={this.handleSkill}
                        addSkill={this.addSkill}
                    />
                    <Education
                        education={education}
                        handleSchoolName={this.handleSchoolName}
                        handleTitleOfStudy={this.handleTitleOfStudy}
                        handleStudyStart={this.handleStudyStart}
                        handleStudyEnd={this.handleStudyEnd}
                        addEducation={this.addEducation}
                    />
                    <Work
                        job={job}
                        handleCompanyName={this.handleCompanyName}
                        handlePositionTitle={this.handlePositionTitle}
                        handlePositionDuties={this.handlePositionDuties}
                        handleWorkStart={this.handleWorkStart}
                        handleWorkEnd={this.handleWorkEnd}
                        addWorkExperience={this.addWorkExperience}
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
                    deleteSkill={this.deleteSkill}
                    educations={educations}
                    deleteEducation={this.deleteEducation}
                    jobs={jobs}
                    deleteWorkExperience={this.deleteWorkExperience}

                />
            </div>
        )
    }
}

export default Main;