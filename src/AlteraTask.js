import { useState, useEffect } from 'react';
import { useTasks } from "./context/myContext";
import { editTasks, buscaTask } from './utils';

function AlteraTask() {
const [edit, setedit] = useState({ id: 0, descricao: '', status: '', prioridade: '' });
const { tasks, setTasks } = useTasks();
async function change(e) {
    e.preventDefault()
    await editTasks(edit)
    await buscaTask().then((task) => setTasks(task));
}

useEffect(() => { setTasks(tasks) }, [tasks, setTasks])

  return (
    <div className="add-task top-header" >
        <h1 className="add-title" >Editar tarefa:</h1>
      <form onSubmit={(e) => change(e) } >
         <input className="input-text" maxLength="15" type="number" placeholder="Número"
          onChange={(e) => setedit({...edit, id: Number(e.target.value) })}/>
          <input className="input-text" maxLength="15" type="text" placeholder="Descrição"
          onChange={(e) => setedit({...edit, descricao: e.target.value })}/>
          <input className="input-text" maxLength="15" type="text" placeholder="Status"
          onChange={(e) => setedit({...edit, status: e.target.value })}/>
          <input className="input-text"maxLength="15" type="text" placeholder="Prioridade"
          onChange={(e) => setedit({...edit, prioridade: e.target.value })}/>
          <button type="submit" className="add-button">Editar</button>
      </form>

    </div>
  );
}

export default AlteraTask;