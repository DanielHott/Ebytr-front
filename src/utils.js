import Axios from "axios";
const urlTask = 'http://localhost:3009/tasks';
const urlUptTask = 'http://localhost:3009/tasks/update';

export const buscaTask = async () => {
    const resultado = Axios.get(urlTask).then((resp) => resp.data);
    return resultado;
  };

export const createTasks = (task) => {
    const resultado = Axios.post(urlTask, task).then((resp) => {
      if (resp.status === 200) {
        alert("Task criada com sucesso!");
        return resp.data;
      }
      if (resp.status === 400) {
        alert("Algo deu errado com a requisição!");
      }
    });
    return resultado;
  };

export const editTasks = (task) => {
    const resultado = Axios.patch(urlUptTask, task).then((resp) => {
      if (resp.status === 200) {
        alert("Task alterada com sucesso!");
        return resp.data;
      }
      if (resp.status === 400) {
        alert("Algo deu errado com a requisição!");
      }
    });
    return resultado;
  };


export const deleteTask = async (id) => {
    const resultado = Axios.delete(urlTask, { data: id }).then((resp) => resp.data);
    return resultado;
  };