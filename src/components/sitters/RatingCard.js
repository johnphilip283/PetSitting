import React from 'react';
import './RatingCard.scss';
import Card from "@material-ui/core/Card/Card";
import CardActionArea from "@material-ui/core/CardActionArea/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia/CardMedia";
import CardContent from "@material-ui/core/CardContent/CardContent";
import {userImages} from "../../constants";
import Stars from "./Stars";

export default class RatingCard extends React.Component {

    render() {
        return (
            <Card className={'rating-card'}>
                    <div className={'user-profile'}>
                        <CardMedia
                            className={'user-pic'}
                            image={userImages[this.props.rating.rater_id - 1]}
                            title={this.props.rating.rater_name}
                        />
                        <h6>{this.props.rating.rater_name}</h6>
                    </div>
                    <CardContent className={'rating-content'}>
                        <Stars stars={this.props.rating.stars}/>
                        <p>{this.props.rating.description}</p>
                    </CardContent>
            </Card>
        );
    }
}