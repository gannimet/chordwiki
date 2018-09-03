import React, { Component } from 'react';
import Link from 'react-router-dom/Link';

import './NewSong.css';

class NewSong extends Component {
    
    render() {
        return (
            <div className="row">
                <div className="col-xs-12">
                    Here you can create a new song.

                    Also, try looking at <Link to="/song/1">our first song</Link>.
                </div>
            </div>
        );
    }
    
}

export default NewSong;