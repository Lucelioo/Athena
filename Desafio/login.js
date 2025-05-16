document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;
        
        // Aqui você adicionaria a lógica de autenticação
        console.log('Tentativa de login com:', email);
        
        // Simulação de um login bem-sucedido
        alert('Login efetuado com sucesso!');
    });
});