import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';
import Home from './home/Home';
import Song from './song/Song';
import NewSong from './new_song/NewSong';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/new">Create new song</Link>
                            </li>
                        </ul>
                    </nav>
                    
                    <div>
                        <Route exact path="/" component={Home} />
                        <Route path="/new" component={NewSong} />
                    <Route path="/song/:songId" component={Song} />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
