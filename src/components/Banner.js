import '../styles/banner.css'
import React from "react";

function Banner() {
    return (
        <div className="banner">
            <h1>CV Creator</h1>
            <a className="github-link" href="https://github.com/brajpatel" target="_blank" rel="noreferrer" title='Check out my Github!'>
                <i className="fa-brands fa-github"></i>
            </a>
        </div>
    )
}

export default Banner;