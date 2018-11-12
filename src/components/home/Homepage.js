import React from 'react';

import './Homepage.scss';

export default class Homepage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'home'}>
                <p>I want a bunny</p>
            </div>

        );
    }
}