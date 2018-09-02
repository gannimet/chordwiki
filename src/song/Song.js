import React, { Component } from 'react';

import './Song.css';

class Song extends Component {
    
    constructor(props) {
        super(props);
        console.log('match:', props.match);
    }
    
    render() {
        return (
            <div>I am the Song component</div>
        );
    }
    
}

export default Song;