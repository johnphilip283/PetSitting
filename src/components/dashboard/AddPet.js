import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Grid from "@material-ui/core/Grid";

import './AddPet.scss';

export default class AddPet extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,

        };
    }

    handleClickOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
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
                            <Grid container item xs={6}>
                                <Grid item xs={12}>
                                    <TextField id="name" label="Name" type="text" variant={'outlined'}
                                               margin="dense" fullWidth/>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField id="age" label="Age" type="number" variant={'outlined'}
                                               margin="dense" fullWidth/>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField id="description" label="Description" type="text" variant={'outlined'}
                                               margin="dense" multiline rows="8" fullWidth/>
                                </Grid>
                            </Grid>
                            <Grid container item xs={6} direction={'column'} spacing={24}>
                                <Grid item>
                                    <div style={{width: '250px', height: '250px', backgroundColor: '#D8D8D8'}}></div>
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
                        <Button onClick={this.handleClose} color="primary" variant={'contained'}>
                            Submit
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }

}