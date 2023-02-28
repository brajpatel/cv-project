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
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nam libero justo laoreet. Platea dictumst vestibulum rhoncus est pellentesque. Aenean euismod elementum nisi quis eleifend. Consectetur adipiscing elit ut aliquam curs.',
            education: {
                school: '',
                title: '',
                start: '',
                end: '',
                id: uniqid()
            },
            educations: [
                {
                    school: 'Schoo Community College',
                    title: 'A-Level Gamin',
                    start: '20/08/2019',
                    end: '18/06/2020',
                    id: uniqid()
                }
            ]
        }

        this.handleTitle = this.handleTitle.bind(this);
        this.handleForename = this.handleForename.bind(this);
        this.handleSurname = this.handleSurname.bind(this);
        this.handleAddress = this.handleAddress.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePhone = this.handlePhone.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.addEducation = this.addEducation.bind(this);
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

    handleSchoolName(e) {
        this.setState({ education: { school: e.target.value } })
    }

    addEducation() {
        if(this.state.educations.length >= 3) return;
        
        this.setState({
            educations: this.state.educations.concat(this.state.education),
            education: {
                school: '',
                title: '',
                start: '',
                end: '',
                id: uniqid()
            }
        })
    }

    render() {
        const { title, forename, surname, address, email, phone, description, educations } = this.state;

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
                    <Education
                        handleSchoolName={this.handleSchoolName}
                        addEducation={this.addEducation}
                    />
                    
                </div>
                <Preview
                    title={title}
                    forename={forename}
                    surname={surname}
                    address={address}
                    email={email}
                    phone={phone}
                    description={description}
                    educations={educations}
                />
            </div>
        )
    }
}

export default Main;