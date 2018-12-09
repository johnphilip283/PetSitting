import React from 'react';
import './SitterCard.scss';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import {userImages} from "../../constants";
import Stars from "./Stars";
import {Redirect} from "react-router-dom";

// Card for Pet Sitters
export default class SitterCard extends React.Component {

    state = {
        redirect: false,
        prefs: []
    };

    componentDidMount() {
        this.getPreferences();
    }

    // Gets preferences of the user with user_id
    getPreferences = _ => {
        fetch(`http://localhost:5000/users/${this.props.sitter.user_id}/preferences`)
            .then(response => response.json())
            .then(response => {
                let prefs = '';
                response.data.forEach(pref => {prefs += pref.species_name + ', '});
                this.setState({prefs: prefs.substring(0, prefs.length - 2)});
                console.log(this.state);
            }).catch(err => console.error(err))
    };

    render() {
        {/* Go to sitter details */}
        if (this.state.redirect) {
            return <Redirect to={"/sitters/" + this.props.sitter.user_id}/>
        } else {
            return (
                <Card className={'sitter-card'}>
                    {/* Sitter Card */}
                    <CardActionArea className={'card-action'} onClick={() => this.setState({redirect: true})}>
                        {/* Sitter Photo */}
                        <div className={'sitter-profile'}>
                            <CardMedia
                                className={'sitter-pic'}
                                image={userImages[this.props.sitter.user_id - 1]}
                                title={this.props.sitter.name}
                            />
                        </div>
                        <CardContent className={'sitter-content'}>
                            <div className={'title'}>
                                {/* Sitter Name */}
                                <h3>{this.props.sitter.name}</h3>
                                <Button className={'contact'} variant={'contained'} color={'secondary'}>Contact</Button>
                            </div>
                            <h4>{this.props.sitter.city}</h4>
                            <p>{this.props.sitter.email}</p>
                            <p>{this.props.sitter.phone_number}</p>
                            {/* Sitter Preferences */}
                            <div className={'prefs'}>{this.state.prefs}</div>
                            {/* Sitter's average rating */}
                            <Stars stars={this.props.sitter.avg_rating}/>
                        </CardContent>
                    </CardActionArea>
                </Card>
            );
        }
    }
}