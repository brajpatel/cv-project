import '../styles/editor.css'
import React from "react";
import Personal from "./form components/Personal";

class Editor extends React.Component {
    render() {
        return (
            <div className="cv-editor">
                <Personal/>
            </div>
        )
    }
}

export default Editor;