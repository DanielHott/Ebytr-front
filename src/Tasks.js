import { useEffect, useState } from 'react';
import { useTasks } from "./context/myContext";
import { buscaTask, deleteTask } from './utils';

function Tasks() {
const { tasks, setTasks} = useTasks();
const [loading, setLoading] = useState(true);

async function getTasks() {
    buscaTask().then((task) => setTasks(task));
    setLoading(false);
}

async function removeTask(id) {
   const taskId = { id: Number(id) };
   await deleteTask(taskId);
   await buscaTask().then((task) => setTasks(task));
}

useEffect(() => { setTasks(tasks) }, [tasks, setTasks] )

useEffect(() => {
        getTasks();
      }, []);

  return (
    <div className="App">
        <h1> Agenda de tarefas  🕗 </h1>
        <div className="header">
            <h2>Numero</h2>
            <h2>Descrição:</h2>
            <h2>Status:</h2>
            <h2>Data:</h2>
            <h2>Prioridade:</h2>
        </div>
        <hr />
        {!loading ? tasks.map((task) => { 
            const data = task.data.substring(8, 10) + task.data.substring(4, 8) + task.data.substring(0, 4);
            return (
                <div key={ task.id }>
                <div className="tasks">
                    <p>{task.id} </p>
                    <p>{task.descricao}</p>
                    <p className="status">{task.status}</p>
                    <p className="data">{data}</p>
                    <p>{task.prioridade}</p>
                    <button className="apagar" onClick={() => removeTask(task.id) } >❌</button>
                </div>
                <hr />
                </div>
            )
        }) : <p>Carregando</p>}
    </div>
  );
}

export default Tasks;