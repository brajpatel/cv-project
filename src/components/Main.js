import '../styles/editor.css'
import React from "react";
import uniqid from "uniqid";
import Personal from "./form components/Personal";
import Education from './form components/Education';
import Preview from './Preview';

class Main extends React.Component {
    constructor() {
        super();

        this.state = {
            title: 'Mr.',
            forename: 'John',
            surname: 'Smith',
            address: '125 Top Lane',
            email: 'john-smith@email.com',
            phone: '07123456789',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nam libero justo laoreet. Platea dictumst vestibulum rhoncus est pellentesque. Aenean euismod elementum nisi quis eleifend. Consectetur adipiscing elit ut aliquam curs.'
        }

        this.handleTitle = this.handleTitle.bind(this);
        this.handleForename = this.handleForename.bind(this);
        this.handleSurname = this.handleSurname.bind(this);
        this.handleAddress = this.handleAddress.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePhone = this.handlePhone.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
    }

    handleTitle(e) {
        this.setState({ title: e.target.value })
    }

    handleForename(e) {
        this.setState({ forename: e.target.value })
    }

    handleSurname(e) {
        this.setState({ surname: e.target.value })
    }

    handleAddress(e) {
        this.setState({ address: e.target.value })
    }

    handleEmail(e) {
        this.setState({ email: e.target.value })
    }

    handlePhone(e) {
        this.setState({ phone: e.target.value })
    }

    handleDescription(e) {
        this.setState({ description: e.target.value })
    }

    render() {
        const { title, forename, surname, address, email, phone, description } = this.state;

        return (
            <div>
                <div className="cv-editor">
                    <Personal
                        handleTitle={this.handleTitle}
                        handleForename={this.handleForename}
                        handleSurname={this.handleSurname}
                        handleAddress={this.handleAddress}
                        handleEmail={this.handleEmail}
                        handlePhone={this.handlePhone}
                        handleDescription={this.handleDescription}
                    />
                    <Education/>
                </div>
                <Preview
                    title={title}
                    forename={forename}
                    surname={surname}
                    address={address}
                    email={email}
                    phone={phone}
                    description={description}
                />
            </div>
        )
    }
}

export default Main;