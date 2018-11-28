import React from 'react';
import './SitterCard.scss';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import {userImages} from "../../constants";
import Stars from "./Stars";

export default class SitterCard extends React.Component {

    render() {
        return (
            <Card className={'sitter-card'}>
                <CardActionArea className={'card-action'}>
                    <div className={'pet-profile'}>
                        <CardMedia
                            className={'sitter-pic'}
                            image={userImages[this.props.sitter.user_id - 1]}
                            title={this.props.sitter.name}
                        />
                    </div>
                    <CardContent className={'sitter-content'}>
                        <div className={'title'}>
                            <h3>{this.props.sitter.name}</h3>
                            <Button className={'contact'} variant={'contained'} color={'secondary'}>Contact</Button>
                        </div>
                        <h4>{this.props.sitter.city}</h4>
                        <p>{this.props.sitter.email}</p>
                        <p>{this.props.sitter.phone_number}</p>
                        <div className="prefs">Dog, Cat, Small Animal</div>
                        <Stars stars={this.props.sitter.avg_rating}/>
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    }
}