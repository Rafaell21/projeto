import React from 'react';
import Post from './Post';

export default class App extends React.Component {
    render () {
        return (
            <div>
                <h1>Hello Word</h1>
                <Post title="Aprendendo ReactJS com RocketSeat" />
                <Post title="ReactJS é demais" />
                <Post title="Em breve mais videos de ReactJS" />

            </div>
        );
    }
}