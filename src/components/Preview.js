import '../styles/preview.css'
import React from "react";
import Header from './preview components/Header';
import Aside from './preview components/Aside';
import Main from './preview components/Main';


class Preview extends React.Component {
    render() {
        return (
            <div className="cv-preview">
                <Header/>
                <Aside/>
                <Main/>
            </div>
        )
    }
}

export default Preview;