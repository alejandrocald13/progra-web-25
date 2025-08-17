import { use, useEffect, useState } from 'react';
import api from '../utils/api';
import './PokemonCard.css'

function PokemonCard({id}){
    
    const [pokemon, setPokemon] = useState(null);
    const [moves, setMoves] = useState([]);

    if (!pokemon) {
        return (
        <div className="pokemon-card">
            {/* Header */}
            <div className="card-header">
            <span className="card-name">PIKACHU</span>
            <span className="card-hp">HP 60</span>
            </div>

            {/* Image */}
            <div className="card-image">
            <img 
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" 
                alt="pikachu" 
            />
            </div>

            {/* Type, Height, Weight */}
            <div className="card-info">
            <p><b>Type:</b> electric</p>
            <p><b>Height:</b> 40 cm</p>
            <p><b>Weight:</b> 6 kg</p>
            </div>

            {/* Moves */}
            <div className="card-moves">
            <div className="move">
                <span className="move-name">thunder-shock</span>
                <span className="move-dmg">20+</span>
            </div>
            <div className="move">
                <span className="move-name">quick-attack</span>
                <span className="move-dmg">10+</span>
            </div>
            </div>
        </div>
        );

    }

}

export default PokemonCard;