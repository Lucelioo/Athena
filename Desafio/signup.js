
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('signupForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const nome = document.getElementById('nome').value;
        const senha = document.getElementById('senha').value;
        const confirmarSenha = document.getElementById('confirmarSenha').value;
        
        // Validação básica
        if (senha !== confirmarSenha) {
            alert('As senhas não coincidem!');
            return;
        }
        
        // Aqui você adicionaria a lógica de registro/cadastro
        console.log('Tentativa de cadastro:', {
            email,
            nome,
            senha
        });
        
        // Simulação de cadastro bem-sucedido
        alert('Cadastro realizado com sucesso!');
        
        // Redirecionar para a página de login após o cadastro
        window.location.href = 'login.html';
    });
});