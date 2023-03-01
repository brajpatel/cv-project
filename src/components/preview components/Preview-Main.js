import React from "react";

class Main extends React.Component {
    render() {
        const { description, educations, deleteEducation } = this.props;

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
                                <button className="delete-education" onClick={() => deleteEducation(education.id)}><i className="fa-solid fa-arrow-right"></i> <i className="fa-solid fa-trash"></i></button>
                            </div>
                        )
                    })}
                </div>
                <h3>Work Experience</h3>
            </div>
        )
    }
}

export default Main;