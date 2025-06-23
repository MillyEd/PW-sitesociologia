document.addEventListener('DOMContentLoaded', function() {
    const btnEmail = document.getElementById('btnEmail');
    const btnWhatsApp = document.getElementById('btnWhatsApp');

    // Enviar por Email
    btnEmail.addEventListener('click', function() {
        if (validarFormulario()) {
            const nome = document.getElementById('nome').value;
            const comentario = document.getElementById('comentario').value;
            
            const assunto = "Comentário sobre o Café com Sociologia";
            const corpoEmail = `Nome: ${nome}%0A%0AComentário:%0A${comentario}`;
            
            window.location.href = `mailto:seuemail@exemplo.com?subject=${assunto}&body=${corpoEmail}`;
        }
    });

    // Enviar por WhatsApp
    btnWhatsApp.addEventListener('click', function() {
        if (validarFormulario()) {
            const nome = document.getElementById('nome').value;
            const comentario = document.getElementById('comentario').value;
            
            const mensagem = `*Comentário sobre o Café com Sociologia*%0A%0A*De:* ${nome}%0A%0A*Mensagem:*%0A${comentario}`;
            
            window.open(`https://wa.me/SEUNUMERO?text=${encodeURIComponent(mensagem)}`, '_blank');
        }
    });

    function validarFormulario() {
        const nome = document.getElementById('nome');
        const comentario = document.getElementById('comentario');
        let valido = true;

        if (!nome.value.trim()) {
            nome.style.borderColor = '#ff6b6b';
            valido = false;
        } else {
            nome.style.borderColor = '#9D8A7C';
        }

        if (!comentario.value.trim()) {
            comentario.style.borderColor = '#ff6b6b';
            valido = false;
        } else {
            comentario.style.borderColor = '#9D8A7C';
        }

        if (!valido) {
            alert('Por favor, preencha todos os campos obrigatórios!');
        }

        return valido;
    }
});