import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Grid from "@material-ui/core/Grid";

import './AddPet.scss';
import {user_id} from "../../constants";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import MenuItem from "@material-ui/core/MenuItem";

// Add Pet Modal
export default class AddPet extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            species: [],
            name: '',
            age: '',
            description: '',
            species_id: ''
        };
    }

    componentDidMount() {
        this.getSpecies();
    }

    // Gets all species from database
    getSpecies = () => {
        fetch(`http://localhost:5000/species`)
            .then(response => response.json())
            .then(response => {
                this.setState({species: response.data})
            }).catch(err => console.error(err))
    };

    // Adds pet to database
    addPet = () => {
        fetch(`http://localhost:5000/pets/add?name=${this.state.name}&age=${this.state.age}&description=${this.state.description}&owner_id=${user_id}&species_id=${this.state.species_id}`)
            .then(response => response.json())
            .then(response => {
                console.log(response);
            })
            .catch(err => console.error(err))
    };

    handleClickOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    handleChange = name => event => {
        this.setState({[name]: event.target.value});
    };

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        this.addPet();
    };

    render() {
        return (
            <div className="add-pet">
                <Button onClick={this.handleClickOpen} variant={'contained'} color={'secondary'}>
                    + Add Pet
                </Button>
                <Dialog
                    className={'pet-dialog'}
                    open={this.state.open}
                    onClose={this.handleClose}>
                    <DialogContent>
                        <Grid container spacing={24}>
                            <Grid item xs={12}>
                                <h1>Add Pet</h1>
                            </Grid>
                            <Grid container item xs={6} spacing={16}>
                                {/*Pet Name Input*/}
                                <Grid item xs={12}>
                                    <TextField id="name" label="Name" type="text" variant={'outlined'}
                                               value={this.state.name} onChange={this.handleChange('name')} fullWidth/>
                                </Grid>
                                {/*Pet Age Input*/}
                                <Grid item xs={6}>
                                    <TextField id="age" label="Age" type="number" variant={'outlined'}
                                               value={this.state.age} onChange={this.handleChange('age')} fullWidth/>
                                </Grid>
                                {/*Pet Species Dropdown*/}
                                <Grid item xs={6}>
                                    <FormControl variant="outlined" fullWidth>
                                        <InputLabel>Species</InputLabel>
                                        <Select value={this.state.species_id}
                                                onChange={this.handleChange('species_id')}
                                                input={<OutlinedInput fullWidth labelWidth={1}
                                                                      name="species_id"/>}>
                                            {this.state.species.map(sp => (
                                                <MenuItem key={sp.species_id}
                                                          value={sp.species_id}>{sp.species_name}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                                {/*Pet Description Input*/}
                                <Grid item xs={12}>
                                    <TextField id="description" label="Description" type="text" variant={'outlined'}
                                               value={this.state.description}
                                               onChange={this.handleChange('description')}
                                               multiline rows="8" fullWidth/>
                                </Grid>
                            </Grid>
                            <Grid container item xs={6} direction={'column'} spacing={24}>
                                <Grid item>
                                    <div style={{width: '250px', height: '250px', backgroundColor: '#D8D8D8'}}/>
                                </Grid>
                                <Grid item>
                                    <Button variant={'contained'} color={'secondary'} fullWidth>Upload Photo</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleSubmit} color="primary" variant={'contained'}>
                            Submit
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }

}