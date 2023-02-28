import '../styles/preview.css'
import React from "react";
import Header from './preview components/Preview-Header';
import Aside from './preview components/Preview-Aside';
import Main from './preview components/Preview-Main';


class Preview extends React.Component {
    render() {
        const { title, forename, surname, address, email, phone, description, educations, deleteEducation } = this.props;
        
        return (
            <div className="cv-preview">
                <Header title={title} forename={forename} surname={surname}/>
                <Aside address={address} email={email} phone={phone}/>
                <Main description={description} educations={educations} deleteEducation={deleteEducation}/>
            </div>
        )
    }
}

export default Preview;