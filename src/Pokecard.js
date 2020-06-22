import React, { Component } from 'react';
import './Pokecard.css'

// const Poke_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const Poke_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number)

class Pokecard extends Component {
    render() {
        const properties = this.props.data;
        let imgSrc = Poke_API + `${padToThree(properties.id)}.png`;
        return (
            <div className="Pokecard">
                <h1 className="Pokecard-title">{properties.name}</h1>
                <div className="Pokecard-image">
                    <img src={imgSrc} />
                </div>
                <p className="Pokecard-data">TYPE: {properties.type}</p>
                <p className="Pokecard-data">EXP: {properties.base_experience}</p>
            </div>
        );
    }
}

export { Pokecard }