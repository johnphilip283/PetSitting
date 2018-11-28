import React from 'react';
import './SitterCard.scss';
import Card from "@material-ui/core/Card/Card";
import CardActionArea from "@material-ui/core/CardActionArea/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia/CardMedia";
import CardContent from "@material-ui/core/CardContent/CardContent";
import {petImages} from "../../constants";
import Stars from "./Stars";

export default class SitterCard extends React.Component {

    render() {
        return (
            <Card className={'sitter-card'}>
                <CardActionArea className={'card-action'}>
                    <div className={'pet-profile'}>
                        <CardMedia
                            className={'sitter-pic'}
                            image=''//{petImages[this.props.listing.pet_id - 1]}
                            title='john'//{this.props.listing.name}
                        />
                    </div>
                    <CardContent className={'sitter-content'}>
                        <h3>John Philip</h3>
                        <h4>Boston, MA</h4>
                        <p>philip.j@husky.neu.edu</p>
                        <p>(914)-826-5190</p>
                        <div className="prefs">Dog, Cat, Small Animal</div>
                        <Stars stars={3.5}/>
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    }
}