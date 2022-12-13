//código feito durante aula 35 com Simara

import filmes from "../service/dados"

function Lista() {
    return(
        <div>
            {filmes.map(objeto =>{
                return (
                    <div key={objeto.id}>
                       <h2>{objeto.nome}</h2> 
                       <p>{objeto.genero}</p>
                       <img src={objeto.capa} width="300"/>
                    </div>
                )
            })}
        </div>
    )
}

export default Lista