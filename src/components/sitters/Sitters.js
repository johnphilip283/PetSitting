import React from 'react';
import Grid from '@material-ui/core/Grid';
import Navbar from "../navbar/Navbar";

import './Sitters.scss';
import SitterCard from "./SitterCard";
import {Link} from "react-router-dom";

// Sitter Container for sitter tab
export default class Sitters extends React.Component {

    state = {
        sitters: []
    };

    componentDidMount() {
        this.getSitters();
    }

    // get all users that are pet-sitters
    getSitters = _ => {
        fetch(`http://localhost:5000/sitters`)
            .then(response => response.json())
            .then(response => this.setState({sitters: response.data}))
            .catch(err => console.error(err))
    };

    render() {
        return (
            <div className={'sitters'}>
                <Navbar activeTab={'sitters'}/>
                <Grid container direction={'column'} className={'content'} spacing={24}>
                    <Grid container item direction={'row'} justify={'space-between'} alignItems={'center'}>
                        <Grid item>
                            <h1>Pet-Sitters</h1>
                        </Grid>
                    </Grid>
                    <Grid item container direction={'row'} justify={'flex-start'} alignItems={'flex-start'}
                          spacing={24}>
                        {this.state.sitters.map(sitter => (
                            <Grid item key={sitter.user_id}>
                                <SitterCard sitter={sitter}/>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </div>
        );
    }
}