import {useState} from "react";
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [titulo, setTitulo] = useState("Um contador muito legal!");

  const adicionaUm =() => {
    setCount((count) => count +1);
  };

  const subtraiUm =() => {
    setCount((count) => count -1);
  };

  // >> opção 1 de fazer a tradução: << 
  // const traduzirTitulo =() => 
  // setTitulo("A very cool counter!" )


  // >> opção 2 de fazer a tradução (com if else): <<
// const traduzirTitulo =() =>  
// {
//   if (titulo === "Um contador muito legal!") {
//     setTitulo("A very cool counter!");
//   } else {
//     setTitulo("Um contador muito legal!")
//   }
// }

// >> opção 3 de fazer a tradução: <<
const traduzirTitulo =() =>{
const pt = "Um contador muito legal!";
const en ="A very cool counter!";
titulo === en ? setTitulo(pt) : setTitulo(en);
}

  return (
    <div className="App">

      <h1> {titulo} </h1>
      <button onClick={traduzirTitulo}> Traduzir! </button>

<br />
<br />

      <button onClick={subtraiUm}>Subtrai 1</button>
      <h1> {count} </h1>
      <button onClick={adicionaUm}>Adiciona 1</button>
       
    </div>
  )
}

export default App
