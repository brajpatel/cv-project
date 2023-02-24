import '../styles/editor.css'
import React from "react";
import Personal from "./form components/Personal";
import Preview from './Preview';

class Editor extends React.Component {
    constructor() {
        super();

        this.state = {
            title: 'Mr.',
            forename: 'John',
            surname: 'Smith',
            address: '125 Top Lane',
            email: 'john-smith@email.com',
            phone: '07123456789'
        }

        this.handleTitle = this.handleTitle.bind(this);
        this.handleForename = this.handleForename.bind(this);
        this.handleSurname = this.handleSurname.bind(this);
        this.handleAddress = this.handleAddress.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePhone = this.handlePhone.bind(this);
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

    render() {
        const { title, forename, surname, address, email, phone } = this.state;

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
                    />
                </div>
                <Preview
                    title={title}
                    forename={forename}
                    surname={surname}
                    address={address}
                    email={email}
                    phone={phone}
                />
            </div>
        )
    }
}

export default Editor;