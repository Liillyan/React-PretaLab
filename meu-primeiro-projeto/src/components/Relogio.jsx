//código feito durante aula 34 com Simara

function Relogio() {
    const horarioLocal = new Date().toLocaleTimeString()

    return(
       <h2> {horarioLocal} </h2> 
    )
}

export default Relogio