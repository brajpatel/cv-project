import React from "react";

class Main extends React.Component {
    render() {
        const { description, educations, deleteEducation, jobs, deleteWorkExperience } = this.props;

        return (
            <div className="preview-main">
                <h3>Description</h3>
                <p className="description">{description}</p>
                <h3>Education</h3>
                <div className="educations">
                    {educations.map((education) => {
                        return (
                            <div key={education.id}>
                                <p className="school-name">{education.school}</p>
                                <p className="study-title">{education.title}</p>
                                <p>{education.start} - {education.end}</p>
                                <i className="fa-solid fa-trash delete-education" onClick={() => deleteEducation(education.id)}></i>
                            </div>
                        )
                    })}
                </div>
                <h3>Work Experience</h3>
                <div className="work-experiences">
                    {jobs.map((job) => {
                        return (
                            <div key={job.id}>
                                <p>{job.company}</p>
                                <p>{job.position}</p>
                                <p>{job.duties}</p>
                                <p>{job.start} - {job.end}</p>
                                <i className="fa-solid fa-trash delete-education" onClick={() => deleteWorkExperience(job.id)}></i>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Main;