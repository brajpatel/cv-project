import React from "react";

class Aside extends React.Component {    
    render() {
        const { address, email, phone, skills, deleteSkill } = this.props;

        return (
            <div className="preview-aside">
                <div className="personal-details">
                    <p>{address}</p>
                    <p>{email}</p>
                    <p>{phone}</p>
                </div>
                <h3>Skills</h3>
                <ol className="skills">
                    {skills.map((skill) => {
                        return (
                            <li key={skill.id} className="skill">{skill.text}<i className="fa-solid fa-trash" onClick={() => deleteSkill(skill.id)}></i></li>
                        )
                    })}
                </ol>
            </div>
        )
    }
}

export default Aside;