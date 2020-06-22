import React, { Component } from 'react';
import data from './data';
import Pokedex from './Pokedex';

class Pokegame extends Component {
    static defaultProps = {
        pokemon: data
    }

    render() {
        let hand1 = [];
        let hand2 = [...this.props.pokemon];
        while (hand1.length < hand2.length) {
            let randIdx = Math.floor(Math.random() * hand2.length);
            let pok = hand2.splice(randIdx, 1)[0];
            hand1.push(pok)
        }

        let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
        let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);

        return (
            <div className="Pokegame">
                <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2 ? true : false} />
                <Pokedex pokemon={hand2} exp={exp2} isWinner={exp1 > exp2 ? false : true} />
            </div>
        );
    }
}

export default Pokegame;