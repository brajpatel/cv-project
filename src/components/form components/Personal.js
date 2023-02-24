import React from "react";

class Personal extends React.Component {
    render() {
        const { handleTitle, handleForename, handleSurname, handleAddress, handleEmail, handlePhone } = this.props;

        return (
            <div>
                <h2>Personal Details</h2>
                <input onChange={(e) => handleTitle(e)} placeholder="Title" type="text"></input>
                <input onChange={(e) => handleForename(e)} placeholder="Forename" type="text"></input>
                <input onChange={(e) => handleSurname(e)} placeholder="Surname" type="text"></input>
                <input onChange={(e) => handleAddress(e)} placeholder="Address" type="text"></input>
                <input onChange={(e) => handleEmail(e)} placeholder="Email" type="text"></input>
                <input onChange={(e) => handlePhone(e)} placeholder="Phone Number" type="tel"></input>
                <textarea rows="4" maxLength="300" placeholder="Description"></textarea>
            </div>
        )
    }
}

export default Personal;