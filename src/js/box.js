class GiftBox {
    constructor(element) {
        this.boxElement = element;
        this.isOpen = false;
        this.setupEventListeners();
    }

    setupEventListeners() {
        this.boxElement.addEventListener('click', () => {
            if (!this.isOpen) {
                this.open();
            }
        });
    }

    open() {
        if (this.isOpen) return;

        this.isOpen = true;
        this.boxElement.classList.add('open');

        // Reproducir sonido
        const sound = document.getElementById('explosionSound');
        sound.play();

        // Desencadenar la explosión de flores después de un breve retraso
        setTimeout(() => {
            // Disparar un evento personalizado para que otros componentes respondan
            const event = new CustomEvent('boxOpened');
            document.dispatchEvent(event);

            // Hacer que la caja desaparezca
            this.boxElement.classList.add('fade-out');
        }, 800);
    }
}