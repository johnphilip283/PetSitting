import React from 'react';

import './PetCard.scss';
import Card from "@material-ui/core/Card/Card";
import CardActionArea from "@material-ui/core/CardActionArea/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia/CardMedia";
import CardContent from "@material-ui/core/CardContent/CardContent";

export default class PetCard extends React.Component {

    render() {
        return (
            <Card className={'pet-card'}>
                <CardActionArea>
                    <CardMedia
                        className={'pic'}
                        image={require('../..//assets/tofu.jpg')}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <h3>Tofu<span className={'species'}>, Dog</span></h3>
                            <p>Tofu is the cutest fucking dog in the world and you’d be lucky to even lay your peasant
                                eyes on her. She is actually a cat.</p>
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    }
}