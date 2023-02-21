import React from "react";

class Personal extends React.Component {
    render() {
        return (
            <div>
                <h2>Personal Details</h2>
                <input placeholder="Title" type="text"></input>
                <input placeholder="First Name" type="text"></input>
                <input placeholder="Last Name" type="text"></input>
                <input placeholder="Address" type="text"></input>
                <input placeholder="Email" type="text"></input>
                <input placeholder="Phone Number" type="text"></input>
                <textarea rows="5" maxLength="300" placeholder="Description"></textarea>
            </div>
        )
    }
}

export default Personal;