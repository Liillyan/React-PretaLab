import {informacao} from "../data/profile-data"

const Bio = () => {
    return(
        <>
            <h2>{informacao.nome} </h2>
            <h6>{informacao.apelido}</h6>
            <img src={informacao.foto} width='250' />
            <p>{informacao.descricao}</p>
        </>
    )
}

export default Bio