import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import './CreateListing.scss';
import Navbar from "../navbar/Navbar";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import {Link, Redirect} from "react-router-dom";
import {user_id} from '../../constants';

export default class CreateListing extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            start: new Date().toISOString().split('T')[0],
            end: new Date().toISOString().split('T')[0],
            pet_id: '',
            wage: '',
            description: '',
            pets: [],
            redirect: false
        };
    }

    componentDidMount() {
        this.getUserPets();

    }

    getUserPets = _ => {
        fetch(`http://localhost:5000/users/${user_id}/pets`)
            .then(response => response.json())
            .then(response => this.setState({pets: response.data}))
            .catch(err => console.error(err))
    };

    createListing = () => {
        fetch(`http://localhost:5000/listings/create?owner_id=${user_id}&title=${this.state.title}&start=${this.state.start}&end=${this.state.end}&pet_id=${this.state.pet_id}&wage=${this.state.wage}&description=${this.state.description}`)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                this.setState({redirect: true});
            })
            .catch(err => console.error(err))
    };

    handleChange = name => event => {
        this.setState({[name]: event.target.value});
    };

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        this.createListing();
    };


    render() {
        if (this.state.redirect) {
            return <Redirect to={"/listings"}/>
        } else {
            return (
                <div className="create-listing">
                    <Navbar activeTab={'listings'}/>
                    <Grid container direction={'column'} className={'content'} spacing={16}>
                        <Grid item xs={12}>
                            <h1>Create Listing</h1>
                        </Grid>
                        <Grid item xs={12}>
                            <span>Looking for a pet sitter? Create a job listing for pet-sitters to find.</span>
                        </Grid>
                        <Grid container item className={'form'} spacing={24} md={6} xs={12}>
                            <Grid item xs={12}>
                                <TextField variant={'outlined'} fullWidth label={'Title'} type={'text'}
                                           value={this.state.title} onChange={this.handleChange('title')}/>
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <TextField label="Start Date" type="date" value={this.state.start}
                                           variant={'outlined'} fullWidth onChange={this.handleChange('start')}/>
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <TextField label="End Date" type="date" value={this.state.end}
                                           variant={'outlined'} fullWidth onChange={this.handleChange('end')}/>
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <FormControl variant="outlined" fullWidth>
                                    <InputLabel>Pet</InputLabel>
                                    <Select value={this.state.pet_id}
                                            onChange={this.handleChange('pet_id')}
                                            input={<OutlinedInput fullWidth labelWidth={1} value={this.state.pet_id}
                                                                  name="pet"/>}>
                                        {this.state.pets.map(pet => (
                                            <MenuItem key={pet.pet_id} value={pet.pet_id}>{pet.name}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <TextField label="Wage" type="number" value={this.state.wage}
                                           variant={'outlined'} fullWidth onChange={this.handleChange('wage')}/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField multiline label="Description" rows={12} type="text"
                                           value={this.state.description}
                                           variant={'outlined'} fullWidth onChange={this.handleChange('description')}/>
                            </Grid>
                            <Grid container item direction={'row'} justify={'flex-end'} spacing={16}>
                                <Grid item>
                                    <Button color={'primary'} type={'button'}>
                                        <Link to='/listings'>Cancel</Link>
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button color={'primary'} variant={'contained'} type={'button'}
                                            onClick={this.handleSubmit}>Save</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                </div>

            );
        }
    }

}