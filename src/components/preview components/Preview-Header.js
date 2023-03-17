import React from "react";

function Header(props) {
    const { title, forename, surname } = props;
        
    return (
        <div className="preview-header">
            <h2>{title} {forename} {surname}</h2>
        </div>
    )
}

export default Header;