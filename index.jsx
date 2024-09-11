document.addEventListener('DOMContentLoaded', function () {
  // Inicializar o modal do Bootstrap
  const modalPerfil = new bootstrap.Modal(document.getElementById('modalPerfil'));
  
  // Selecionar elementos
  const iconePerfil = document.getElementById('iconePerfil');
  const formularioLogin = document.getElementById('formLogin');
  const formularioCadastro = document.getElementById('formCadastro');
  const botaoCadastro = document.getElementById('botaoCadastro');
  const botaoLogin = document.getElementById('botaoLogin');
  const botaoFechar = document.querySelector('.btn-close'); // Botão de fechar o modal

  // Mostrar o modal quando o ícone de perfil é clicado
  iconePerfil.addEventListener('click', function () {
    modalPerfil.show();
  });

  // Alternar para o formulário de cadastro
  botaoCadastro.addEventListener('click', function () {
    formularioLogin.classList.add('d-none');
    formularioCadastro.classList.remove('d-none');
  });

  // Alternar para o formulário de login
  botaoLogin.addEventListener('click', function () {
    formularioCadastro.classList.add('d-none');
    formularioLogin.classList.remove('d-none');
  });

  // Resetar o estado do modal ao fechá-lo
  botaoFechar.addEventListener('click', function () {
    formularioCadastro.classList.add('d-none');
    formularioLogin.classList.remove('d-none');
    modalPerfil.hide();
  });

  // Também resetar o estado ao fechar o modal clicando fora dele
  document.getElementById('modalPerfil').addEventListener('hidden.bs.modal', function () {
    formularioCadastro.classList.add('d-none');
    formularioLogin.classList.remove('d-none');
  });
});

