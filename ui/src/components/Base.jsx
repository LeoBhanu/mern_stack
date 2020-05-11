import React, { Component } from 'react'

 class Base extends Component {
    render() {
        return ( 
            <div className = "container" >
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">WELCOME TO REACT</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default Base 