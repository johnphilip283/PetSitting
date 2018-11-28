import React from 'react';
import {userImages} from "../../constants";
import Grid from "@material-ui/core/Grid";
import Navbar from "../navbar/Navbar";
import Avatar from "@material-ui/core/Avatar";
import RatingCard from "./RatingCard";

export default class SitterRatings extends React.Component {

    state = {
        user: '',
        ratings: []
    };

    componentDidMount() {
        this.getUser();
        this.getRatings();
    }

    getUser = _ => {
        fetch(`http://localhost:5000/users/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(response => this.setState({user: response.data[0]}, () => console.log(this.state)))
            .catch(err => console.error(err))
    };

    getRatings = _ => {
        fetch(`http://localhost:5000/ratings/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(response => this.setState({ratings: response.data}, () => console.log(this.state)))
            .catch(err => console.error(err))
    };


    render() {
        return (
            <div className={'sitter-ratings'}>
                <Navbar activeTab={'sitters'}/>
                <Grid container direction={'column'} className={'content'} spacing={24}>
                    <Grid item>
                        <h1>Ratings for {this.state.user.name}</h1>
                    </Grid>
                    <Grid item container direction={'row'} justify={'flex-start'} alignItems={'flex-start'}
                          spacing={24} xs={9}>
                        {this.state.ratings.map(rating => (
                            <Grid item key={rating.request_id}>
                                <RatingCard rating={rating}/>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </div>
        );
    }


}