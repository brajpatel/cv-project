import React from "react";

class Skills extends React.Component {
    render() {
        const { skill, handleSkill, addSkill } = this.props;

        return (
            <div>
                <h2>Skills (up to 12)</h2>
                <input onChange={(e) => handleSkill(e)} value={skill.text} placeholder="Skill Name" type="text"></input>
                <button onClick={addSkill}>Add Skill<i className="fa-solid fa-pencil"></i></button>
            </div>
        )
    }
}

export default Skills;