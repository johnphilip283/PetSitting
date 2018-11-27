import React from 'react';

import './PetCard.scss';
import Card from "@material-ui/core/Card/Card";
import CardActionArea from "@material-ui/core/CardActionArea/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia/CardMedia";
import CardContent from "@material-ui/core/CardContent/CardContent";
import {petImages} from "../../constants";

export default class PetCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card className={'pet-card'}>
                <CardActionArea>
                    <CardMedia
                        className={'pic'}
                        image={petImages[this.props.pet.pet_id - 1]}
                        title={this.props.pet.name}
                    />
                    <CardContent>
                        <h3>{this.props.pet.name}<span className={'species'}>, {this.props.pet.species_name}</span></h3>
                        <p>{this.props.pet.description}</p>
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    }
}