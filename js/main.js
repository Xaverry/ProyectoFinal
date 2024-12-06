// Obtén todos los elementos de la lista
const valueItems = document.querySelectorAll('.value-item');
const descriptionPopup = document.getElementById('descriptionPopup');
const descriptionText = document.getElementById('descriptionText');
const closePopup = document.getElementById('closePopup');

// Añadir un evento de clic para cada valor de la lista
valueItems.forEach(item => {
    item.addEventListener('click', function () {
        // Obtener la descripción del atributo 'data-description'
        const description = item.getAttribute('data-description');
        
        // Verifica si la descripción existe
        if (description) {
            descriptionText.textContent = description; // Mostrar la descripción en el popup
            descriptionPopup.classList.add('active'); // Mostrar el popup
        }
    });
});

// Cerrar el popup cuando se haga clic en el botón de cerrar
closePopup.addEventListener('click', function () {
    descriptionPopup.classList.remove('active');
});

