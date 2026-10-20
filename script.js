// GUIA: menu do celular. O botão "Menu" abre e fecha a lista de links.
const menuBotao = document.querySelector('.menu-botao');
const menu = document.getElementById('menu');

menuBotao.addEventListener('click', () => {
  const aberto = menu.classList.toggle('aberto');
  menuBotao.setAttribute('aria-expanded', aberto);
});

// GUIA: equipes. Para trocar nomes, cargos ou quantidade de pessoas, edite só esta lista.
const equipes = {
  liderancas: [
    { nome: 'Nome da pessoa', cargo: 'Direção', foto:'imagens/foto_equipe.jpg' },
    { nome: 'Nome da pessoa', cargo: 'Planejamento', foto:'imagens/foto_equipe.jpg' },
    { nome: 'Nome da pessoa', cargo: 'Atendimento', foto:'imagens/foto_equipe.jpg' },
    { nome: 'Nome da pessoa', cargo: 'Operações', foto:'imagens/foto_equipe.jpg' }
  ],
  buffets: [
    { nome: 'Nome da pessoa', cargo: 'Chef', foto:'imagens/foto_equipe.jpg' },
    { nome: 'Nome da pessoa', cargo: 'Cozinha', foto:'imagens/foto_equipe.jpg' },
    { nome: 'Nome da pessoa', cargo: 'Salão', foto:'imagens/foto_equipe.jpg' },
    { nome: 'Nome da pessoa', cargo: 'Bar', foto:'imagens/foto_equipe.jpg' }
  ],
  decoracoes: [
    { nome: 'Nome da pessoa', cargo: 'Direção de arte', foto:'imagens/foto_equipe.jpg' },
    { nome: 'Nome da pessoa', cargo: 'Cenografia', foto:'imagens/foto_equipe.jpg' },
    { nome: 'Nome da pessoa', cargo: 'Flores', foto:'imagens/foto_equipe.jpg' },
    { nome: 'Nome da pessoa', cargo: 'Iluminação', foto:'imagens/foto_equipe.jpg' }
  ]
};

const fotosEquipe = document.getElementById('equipe-fotos');
const categorias = document.querySelectorAll('.categoria');

// GUIA: desenha as fotos da equipe escolhida. As fotos ficam só com alt até você colocar o src.
function mostrarEquipe(chave) {
  fotosEquipe.innerHTML = '';
  equipes[chave].forEach((pessoa) => {
    const figura = document.createElement('figure');
    const foto = document.createElement('img');
    foto.alt = 'foto de ' + pessoa.nome + ', ' + pessoa.cargo;

    if (pessoa.foto) {
      foto.src = pessoa.foto;
    }
    const legenda = document.createElement('figcaption');
    legenda.textContent = pessoa.cargo;
    figura.append(foto, legenda);
    fotosEquipe.appendChild(figura);
  });
}

// GUIA: ao clicar num card, marca ele como ativo e troca as fotos de cima.
categorias.forEach((botao) => {
  botao.addEventListener('click', () => {
    categorias.forEach((b) => b.setAttribute('aria-pressed', 'false'));
    botao.setAttribute('aria-pressed', 'true');
    mostrarEquipe(botao.dataset.equipe);
  });
});

// GUIA: ao abrir a página, começa mostrando Lideranças.
mostrarEquipe('liderancas');
