import React from "react";

function Aside(props) {
    const { address, email, phone, skills, deleteSkill } = props;

    return (
        <div className="preview-aside">
            <div className="personal-details">
                <h4>Address</h4>
                <p>{address}</p>
                <h4>Email</h4>
                <p>{email}</p>
                <h4>Phone</h4>
                <p>{phone}</p>
            </div>
            <h3>Skills</h3>
            <ul className="skills">
                {skills.map((skill) => {
                    return (
                        <li key={skill.id} className="skill">{skill.text}<i className="fa-solid fa-trash delete-skill" onClick={() => deleteSkill(skill.id)}></i></li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Aside;