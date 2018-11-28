import React from 'react';
import Grid from '@material-ui/core/Grid';

import './Stars.scss';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarBorderIcon from '@material-ui/icons/StarBorder';

export default class Stars extends React.Component {
    state = {
        stars: []
    };

    getStars(num) {
        let stars = [];
        for (let i = 0; i < 5; i++) {
            if (num >= 1) {
                stars.push(<span><StarIcon color={'secondary'}/></span>);
            } else if (num >= 0.25) {
                stars.push(<span><StarHalfIcon color={'secondary'}/></span>);
            } else {
                stars.push(<span><StarBorderIcon color={'secondary'}/></span>);
            }
            num--;
        }
        return stars
    }

    render() {
        const stars = this.getStars(this.props.stars);
        return (
            <div className="star-rating">
                {stars[0]}
                {stars[1]}
                {stars[2]}
                {stars[3]}
                {stars[4]}
            </div>

        );
    }
}