document.addEventListener('DOMContentLoaded', function() {
    // Menu item click handler
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all menu items
            menuItems.forEach(menuItem => menuItem.classList.remove('active'));
            // Add active class to clicked menu item
            this.classList.add('active');
        });
    });

    // Create appointment button handler
    const createBtn = document.querySelector('.btn-criar');
    if (createBtn) {
        createBtn.addEventListener('click', function() {
            alert('Criar novo agendamento');
            // Em uma implementação real, aqui abriria um modal ou redirecionaria para a página de criação
        });
    }

    // Edit appointment button handler
    const editBtns = document.querySelectorAll('.btn-edit');
    editBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            // Get the card's ID from the parent element
            const card = this.closest('.appointment-card');
            const cardId = card.querySelector('.card-id span:last-child').textContent;
            alert(`Editar agendamento ${cardId}`);
            // Em uma implementação real, aqui abriria um modal ou redirecionaria para a página de edição
        });
    });

    // Delete appointment button handler
    const deleteBtns = document.querySelectorAll('.btn-delete');
    deleteBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            // Get the card's ID from the parent element
            const card = this.closest('.appointment-card');
            const cardId = card.querySelector('.card-id span:last-child').textContent;
            
            if (confirm(`Tem certeza que deseja excluir o agendamento ${cardId}?`)) {
                // Em uma implementação real, aqui enviaria uma requisição para excluir o agendamento
                card.remove();
                console.log(`Agendamento ${cardId} excluído`);
            }
        });
    });

    // Card click handler (view details)
    const cards = document.querySelectorAll('.appointment-card');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const cardId = this.querySelector('.card-id span:last-child').textContent;
            alert(`Ver detalhes do agendamento ${cardId}`);
            // Em uma implementação real, aqui abriria um modal ou redirecionaria para a página de detalhes
        });
    });

    // Search functionality
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const cards = document.querySelectorAll('.appointment-card');
            
            cards.forEach(card => {
                const professor = card.querySelector('.professor-info .value').textContent.toLowerCase();
                const subject = card.querySelector('.subject').textContent.toLowerCase();
                const description = card.querySelector('.description').textContent.toLowerCase();
                
                // Check if any of the card's content matches the search term
                if (professor.includes(searchTerm) || 
                    subject.includes(searchTerm) || 
                    description.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
});