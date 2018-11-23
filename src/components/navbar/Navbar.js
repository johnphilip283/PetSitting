import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import './Navbar.scss';
import {Link} from "react-router-dom";

export default class Navbar extends React.Component {

    render() {
        return (
            <Grid className={'navbar'} container justify={'space-between'} alignItems={'center'}>
                <Grid container item justify={'flex-start'} alignItems={'center'} direction={'row'} xs={8} spacing={40}>
                    <Grid item>
                        <Link to='/dashboard'>
                            <img src={require('../../assets/logo.png')} alt={'logo'} width={200}/>
                        </Link>
                    </Grid>
                    <Grid item className={this.props.activeTab === 'dashboard' ? 'active' : null}>
                        <Link to='/dashboard'>DASHBOARD</Link>
                    </Grid>
                    <Grid item className={this.props.activeTab === 'listings' ? 'active' : null}>
                        <Link to='/dashboard'>LISTINGS</Link>
                    </Grid>
                    <Grid item className={this.props.activeTab === 'sitters' ? 'active' : null}>
                        <Link to='/dashboard'>SITTERS</Link>
                    </Grid>
                </Grid>
                <Grid container item className={'profile'} xs={4} justify={'flex-end'} alignItems={'center'}>
                    <Link to='/dashboard'>
                        <Button color={'secondary'} variant={'outlined'}>Login</Button>
                    </Link>
                </Grid>
            </Grid>
        );
    }
}
