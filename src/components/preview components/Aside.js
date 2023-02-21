import React from "react";

class Aside extends React.Component {
    render() {
        return(
            <div className="preview-aside">
                <p>Address</p>
                <p>Email</p>
                <p>Phone</p>
                <h4>Skills</h4>
                <ul>
                    <li>Skill 1</li>
                    <li>Skill 2</li>
                    <li>Skill 3</li>
                    <li>Skill 4</li>
                </ul>
            </div>
        )
    }
}

export default Aside;