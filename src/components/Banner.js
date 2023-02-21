import '../styles/banner.css'
import React from "react";

class Banner extends React.Component {
    render() {
        return (
            <div className="banner">
                <h1>CV Creator</h1>
                <a className="github-link" href="https://github.com/brajpatel" target="_blank" rel="noreferrer" title='Check out my Github!'><i class="fa-brands fa-github"></i></a>
            </div>
        )
    }
}

export default Banner;