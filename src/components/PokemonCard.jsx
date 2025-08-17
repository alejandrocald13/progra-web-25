import { use, useEffect, useState } from 'react';
import api from '../utils/api';
import './PokemonCard.css'

function PokemonCard({id}){
    
    const [pokemon, setPokemon] = useState(null);

    async function getPokemonData(pokeId) {
        try{

            const response = await api.get(`/${pokeId}`)

            setPokemon(response.data);

        } catch (err){
            throw err
        }
    }

    useEffect(() =>{
        getPokemonData(id)
    }, [])

    if (pokemon) {
        return (
            <div className="card">
            <h2>{pokemon.name}</h2>
            <img src={pokemon.sprites.front_shiny} />
            <img src={pokemon.sprites.back_shiny} />
            <h2 className="title">{id}</h2>
            </div>
        );
    }

}

export default PokemonCard;