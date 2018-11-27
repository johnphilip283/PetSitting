import React from 'react';
import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import './Homepage.scss';

export default class Homepage extends React.Component {

    render() {
        return (
            <div className={'home'}>
                <Grid container>
                    <Grid container item className={'header'} justify={'space-between'} alignItems={'center'}>
                        <Grid item>
                            <img src={'/assets/logo.png'} alt={'logo'} width={230}/>
                        </Grid>
                        <Grid item>
                            <Link to='/dashboard'>
                                <Button color={'secondary'} variant={'outlined'}>Login</Button>
                            </Link>
                        </Grid>
                    </Grid>
                    <Grid container className={'body'} direction={'column'}>
                        <Grid item>
                            <h1>Find pet-sitters<br/>
                                for all your furry<br/>
                                or scaley companions</h1>
                        </Grid>
                        <Grid item>
                            <Link to='/dashboard'>
                            <Button color={'secondary'} variant={'contained'} size={'large'}>Sign Up</Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}