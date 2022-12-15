import { useEffect, useState} from "react"
import axios from "axios"

export const Lista = () => {
    const [pokemons, setPokemons]= useState([])
    useEffect(() => {
        async function pegaDados() {
        const resposta = await axios.get('https://pokeapi.co/api/v2/pokemon')
        setPokemons(resposta.data.results)
        }
        pegaDados()
    }, [])

    return(
        <>
        <p> {pokemons.map(pokemon => {
            return(
                <p key={pokemon.name}>{pokemon.name}</p>
            )
        })} </p>
        <p> Item 2 </p>
        <p> Item 3 </p>
        </>
    )
}

export default Lista