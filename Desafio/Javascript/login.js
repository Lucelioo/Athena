document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;
        
        console.log('Tentativa de login com:', email);
        
        alert('Login efetuado com sucesso!');
        
        window.location.href = 'dashboard-list.html';
    });
});