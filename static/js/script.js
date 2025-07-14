const form = document.getElementById('registrationForm');
const messageDisplay = document.getElementById('mensagemErro');

//      Função de Validação de E-mail sem regex 
function isValidEmail(email) {
    // 1. Verificar se é uma string válida e não vazia
    if (typeof email !== 'string' || email.trim() === '') {
        return false;
    }

    // 2. Verificar a presença e posição do '@' e '.'
    const atIndex = email.indexOf('@');
    const dotIndex = email.indexOf('.');

    // Deve ter um '@' e um '.'
    if (atIndex === -1 || dotIndex === -1) {
        return false;
    }

    // O '@' não pode ser o primeiro ou o último caractere
    if (atIndex === 0 || atIndex === email.length - 1) {
        return false;
    }

    // O '.' não pode ser o primeiro ou o último caractere
    if (dotIndex === 0 || dotIndex === email.length - 1) {
        return false;
    }

    // O '.' deve vir depois do '@'
    if (dotIndex < atIndex) {
        return false;
    }

    // Deve haver pelo menos um caractere entre '@' e '.' (ex: "a@.com" é inválido)
    if (dotIndex - atIndex < 2) {
        return false;
    }

    // A parte do domínio após o último ponto deve ter pelo menos 2 caracteres (ex: "a@b.c" é válido, mas "a@b.d" para domínios de 1 caractere não seria)
    const lastDotIndex = email.lastIndexOf('.');
    const domainExtension = email.substring(lastDotIndex + 1);
    if (domainExtension.length < 2) {
        return false;
    }

    // Não deve conter espaços em branco
    if (email.includes(' ')) {
        return false;
    }

    // Não deve ter múltiplos '@'
    if (email.split('@').length > 2) {
        return false;
    }

// rever: o conteúdo pode ser 1234@1212.122 sem considerar o resto da sintaxe de um email.

    return true;
}

//    Listener para o Submit do Formulário 
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    let isValid = true;
    messageDisplay.textContent = ''; // Limpa a mensagem anterior

    // Validação do Nome de Usuário
    if (username === '') {
        messageDisplay.textContent = 'O campo Nome é obrigatório.';
        isValid = false;
    }
    // Validação do Email
    else if (email === '') {
        messageDisplay.textContent = 'O campo Email é obrigatório.';
        isValid = false;
    } else if (!isValidEmail(email)) { // USA A NOVA FUNÇÃO AQUI
        messageDisplay.textContent = 'Email inválido.'; // Mensagem específica para email inválido
        isValid = false;
    }
    // Validação da Senha
    else if (password === '') {
        messageDisplay.textContent = 'O campo Senha é obrigatório.';
        isValid = false;
    }

    if (isValid) {
        // Se todas as validações passarem, o formulário é enviado
        form.submit();
    }
});