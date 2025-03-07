document.addEventListener('DOMContentLoaded', () => {
    // Verificar que los scripts se han cargado correctamente
    if (typeof GiftBox === 'undefined' || typeof NameAnimation === 'undefined' || typeof FlowersAnimation === 'undefined') {
        console.error('Error: Las clases necesarias no están disponibles. Verifica el orden de carga de los scripts.');
        return;
    }

    // Inicializar componentes
    const boxElement = document.getElementById('giftBox');
    const nameContainer = document.querySelector('.name-container');
    const flowersContainer = document.getElementById('flowersContainer');

    if (!boxElement || !nameContainer || !flowersContainer) {
        console.error('Error: No se encontraron los elementos necesarios en el DOM');
        return;
    }

    const giftBox = new GiftBox(boxElement);
    const nameAnimation = new NameAnimation(nameContainer);
    const flowersAnimation = new FlowersAnimation(flowersContainer);

    // Escuchar el evento cuando se abre la caja
    document.addEventListener('boxOpened', () => {
        console.log('Evento boxOpened recibido');

        // Crear y animar las flores
        flowersAnimation.explode();
        console.log('Flores desplegadas');

        // Mostrar el nombre después de un pequeño retraso
        setTimeout(() => {
            nameAnimation.show();
        }, 500);
    });
});