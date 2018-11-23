import React from 'react';

export default class App extends React.Component {

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
        fetch('http://localhost:5000/pets')
            .then(response => response.json())
            .then(response => this.setState({pets: response.data}))
            .catch(err => console.error(err))
    };

    addPet = () => {
        const tuppy = {
            name: 'Tuppy',
            age: 10,
            description: 'tuppy wuppy',
            owner_id: 2,
            species_id: 6
        };

        fetch(`http://localhost:5000/pets/add?name=${tuppy.name}&age=${tuppy.age}&description=${tuppy.description}`
            + `&owner_id=${tuppy.owner_id}&species_id=${tuppy.species_id}`)
            .then(response => response.text())
            .then(this.getPets)
            .catch(err => console.error(err))
    };

    renderPet = ({pet_id, name, description}) => <div key={pet_id}> {name} <br/> {description} </div>

    render() {
        const {pets} = this.state;
        return (
            <div className={'home'}>
                {pets.map(this.renderPet)}
              <button onClick={() => this.addPet()}>Add Chinny</button>
            </div>

        );
    }

}
