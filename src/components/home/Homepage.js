import React from 'react';

import './Homepage.scss';

export default class Homepage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            pets: []
        };
    }

    componentDidMount() {
        this.getPets();
    }

    getPets = _ => {
        fetch('http://localhost:4000/pets')
            .then(response => response.json())
            .then(response => this.setState({pets: response.data}))
            .catch(err => console.error(err))
    };

    addPet = () => {

        fetch('https://localhost:4000/pets/add/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            credentials: "same-origin",
            body: JSON.stringify({
                name: 'Tuppy',
                age: 10,
                description: 'Tuppy Wuppy is a fluffy.',
                owner_id: 2,
                species_id: 6
            })
        }).then(response => response.json())
    };

    renderPet = ({pet_id, name, description}) => <div key={pet_id}> {name} <br/> {description} </div>


    render() {
        const {pets} = this.state;
        return (
            <div className={'home'}>
                {pets.map(this.renderPet)}
                <button onClick={() => this.addPet()}>Add Chinny </button>
            </div>

        );
    }
}