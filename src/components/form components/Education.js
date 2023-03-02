import React from "react";

class Education extends React.Component {
    render() {
        const { education, handleTitleOfStudy, handleSchoolName, handleStudyStart, handleStudyEnd, addEducation } = this.props;

        return (
            <div>
                <h2>Educational Experience (up to 3)</h2>
                <input onChange={(e) => handleTitleOfStudy(e)} value={education.title} placeholder="Title of Study" type="text"></input>
                <input onChange={(e) => handleSchoolName(e)} value={education.school} placeholder="School Name" type="text"></input>
                <h4>Start Date</h4>
                <input onInput={(e) => handleStudyStart(e)} value={education.start} type="date"></input>
                <h4>End Date</h4>
                <input onInput={(e) => handleStudyEnd(e)} value={education.end} type="date"></input>
                <button onClick={addEducation}>Add Education<i className="fa-solid fa-user-graduate"></i></button>
            </div>
        )
    }
}

export default Education;