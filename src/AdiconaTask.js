import { useState, useEffect } from 'react';
import { useTasks } from "./context/myContext";
import { createTasks, buscaTask } from './utils';

function AdicionaTask() {
const [adding, setadding] = useState({ descricao: '', status: '', prioridade: '' });
const { tasks, setTasks } = useTasks();
async function add(e) {
  e.preventDefault();
  await createTasks(adding);
  await buscaTask().then((task) => setTasks(task));
}

useEffect(() => { setTasks(tasks) }, [tasks, setTasks])

  return (
    <div className="add-task top-header" >
        <h1 className="add-title" >Adicionar nova tarefa:</h1>
      <form onSubmit={(e) => add(e)} >
          <input className="input-text" maxLength="15" type="text" placeholder="Descrição"
          onChange={(e) => setadding({...adding, descricao: e.target.value })}/>
          <input className="input-text" maxLength="15" type="text" placeholder="Status"
          onChange={(e) => setadding({...adding, status: e.target.value })}/>
          <input className="input-text"maxLength="15" type="text" placeholder="Prioridade"
          onChange={(e) => setadding({...adding, prioridade: e.target.value })}/>
          <button className="add-button">Adicionar</button>
      </form>

    </div>
  );
}

export default AdicionaTask;
