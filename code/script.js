// Função para mostrar o resultado na página
function mostrarResultado(resultado) {
  document.getElementById('resultado').innerHTML = resultado;
}

// Contador de 1 a 10 usando while
function contador1a10() {
  let i = 1;
  let resultado = '<h2>Contador de 1 a 10</h2>';
  while (i <= 10) {
    resultado += i + '<br>';
    i++;
  }
  mostrarResultado(resultado);
}

// Contador de 10 a 0 usando while
function contador10a0() {
  let i = 10;
  let resultado = '<h2>Contador de 10 a 0</h2>';
  while (i >= 0) {
    resultado += i + '<br>';
    i--;
  }
  mostrarResultado(resultado);
}

// Contagem regressiva com número fornecido pelo usuário
function contagemRegressiva() {
  let numero = parseInt(prompt('Digite um número para a contagem regressiva:'));
  if (isNaN(numero)) {
    alert('Por favor, insira um número válido.');
    return;
  }

  let resultado = `<h2>Contagem Regressiva a partir de ${numero}</h2>`;
  console.clear();
  console.log('Contagem Regressiva');
  while (numero >= 0) {
    resultado += numero + '<br>';
    console.log(numero);
    numero--;
  }
  mostrarResultado(resultado);
}

// Contagem progressiva com número fornecido pelo usuário
function contagemProgressiva() {
  let numero = parseInt(prompt('Digite um número para a contagem progressiva:'));
  if (isNaN(numero)) {
    alert('Por favor, insira um número válido.');
    return;
  }

  let resultado = `<h2>Contagem Progressiva até ${numero}</h2>`;
  console.clear();
  console.log('Contagem Progressiva');
  let i = 0;
  while (i <= numero) {
    resultado += i + '<br>';
    console.log(i);
    i++;
  }
  mostrarResultado(resultado);
}
