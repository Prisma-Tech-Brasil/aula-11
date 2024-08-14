const tarefas = [];

function adicionarTarefa(lista, novaTarefa) {
  if (novaTarefa) {
    lista.push(novaTarefa);
    exibirLista();
  }
}

function exibirLista() {
  const taskListElement = document.getElementById("taskList");
  taskListElement.innerHTML = "";
  for (let indice = 0; indice < tarefas.length; indice++) {
    taskListElement.innerHTML += `<li>${indice + 1}. ${tarefas[indice]}</li>`;
  };
}

document.getElementById("addTaskButton").addEventListener("click", () => {
  const taskInput = document.getElementById("taskInput");
  const novaTarefa = taskInput.value;
  adicionarTarefa(tarefas, novaTarefa);
  taskInput.value = "";
});
