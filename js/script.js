document.addEventListener('DOMContentLoaded', function() {
  // Configurações - SUBSTITUA COM SEUS DADOS REAIS
  const EMAIL_DESTINO = 'emyeangel@gmail.com'; // Seu email real
  const NUMERO_WHATSAPP = '5585991653785'; // Apenas números, sem '+' ou espaços
  // Elementos do formulário
  const form = document.getElementById('formComentario');
  const btnEmail = document.getElementById('btnEmail');
  const btnWhatsApp = document.getElementById('btnWhatsApp');
  const nomeInput = document.getElementById('nome');
  const comentarioInput = document.getElementById('comentario');
  // Função para validar formulário
  function validarFormulario() {
    let valido = true;
    // Resetar estilos de erro
    nomeInput.style.border = 'none';
    comentarioInput.style.border = 'none';
    // Validar nome
    if (!nomeInput.value.trim()) {
      nomeInput.style.border = '2px solid #ff6b6b';
      valido = false;
    }
    // Validar comentário
    if (!comentarioInput.value.trim()) {
      comentarioInput.style.border = '2px solid #ff6b6b';
      valido = false;
    }
    // Mostrar alerta se inválido
    if (!valido) {
      alert('Por favor, preencha todos os campos obrigatórios!');
      return false;
    }
    return true;
  }
  function validarFormulario() {
  let valido = true;
  // Resetar estilos de erro
  nomeInput.style.border = 'none';
  comentarioInput.style.border = 'none';
  // Validar nome (apenas letras, acentos e espaços)
  const regexNome = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/; 
  if (!nomeInput.value.trim()) {
    nomeInput.style.border = '2px solid #ff6b6b';
    valido = false;
    alert('Por favor, preencha o campo de nome!');
  } else if (!regexNome.test(nomeInput.value)) {
    nomeInput.style.border = '2px solid #ff6b6b';
    valido = false;
    alert('O nome deve conter apenas letras e espaços!');
  }
  // Validar comentário
  if (!comentarioInput.value.trim()) {
    comentarioInput.style.border = '2px solid #ff6b6b';
    valido = false;
    if (valido) { // Só mostra este alerta se o nome estiver ok
      alert('Por favor, preencha o campo de comentário!');
    }
  } 
  return valido;
}
  // Enviar por Email
  btnEmail.addEventListener('click', function(e) {
    e.preventDefault(); // Impede o comportamento padrão do botão
    if (validarFormulario()) {
      const nome = nomeInput.value.trim();
      const comentario = comentarioInput.value.trim();
      const assunto = "Comentário sobre Café com Sociologia";
      const corpo = `Nome: ${nome}\n\nComentário:\n${comentario}`; 
      // Abre o cliente de email padrão
      window.location.href = `mailto:${EMAIL_DESTINO}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;
    }
  });
  // Enviar por WhatsApp
  btnWhatsApp.addEventListener('click', function(e) {
    e.preventDefault(); // Impede o comportamento padrão do botão
    if (validarFormulario()) {
      const nome = nomeInput.value.trim();
      const comentario = comentarioInput.value.trim();
      const mensagem = `*Comentário sobre Café com Sociologia*%0A%0A*Nome:* ${nome}%0A*Comentário:*%0A${comentario}`;
      // Abre o WhatsApp com a mensagem pré-preenchida
      window.open(`https://wa.me/${NUMERO_WHATSAPP}?text=${mensagem}`, '_blank');
    }
  });
  // Limpar estilos de erro ao digitar
  nomeInput.addEventListener('input', function() {
    if (this.value.trim()) {
      this.style.border = 'none';
    }
  });
  comentarioInput.addEventListener('input', function() {
    if (this.value.trim()) {
      this.style.border = 'none';
    }
  });
});