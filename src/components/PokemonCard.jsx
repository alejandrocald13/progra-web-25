import { use, useEffect, useState } from 'react';
import api from '../utils/api';
import './PokemonCard.css'

function PokemonCard({id}){
    
    const [pokemon, setPokemon] = useState(null);
    const [moves, setMoves] = useState([]);

    function randomInt(max) {
        return Math.floor(Math.random() * max);
    }

    async function getPokemonData(pokeId) {
        try {
        const response = await api.get(`/pokemon/${pokeId}`);

        const randMoves = [];
        for (let i = 0; i < 2; i++) {
            randMoves.push(response.data.moves[randomInt(response.data.moves.length)]);
        }

        setMoves(randMoves);
        setPokemon(response.data);
        } catch (err) {
        throw err;
        }
    }

    useEffect(() => {
        getPokemonData(id);
    }, [id]);

    if (pokemon) {
        return (
            <div className="pokemon-card">
            {/* Header */}
            <div className="card-header">
                <span className="card-name">{pokemon.name.toUpperCase()}</span>
                <span className="card-hp">HP {pokemon.stats[0].base_stat}</span>
            </div>

            {/* Image */}
            <div className="card-image">
                <img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} />
            </div>

            {/* Type, Height, Weight */}
            <div className="card-info">
                <p><b>Type:</b> {pokemon.types[0].type.name}</p>
                <p><b>Height:</b> {pokemon.height * 10} cm</p>
                <p><b>Weight:</b> {pokemon.weight / 10} kg</p>
            </div>

            {/* Moves */}
            <div className="card-moves">
                {moves.map((m, i) => (
                <div key={i} className="move">
                    <span className="move-name">{m.move.name}</span>
                    <span className="move-dmg">20+</span>
                </div>
                ))}
            </div>
            </div>
        );
    }

}

export default PokemonCard;