import React, { Component } from 'react';
import data from './data';
import { Pokecard } from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {

    render() {
        let title;
        if (this.props.isWinner) {
            title = <h1 className="Pokedex-winner">Winner!</h1>
        } else {
            title = <h1 className="Pokedex-loser">Loser!</h1>
        }
        return (
            <div className="Pokedex">
                {title}
                <h4>Total Experience: {this.props.exp}</h4>
                <div className="Pokedex-cards">
                    {this.props.pokemon.map((p) => (
                        <Pokecard data={p} />
                    ))}
                </div>
            </div>
        );

    }
}

export default Pokedex;