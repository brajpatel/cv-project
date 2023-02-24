import '../styles/preview.css'
import React from "react";
import Header from './preview components/Header';
import Aside from './preview components/Aside';
import Main from './preview components/Main';


class Preview extends React.Component {
    render() {
        const { title, forename, surname, address, email, phone } = this.props;
        
        return (
            <div className="cv-preview">
                <Header title={title} forename={forename} surname={surname}/>
                <Aside address={address} email={email} phone={phone}/>
                <Main/>
            </div>
        )
    }
}

export default Preview;