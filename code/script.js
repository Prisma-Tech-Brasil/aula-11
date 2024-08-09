const tarefas = [];
function adicionarTarefa(lista, novaTarefa) {
  if (novaTarefa) {
    lista.push(novaTarefa);
    exibirLista(lista);
  }
}

function exibirLista(lista) {
  const taskListElement = document.getElementById("taskList");
  taskListElement.innerHTML = "";
  lista.forEach((tarefa, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${index + 1}. ${tarefa}`;
    taskListElement.appendChild(listItem);
  });
}

document.getElementById("addTaskButton").addEventListener("click", () => {
  const taskInput = document.getElementById("taskInput");
  const novaTarefa = taskInput.value.trim();
  adicionarTarefa(tarefas, novaTarefa);
  taskInput.value = "";
  taskInput.focus();
});
