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
                            // CHANGE AROUND THE EDUCATION STUFF BRUH
                            // CHANGE AROUND THE EDUCATION STUFF BRUH
                            // CHANGE AROUND THE EDUCATION STUFF BRUH
                            // CHANGE AROUND THE EDUCATION STUFF BRUH
                            // CHANGE AROUND THE EDUCATION STUFF BRUH
                            // CHANGE AROUND THE EDUCATION STUFF BRUH
                            // CHANGE AROUND THE EDUCATION STUFF BRUH
                            // CHANGE AROUND THE EDUCATION STUFF BRUH
                            // CHANGE AROUND THE EDUCATION STUFF BRUH
                            // CHANGE AROUND THE EDUCATION STUFF BRUH
                            // CHANGE AROUND THE EDUCATION STUFF BRUH
                            // CHANGE AROUND THE EDUCATION STUFF BRUH
                        )
                    })}
                </div>
                <h3>Work Experience</h3>
                <div className="work-experiences">
                    {jobs.map((job) => {
                        return (
                            <div key={job.id} className="job">
                                <div className="job-details">
                                    <p><span className="job-position">{job.position}</span> - <span className="job-company">{job.company}</span></p>
                                    <p className="job-dates">{job.start} - {job.end}</p>
                                </div>
                                <p className="job-duties">{job.duties}</p>
                                <i className="fa-solid fa-trash delete-work-experience" onClick={() => deleteWorkExperience(job.id)}></i>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Main;