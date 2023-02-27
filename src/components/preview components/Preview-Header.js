import React from "react";

class Header extends React.Component {
    render() {
        const { title, forename, surname } = this.props;
        
        return (
            <div className="preview-header">
                <h2>{title} {forename} {surname}</h2>
            </div>
        )
    }
}

export default Header;