import React from "react";

class Work extends React.Component {
    render() {
        const { handleCompanyName, handlePositionTitle, handleWorkStart, handleWorkEnd, addWorkExperience } = this.props;

        return (
            <div>
                <h2>Work Experience</h2>
                <input onChange={(e) => handleCompanyName(e)} placeholder="Company Name" type="text"></input>
                <input onChange={(e) => handlePositionTitle(e)} placeholder="Position Title" type="text"></input>
                <textarea placeholder="Main Tasks/Duties" rows="3" maxLength="200"></textarea>
                <h4>Start Date</h4>
                <input onInput={(e) => handleWorkStart(e)} type="date"></input>
                <h4>End Date</h4>
                <input onInput={(e) => handleWorkEnd(e)} type="date"></input>
                <button onClick={addWorkExperience}>Add Work Experience<i class="fa-solid fa-briefcase"></i></button>
            </div>
        )
    }
}

export default Work;