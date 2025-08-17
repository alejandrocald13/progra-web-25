import './PokemonCard.css'

function PokemonCard({key, name}){
    
    
    
    return(<>
    <div className='card'>
        <h2 className='title'> {name} </h2>
    </div>
    </>)
}

export default PokemonCard;