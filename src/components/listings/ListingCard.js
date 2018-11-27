import React from 'react';
import './ListingCard.scss';
import Card from "@material-ui/core/Card/Card";
import CardActionArea from "@material-ui/core/CardActionArea/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia/CardMedia";
import CardContent from "@material-ui/core/CardContent/CardContent";
import {petImages} from "../../constants";

export default class ListingCard extends React.Component {

    render() {
        return (
            <Card className={'listing-card'}>
                <CardActionArea className={'card-action'}>
                    <div className={'pet-profile'}>
                        <CardMedia
                            className={'pet-pic'}
                            image={petImages[this.props.listing.pet_id - 1]}
                            title={this.props.listing.name}
                        />
                        <h6>{this.props.listing.pet_name}
                            <span className={'species'}>, {this.props.listing.species}</span>
                        </h6>
                    </div>
                    <CardContent className={'listing-content'}>
                        <h3>{this.props.listing.title}</h3>
                        <h4>Owner: {this.props.listing.owner}</h4>
                        <h5>01/01/19 - 02/14/19 | Boston, MA</h5>
                        <p>{this.props.listing.description}</p>
                        <div className="wage">${this.props.listing.wage}/hr</div>
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    }
}