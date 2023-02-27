import React from "react";

class Aside extends React.Component {    
    render() {
        const { address, email, phone } = this.props;

        return(
            <div className="preview-aside">
                <div className="personal-details">
                    <p>{address}</p>
                    <p>{email}</p>
                    <p>{phone}</p>
                </div>
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