document.getElementById('formCliente').onsubmit = e => {
  e.preventDefault();
  const nome = nomeCli.value, email = emailCli.value, tel = telCli.value;
  clientes.push({ nome, email, tel });
  atualizarSelectClientes();
  e.target.reset();
};

function atualizarSelectClientes() {
  const select = document.getElementById('selectCli');
  select.innerHTML = '';
  clientes.forEach((c, i) => {
    const opt = document.createElement('option');
    opt.value = i; opt.text = c.nome;
    select.appendChild(opt);
  });
}