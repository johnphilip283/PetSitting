import React from 'react';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import Grid from "@material-ui/core/Grid";

export default class SitterPreferences extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dog: true,
            cat: true,
            bird: true,
            reptileScale: true,
            rabbit: true,
            smallAnimal: true,
            barnyard: true,
            fish: true
        }
    }

    handleChange = name => event => {
        this.setState({[name]: event.target.checked});
    };

    render() {
        return (
            <div className={'siter-preferences'}>
                <FormGroup>
                    <Grid container direction={'row'} spacing={24}>
                        <Grid container item direction={'column'} md={2} xs={12}>
                            <Grid item>
                                <FormControlLabel control={
                                    <Checkbox checked={this.state.dog} onChange={this.handleChange('dog')}
                                              value='1' color="primary"/>} label="Dog"/>
                            </Grid>
                            <Grid item>
                                <FormControlLabel control={
                                    <Checkbox checked={this.state.cat} onChange={this.handleChange('cat')}
                                              value='2' color="primary"/>} label="Cat"/>
                            </Grid>
                        </Grid>
                        <Grid container item direction={'column'} md={2} xs={12}>
                            <Grid item>
                                <FormControlLabel control={
                                    <Checkbox checked={this.state.bird} onChange={this.handleChange('bird')}
                                              value='3' color="primary"/>} label="Birb"/>
                            </Grid>
                            <Grid item>
                                <FormControlLabel control={
                                    <Checkbox checked={this.state.reptileScale}
                                              onChange={this.handleChange('reptileScale')}
                                              value='4' color="primary"/>} label="Reptile & Scales"/>
                            </Grid>
                        </Grid>
                        <Grid container item direction={'column'} md={2} xs={12}>
                            <Grid item>
                                <FormControlLabel control={
                                    <Checkbox checked={this.state.rabbit} onChange={this.handleChange('rabbit')}
                                              value='5' color="primary"/>} label="Rabbit"/>
                            </Grid>
                            <Grid item>
                                <FormControlLabel control={
                                    <Checkbox checked={this.state.smallAnimal}
                                              onChange={this.handleChange('smallAnimal')}
                                              value='6' color="primary"/>} label="Small Animal"/>
                            </Grid>
                        </Grid>
                        <Grid container item direction={'column'} md={3} xs={12}>
                            <Grid item>
                                <FormControlLabel control={
                                    <Checkbox checked={this.state.barnyard} onChange={this.handleChange('barnyard')}
                                              value='7' color="primary"/>} label="Barnyard"/>
                            </Grid>
                            <Grid item>
                                <FormControlLabel control={
                                    <Checkbox checked={this.state.fish} onChange={this.handleChange('fish')}
                                              value='8' color="primary"/>} label="Fish"/>
                            </Grid>
                        </Grid>
                    </Grid>
                </FormGroup>
            </div>
        );
    }
}