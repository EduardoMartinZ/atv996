document.getElementById('formAdvogado').onsubmit = e => {
  e.preventDefault();
  const nome = nomeAdv.value, email = emailAdv.value, tel = telAdv.value, esp = espAdv.value;
  advogados.push({ nome, email, tel, esp });
  atualizarSelectAdvogados();
  e.target.reset();
};

function atualizarSelectAdvogados() {
  const select = document.getElementById('selectAdv');
  select.innerHTML = '';
  advogados.forEach((a, i) => {
    const opt = document.createElement('option');
    opt.value = i; opt.text = a.nome;
    select.appendChild(opt);
  });
}