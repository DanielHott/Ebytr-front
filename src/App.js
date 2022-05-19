import { useState } from 'react';
import MyContextProvider from './context/myContext';
import './App.css';
import AlteraTask from './AlteraTask';
import AdicionaTask from './AdiconaTask';
import Tasks from './Tasks';

function App() {
const [tipo, setTipo] = useState(true);
function changeMode() {
  if(tipo === true) {
    setTipo(false);
    document.getElementById('edit').innerHTML = 'Adicionar tarefa'
  }
  if(tipo === false)  {
    setTipo(true);
    document.getElementById('edit').innerHTML = 'Editar tarefa'
  }
}

  return (
    <MyContextProvider>
    <div>
    <button id="edit" onClick={ () => changeMode() }> Editar tarefa </button>
    {!tipo ? <AlteraTask /> :
      <AdicionaTask />
    }
      <Tasks />
    </div>
    </MyContextProvider>
  );
}

export default App;
