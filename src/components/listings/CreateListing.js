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
import {Link} from "react-router-dom";

export default class CreateListing extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            start: new Date().toISOString().split('T')[0],
            end: new Date().toISOString().split('T')[0],
            pet_id: '',
            wage: '',
            description: ''
        };
    }

    handleChange = name => event => {
        this.setState({[name]: event.target.value});
    };



    render() {
        return (
            <div className="create-listing">
                <form onSubmit={this.handleSubmit}>
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
                                        input={<OutlinedInput fullWidth labelWidth={1} value={this.state.pet_id} name="pet_id"/>}>
                                    <MenuItem value={1}>Tofu</MenuItem>
                                    <MenuItem value={2}>UFO</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextField label="Age" type="number" value={this.state.age}
                                       variant={'outlined'} fullWidth/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField multiline label="Description" rows={12} type="text" value={this.state.description}
                                       variant={'outlined'} onChange={this.handleChange("description")} fullWidth/>
                        </Grid>
                        <Grid container item direction={'row'} justify={'flex-end'} spacing={16}>
                            <Grid item>
                                <Button type={"button"} color={'primary'}>
                                    <Link to='/listings'>Cancel</Link>
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button type={'submit'} color={'primary'} variant={'contained'} >Save</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                </form>
            </div>

        );
    }

}