import React from 'react';
import './ListingCard.scss';
import Card from "@material-ui/core/Card/Card";
import CardActionArea from "@material-ui/core/CardActionArea/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia/CardMedia";
import CardContent from "@material-ui/core/CardContent/CardContent";

export default class ListingCard extends React.Component {

    render() {
        return (
            <Card className={'listing-card'}>
                <CardActionArea className={'card-action'}>
                    <CardMedia
                        className={'pet-pic'}
                        image={require('../../assets/tofu.jpg')}
                        title="FUFU"
                    />
                    <CardContent className={'listing-content'}>
                        <h3>Tofu<span className={'species'}>, Dog</span></h3>
                        <h4>Owner: Amy Luo</h4>
                        <h5>01/01/19 - 02/14/19 | Boston, MA</h5>
                        <p>Tofu is the cutest fucking dog in the world and you’d be lucky to even lay your peasant
                            eyes on her. She is actually a cat.</p>
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    }
}