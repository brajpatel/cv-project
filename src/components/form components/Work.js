import React from "react";

class Work extends React.Component {
    render() {
        const { job, handleCompanyName, handlePositionTitle, handlePositionDuties, handleWorkStart, handleWorkEnd, addWorkExperience } = this.props;

        return (
            <div>
                <h2>Work Experience</h2>
                <input onChange={(e) => handleCompanyName(e)} value={job.company} placeholder="Company Name" type="text"></input>
                <input onChange={(e) => handlePositionTitle(e)} value={job.position} placeholder="Position Title" type="text"></input>
                <textarea onChange={(e) => handlePositionDuties(e)} value={job.duties} placeholder="Main Tasks/Duties" rows="3" maxLength="200"></textarea>
                <h4>Start Date</h4>
                <input onInput={(e) => handleWorkStart(e)} value={job.start} type="date"></input>
                <h4>End Date</h4>
                <input onInput={(e) => handleWorkEnd(e)} value={job.end} type="date"></input>
                <button onClick={addWorkExperience}>Add Work Experience<i class="fa-solid fa-briefcase"></i></button>
            </div>
        )
    }
}

export default Work;