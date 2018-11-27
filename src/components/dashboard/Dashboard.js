import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Navbar from "../navbar/Navbar";

import './Dashboard.scss';
import PetCard from "./PetCard";
import SitterPreferences from "./SitterPreferences";
import ListingCard from "../listings/ListingCard";
import AddPet from "./AddPet";
import {user_id} from '../../constants';
import {Link} from "react-router-dom";

export default class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {},
            pets: [],
            listings: []
        }
    }

    componentDidMount() {
        this.getUser();
        this.getUserPets();
        this.getUserListings();
    }

    getUser = _ => {
        fetch(`http://localhost:5000/users/${user_id}`)
            .then(response => response.json())
            .then(response => this.setState({user: response.data[0]}, () => console.log(this.state)))
            .catch(err => console.error(err))
    };


    getUserPets = _ => {
        fetch(`http://localhost:5000/users/${user_id}/pets`)
            .then(response => response.json())
            .then(response => this.setState({pets: response.data}, () => console.log(this.state)))
            .catch(err => console.error(err))
    };

    getUserListings = _ => {
        fetch(`http://localhost:5000/users/${user_id}/listings`)
            .then(response => response.json())
            .then(response => this.setState({listings: response.data}, () => console.log(this.state)))
            .catch(err => console.error(err))
    };

    render() {
        return (
            <div className={'dashboard'}>
                <Navbar activeTab={'dashboard'}/>
                <Grid container direction={'column'} className={'content'} spacing={24}>
                    <Grid item>
                        <h1>Dashboard</h1>
                    </Grid>
                    {this.state.user.is_sitter === 1 &&
                    <React.Fragment>
                        <Grid item>
                            <h2>Your Sitter Preferences</h2>
                        </Grid>
                        <Grid item>
                            <SitterPreferences/>
                        </Grid>
                    </React.Fragment>
                    }
                    <Grid container item direction={'row'} justify={'space-between'} alignItems={'center'}
                          className={'header'}>
                        <Grid item>
                            <h2>Your Pets</h2>
                        </Grid>
                        <Grid item>
                            <AddPet/>
                        </Grid>
                    </Grid>
                    <Grid item container direction={'row'} justify={'flex-start'} alignItems={'flex-start'}
                          spacing={24}>
                        {this.state.pets.map(pet => (
                            <Grid item key={pet.pet_id}>
                                <PetCard pet={pet}/>
                            </Grid>
                        ))}
                    </Grid>
                    <Grid container item className={'header'} direction={'row'} justify={'space-between'}
                          alignItems={'center'}>
                        <Grid item>
                            <h2>Your Listings</h2>
                        </Grid>
                        <Grid item>
                            <Button color={'secondary'} variant={'contained'}>
                                <Link to='/listings/create'>+ Create Listing</Link>
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container item direction={'column'} spacing={24}>
                        {this.state.listings.map(listing => (
                            <Grid item key={listing.request_id}>
                                <ListingCard listing={listing}/>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </div>
        );
    }
}