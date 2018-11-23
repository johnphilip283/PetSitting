import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Navbar from "../navbar/Navbar";

import './Dashboard.scss';
import PetCard from "./PetCard";
import SitterPreferences from "./SitterPreferences";
import ListingCard from "../listings/ListingCard";

export default class Dashboard extends React.Component {

    render() {
        return (
            <div className={'dashboard'}>
                <Navbar activeTab={'dashboard'}/>
                <Grid container direction={'column'} className={'content'} spacing={24}>
                    <Grid item>
                        <h1>Dashboard</h1>
                    </Grid>
                    <Grid item>
                        <h2>Your Sitter Preferences</h2>
                    </Grid>
                    <Grid item>
                        <SitterPreferences/>
                    </Grid>
                    <Grid container item direction={'row'} justify={'space-between'} alignItems={'center'}>
                        <Grid item>
                            <h2>Your Pets</h2>
                        </Grid>
                        <Grid item>
                            <Button color={'secondary'} variant={'contained'}>+ Add Pet</Button>
                        </Grid>
                    </Grid>
                    <Grid item container direction={'row'} justify={'flex-start'} alignItems={'flex-start'} spacing={24}>
                        <Grid item>
                            <PetCard/>
                        </Grid>
                        <Grid item>
                            <PetCard/>
                        </Grid>
                        <Grid item>
                            <PetCard/>
                        </Grid>
                        <Grid item>
                            <PetCard/>
                        </Grid>
                    </Grid>
                    <Grid container item direction={'row'} justify={'space-between'} alignItems={'center'}>
                        <Grid item>
                            <h2>Your Listings</h2>
                        </Grid>
                        <Grid item>
                            <Button color={'secondary'} variant={'contained'}>+ Add Listing</Button>
                        </Grid>
                    </Grid>
                    <Grid container item direction={'column'} spacing={'24'}>
                        <Grid item>
                            <ListingCard/>
                        </Grid>
                        <Grid item>
                            <ListingCard/>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}