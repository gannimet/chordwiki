import React, { Component } from 'react';

import './Song.css';

class Song extends Component {
    
    constructor(props) {
        super(props);
        console.log('match:', props.match);
    }
    
    render() {
        return (
            <div className="row">
                <div className="col-xs-12">I am the Song component</div>
            </div>
        );
    }
    
}

export default Song;