import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Navbar from "../navbar/Navbar";

import './Listings.scss';
import ListingCard from "./ListingCard";
import ListingFilter from "./ListingFilter";
import {Link} from "react-router-dom";

export default class Dashboard extends React.Component {

    state = {
        listings: []
    };

    componentDidMount() {
        this.getListings();
    }

    getListings = _ => {
        fetch(`http://localhost:5000/listings`)
            .then(response => response.json())
            .then(response => this.setState({listings: response.data}, () => console.log(this.state)))
            .catch(err => console.error(err))
    };

    render() {
        return (
            <div className={'listings'}>
                <Navbar activeTab={'listings'}/>
                <Grid container direction={'column'} className={'content'} spacing={24}>
                    <Grid container item direction={'row'} justify={'space-between'} alignItems={'center'}>
                        <Grid item>
                            <h1>Pet-Sitting Jobs</h1>
                        </Grid>
                        <Grid item>
                            <Button color={'secondary'} variant={'contained'}>
                                <Link to='/listings/create'>+ Create Listing</Link>
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container item direction={'row'} spacing={24} justify={'space-between'}>
                        <Grid item container direction={'row'} justify={'flex-start'} alignItems={'flex-start'}
                              spacing={24} xs={9}>
                            {this.state.listings.map(listing => (
                                <Grid item key={listing.request_id}>
                                    <ListingCard listing={listing}/>
                                </Grid>
                            ))}
                        </Grid>
                        <Grid item xs={3}>
                            <ListingFilter/>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}