//código feito durante aula 35 com Simara

function Formulario() {
    function ligaClick() {

    }

// esse trecho não consegui assimilar
    function pegaInput(event) {
        console.log(event)
      }

    return(
        <div>
            <input onChange={pegaInput} placeholder="Digite seu nome" />
            <button onClick={ligaClick}> Clique aqui para enviar! </button>
            
        </div>
    )
}

export default Formulario
