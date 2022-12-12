import './App.css'
import Info from './components/Info'
import Texto from './components/texto'

function App() {

  return (
    <div>
    <h1>Componentes do Instagran</h1>
    <Info quantidade="123" tipo="publicações"/>
    <Info quantidade="10.412" tipo="seguidores"/>
    <Info quantidade="49" tipo="seguindo"/>
    <Texto> atributo 1</Texto>
    <Texto> Atributo 2</Texto>
    </div>
  )
}

export default App
