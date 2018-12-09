import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import './Navbar.scss';
import {Link} from "react-router-dom";

export default class Navbar extends React.Component {

    render() {
        return (
            <Grid className={'navbar'} container justify={'space-between'} alignItems={'center'}>
                <Grid className={'left'} container item justify={'flex-start'} alignItems={'center'} direction={'row'}
                      xs={8} spacing={40}>
                    {/* Logo */}
                    <Grid item>
                        <Link to='/dashboard'>
                            <img src={'/assets/logo.png'} alt={'logo'} width={200}/>
                        </Link>
                    </Grid>
                    <Grid item className={this.props.activeTab === 'dashboard' ? 'active' : null}>
                        <Link to='/dashboard'>DASHBOARD</Link>
                    </Grid>
                    <Grid item className={this.props.activeTab === 'listings' ? 'active' : null}>
                        <Link to='/listings'>LISTINGS</Link>
                    </Grid>
                    <Grid item className={this.props.activeTab === 'sitters' ? 'active' : null}>
                        <Link to='/sitters'>SITTERS</Link>
                    </Grid>
                </Grid>
                {/* User Profile */}
                <Grid item className={'profile'}>
                    <span>Amy Luo</span>
                </Grid>
            </Grid>
        );
    }
}
