class NameAnimation {
    constructor(element) {
        this.nameContainer = element;
        this.nameElement = element.querySelector('.name');
    }

    show() {
        // Hacer visible el contenedor del nombre
        this.nameContainer.classList.add('visible');

        // Agregar efecto de latido después de mostrar el nombre
        setTimeout(() => {
            this.nameElement.classList.add('heartbeat');
        }, 1500);
    }
}