import React from "react";

class Main extends React.Component {
    render() {
        const { description } = this.props;

        return (
            <div className="preview-main">
                <h3>Description</h3>
                <p className="description">{description}</p>
                <h3>Education</h3>
                <h3>Work Experience</h3>
            </div>
        )
    }
}

export default Main;