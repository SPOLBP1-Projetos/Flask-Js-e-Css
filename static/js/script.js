const Form = document.getElementById('registrationForm');
// Seleciona o elemento onde a mensagem de erro será exibida
const messageDisplay = document.getElementById('mensagemErro');

// Adiciona um "ouvinte" de evento para o submit do formulário
myForm.addEventListener('submit', function(event) {
    // Previne o comportamento padrão de envio do formulário (que recarregaria a página)
    event.preventDefault();

    // Pega os valores dos campos
    const nome = document.getElementById('nome').value.trim(); // .trim() remove espaços em branco extras
    const email = document.getElementById('email').value.trim();
    const idade = document.getElementById('idade').value.trim();

    // Variável para controlar se o formulário é válido
    let isValid = true;
    // Limpa a mensagem de erro anterior
    messageDisplay.textContent = '';

    // Verifica se os campos estão vazios
    if (nome === '') {
        messageDisplay.textContent = 'O campo Nome é obrigatório.';
        isValid = false;
    } else if (email === '') {
        messageDisplay.textContent = 'O campo Email é obrigatório.';
        isValid = false;
    } else if (idade === '') {
        messageDisplay.textContent = 'O campo Idade é obrigatório.';
        isValid = false;
    }


    if (isValid) {

        myForm.submit(); 

    }
});