import { useEffect, useState} from "react"
import axios from "axios"

export const Lista = () => {

    const [pokemons, setPokemons]= useState([])
    const [listaOculta, setListaOculta] = useState(false)

    useEffect(() => {
        async function pegaDados() {
        const resposta = await axios.get('https://pokeapi.co/api/v2/pokemon')
        setPokemons(resposta.data.results)
        }
        pegaDados()
    }, [])

    function ocultarLista() {
        setListaOculta((valor) => !valor);
        console.log(listaOculta)
    }

    return(
        <>
        <h2>Pokemon</h2>
        <input type='checkbox' onChange={ocultarLista}/>
        <label> Ocultar Lista </label>
        <p> {pokemons.map(pokemon => {
            return(
                <p key={pokemon.name}>{pokemon.name}</p>
            )
        })} </p>
        
        </>
    )
}

export default Lista