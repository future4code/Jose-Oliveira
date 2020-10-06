let salvarTarefa = undefined;
function f1() {
  if (document.getElementById("tarefa").value != "") {
    salvarTarefa = document.getElementById("tarefa").value;
    let dia = document.getElementById("dias-semana").value;
    document.getElementById(
      `${dia}`
    ).innerHTML += `<p id=${salvarTarefa}  onclick =f2()> ${salvarTarefa}</p>`;
    document.getElementById("tarefa").value = "";
  } else {
    window.alert("Adicione uma tarefa valida");
  }
}

function f2() {
  document.getElementById(`${salvarTarefa}`).innerHTML = '<strike>' + document.getElementById(`${salvarTarefa}`).innerHTML + '</strike>'
}
