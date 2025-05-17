document.addEventListener('DOMContentLoaded', function() {
    // Menu item click handler
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            menuItems.forEach(menuItem => menuItem.classList.remove('active'));
            this.classList.add('active');
        });
    });

    const createBtn = document.querySelector('.btn-criar');
    if (createBtn) {
        createBtn.addEventListener('click', function() {
            alert('Criar novo agendamento');
        });
    }

    const editBtns = document.querySelectorAll('.btn-edit');
    editBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const card = this.closest('.appointment-card');
            const cardId = card.querySelector('.card-id span:last-child').textContent;
            alert(`Editar agendamento ${cardId}`);
        });
    });

    const deleteBtns = document.querySelectorAll('.btn-delete');
    deleteBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const card = this.closest('.appointment-card');
            const cardId = card.querySelector('.card-id span:last-child').textContent;
            
            if (confirm(`Tem certeza que deseja excluir o agendamento ${cardId}?`)) {
                card.remove();
                console.log(`Agendamento ${cardId} excluído`);
            }
        });
    });

    const cards = document.querySelectorAll('.appointment-card');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const cardId = this.querySelector('.card-id span:last-child').textContent;
            alert(`Ver detalhes do agendamento ${cardId}`);
        });
    });

    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const cards = document.querySelectorAll('.appointment-card');
            
            cards.forEach(card => {
                const professor = card.querySelector('.professor-info .value').textContent.toLowerCase();
                const subject = card.querySelector('.subject').textContent.toLowerCase();
                const description = card.querySelector('.description').textContent.toLowerCase();
                
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