document.getElementById('formAgendamento').onsubmit = e => {
  e.preventDefault();
  const dataHora = dataHora.value, tipo = tipo.value;
  const cliente = clientes[selectCli.value];
  const advogado = advogados[selectAdv.value];
  agendamentos.push({ dataHora, tipo, cliente, advogado, status: 'Aguardando' });
  atualizarFila();
  e.target.reset();
};

function atualizarFila() {
  const tbody = document.querySelector('#fila tbody');
  tbody.innerHTML = '';
  agendamentos.forEach(ag => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${ag.dataHora}</td><td>${ag.cliente.nome}</td><td>${ag.advogado.nome}</td><td>${ag.status}</td>`;
    tbody.appendChild(tr);
  });
}