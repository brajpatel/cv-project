import React from "react";

class Education extends React.Component {
    render() {
        const { handleSchoolName, handleTitleOfStudy, handleStudyStart, handleStudyEnd, addEducation } = this.props;

        return(
            <div>
                <h2>Educational Experience</h2>
                <input onChange={(e) => handleSchoolName(e)} placeholder="School Name" type="text"></input>
                <input onChange={(e) => handleTitleOfStudy(e)} placeholder="Title of Study" type="text"></input>
                <h4>Start Date</h4>
                <input onChange={(e) => handleStudyStart(e)} placeholder="Study Start Date" type="date"></input>
                <h4>End Date</h4>
                <input onChange={(e) => handleStudyEnd(e)} placeholder="Study End Date" type="date"></input>
                <button className="add-education" onClick={addEducation}>Add Education</button>
            </div>
        )
    }
}

export default Education;