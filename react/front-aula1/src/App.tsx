import { useState } from "react"

function App() {
  console.log('imposto é roubo')
  const [idade,setIdade] = useState("0");
  const [nome,setNome] = useState("jonas");
  const [lista,setLista] = useState([] as Props[]);

  const save = () => {
    console.log('salvando')
    setLista([...lista,{nome, idade}])
  };
  return (
    <>
    <div>
      <label>Nome:</label>
      <input value={nome} onChange={(e)=>setNome(e.target.value)} />
    </div>
    <div>
      <label>Idade:</label>
      <input value={idade} onChange={(e)=>setIdade(e.target.value)} />
    </div>
    <button onClick={save}> Salvar </button>
    <Exibir lista = {lista}/>
  </>
  )
}


function Exibir(prop:{lista:Props[]}) {
  return (
    <ol>
      {
        prop.lista.map( item => <li>{item.nome} {item.idade} </li>)
      }
    </ol>
  )
}


interface Props {
  nome:string;
  idade:string;
}

export default App;
