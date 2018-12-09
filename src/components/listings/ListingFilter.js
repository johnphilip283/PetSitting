import React from 'react';
import './ListingCard.scss';
import Card from "@material-ui/core/Card/Card";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import './ListingFilter.scss';
import TextField from "@material-ui/core/TextField";

// Filter Listings Component
export default class ListingFilter extends React.Component {

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
            fish: true,
            min: '',
            max: ''
        }
    }

    handleChange = name => event => {
        this.setState({[name]: event.target.checked});
    };

    render() {
        return (
            <Card className={'filter'}>
                <h3>Filters</h3>
                <h4>Pet Type</h4>
                {/* Filter by Species */}
                <FormGroup className={'category'}>
                    <FormControlLabel control={
                        <Checkbox checked={this.state.dog} onChange={this.handleChange('dog')}
                                  value='1' color="primary"/>} label="Dog"/>
                    <FormControlLabel control={
                        <Checkbox checked={this.state.cat} onChange={this.handleChange('cat')}
                                  value='2' color="primary"/>} label="Cat"/>
                    <FormControlLabel control={
                        <Checkbox checked={this.state.bird} onChange={this.handleChange('bird')}
                                  value='3' color="primary"/>} label="Birb"/>
                    <FormControlLabel control={
                        <Checkbox checked={this.state.reptileScale} onChange={this.handleChange('reptileScale')}
                                  value='4' color="primary"/>} label="Reptile & Scales"/>
                    <FormControlLabel control={
                        <Checkbox checked={this.state.rabbit} onChange={this.handleChange('rabbit')}
                                  value='5' color="primary"/>} label="Rabbit"/>
                    <FormControlLabel control={
                        <Checkbox checked={this.state.smallAnimal} onChange={this.handleChange('smallAnimal')}
                                  value='6' color="primary"/>} label="Small Animal"/>
                    <FormControlLabel control={
                        <Checkbox checked={this.state.barnyard} onChange={this.handleChange('barnyard')}
                                  value='7' color="primary"/>} label="Barnyard"/>
                    <FormControlLabel control={
                        <Checkbox checked={this.state.fish} onChange={this.handleChange('fish')}
                                  value='8' color="primary"/>} label="Fish"/>
                </FormGroup>
                <h4>Wage</h4>
                {/* Filter by Min & Max Wage */}
                <div className={'category'}>
                    <TextField
                        label="Min"
                        value={this.state.min}
                        onChange={this.handleChange('min')}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        label="Max"
                        value={this.state.max}
                        onChange={this.handleChange('max')}
                        margin="normal"
                        variant="outlined"
                    />
                </div>
            </Card>
        );
    }
}