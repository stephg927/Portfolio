import React, { Component } from 'react';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 }; 
    }
    render(){
        return(
            <div><h1>Projects</h1></div>
        )
    }
}

export default Projects; 