class FlowersAnimation {
    constructor(container) {
        this.container = container;
        this.flowerCount = 60; // Aumentado de 30 a 60 flores
        this.colors = [
            '#ff6b6b', '#48dbfb', '#1dd1a1', '#feca57', '#ff9ff3', '#00d2d3',
            '#ff9a9e', '#a18cd1', '#fad0c4', '#ffecd2', '#ff867a', '#ffc3a0',
            '#96e6a1', '#d4fc79', '#e2b0ff', '#ffcef3', '#84fab0', '#fee140'
        ]; // Más variedad de colores
    }

    createFlowers() {
        for (let i = 0; i < this.flowerCount; i++) {
            // Crear el contenedor principal de la flor
            const flower = document.createElement('div');
            flower.classList.add('flower');

            // Elegir un color aleatorio para la flor
            const randomColor = this.colors[Math.floor(Math.random() * this.colors.length)];

            // Decidir aleatoriamente qué tipo de flor crear (3 tipos)
            const flowerType = Math.floor(Math.random() * 3);

            if (flowerType === 0) {
                // TIPO 1: Flor clásica con pétalos redondos
                // Crear el centro de la flor
                const flowerCenter = document.createElement('div');
                flowerCenter.classList.add('flower-center');

                // Variaciones en el color del centro
                const centerColors = ['#FFCD00', '#FFA500', '#FF8C00'];
                flowerCenter.style.backgroundColor = centerColors[Math.floor(Math.random() * centerColors.length)];

                // Añadir pétalos (entre 5 y 10)
                const petalCount = 5 + Math.floor(Math.random() * 6);

                for (let j = 0; j < petalCount; j++) {
                    const petal = document.createElement('div');
                    petal.classList.add('petal');

                    // Color con gradiente para más realismo
                    const lighterColor = this.getLighterColor(randomColor);
                    petal.style.background = `radial-gradient(ellipse at center, ${lighterColor} 0%, ${randomColor} 70%)`;

                    // Variar la forma de los pétalos
                    petal.style.borderRadius = `${60 + Math.random() * 40}% ${60 + Math.random() * 40}% ${60 + Math.random() * 40}% ${60 + Math.random() * 40}%`;

                    // Distribuir pétalos en círculo
                    const angle = (j / petalCount) * Math.PI * 2;
                    petal.style.transform = `rotate(${angle}rad)`;

                    flower.appendChild(petal);
                }

                // Añadir el centro después de los pétalos
                flower.appendChild(flowerCenter);

            } else if (flowerType === 1) {
                // TIPO 2: Flor tipo margarita con pétalos alargados
                // Centro grande
                const flowerCenter = document.createElement('div');
                flowerCenter.classList.add('flower-center-daisy');
                flowerCenter.style.backgroundColor = '#663300';

                // Pétalos alargados y finos (12-16 pétalos)
                const petalCount = 12 + Math.floor(Math.random() * 5);

                for (let j = 0; j < petalCount; j++) {
                    const petal = document.createElement('div');
                    petal.classList.add('petal-daisy');
                    petal.style.backgroundColor = randomColor;

                    // Distribuir pétalos en círculo
                    const angle = (j / petalCount) * Math.PI * 2;
                    petal.style.transform = `rotate(${angle}rad)`;

                    flower.appendChild(petal);
                }

                flower.appendChild(flowerCenter);

            } else {
                // TIPO 3: Flor tipo tulipán con pétalos solapados
                // Centro pequeño
                const flowerCenter = document.createElement('div');
                flowerCenter.classList.add('flower-center-tulip');
                flowerCenter.style.backgroundColor = '#663300';

                // Pétalos agrupados (4-6 pétalos)
                const petalCount = 4 + Math.floor(Math.random() * 3);

                for (let j = 0; j < petalCount; j++) {
                    const petal = document.createElement('div');
                    petal.classList.add('petal-tulip');

                    // Color con gradiente
                    const darkerColor = this.getDarkerColor(randomColor);
                    petal.style.background = `linear-gradient(to bottom, ${randomColor} 0%, ${darkerColor} 100%)`;

                    // Distribuir pétalos en semicírculo frontal
                    const angle = (j / petalCount) * Math.PI - Math.PI / 2;
                    petal.style.transform = `rotate(${angle}rad)`;

                    flower.appendChild(petal);
                }

                flower.appendChild(flowerCenter);
            }

            // Posición inicial (centro de la pantalla)
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            flower.style.left = `${centerX}px`;
            flower.style.top = `${centerY}px`;

            // Tamaño aleatorio para cada flor (un poco más grande)
            const size = 30 + Math.random() * 40;
            flower.style.width = `${size}px`;
            flower.style.height = `${size}px`;

            // Dirección y rotación aleatorias para la animación
            const angle = Math.random() * Math.PI * 2;
            const distance = 100 + Math.random() * 400; // Más distancia para mayor dispersión
            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance - 200;
            const rotation = Math.random() * 720 - 360;

            // Guardar estas variables como propiedades CSS personalizadas
            flower.style.setProperty('--x', `${x}px`);
            flower.style.setProperty('--y', `${y}px`);
            flower.style.setProperty('--r', `${rotation}deg`);

            this.container.appendChild(flower);
        }
    }

    // Función auxiliar para obtener un color más claro
    getLighterColor(hex) {
        // Convertir color hex a RGB
        let r = parseInt(hex.substring(1, 3), 16);
        let g = parseInt(hex.substring(3, 5), 16);
        let b = parseInt(hex.substring(5, 7), 16);

        // Aclarar el color
        r = Math.min(255, Math.floor(r * 1.3));
        g = Math.min(255, Math.floor(g * 1.3));
        b = Math.min(255, Math.floor(b * 1.3));

        // Convertir de nuevo a hex
        return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
    }

    // Función auxiliar para obtener un color más oscuro
    getDarkerColor(hex) {
        // Convertir color hex a RGB
        let r = parseInt(hex.substring(1, 3), 16);
        let g = parseInt(hex.substring(3, 5), 16);
        let b = parseInt(hex.substring(5, 7), 16);

        // Oscurecer el color
        r = Math.floor(r * 0.7);
        g = Math.floor(g * 0.7);
        b = Math.floor(b * 0.7);

        // Convertir de nuevo a hex
        return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
    }

    animate() {
        const flowers = this.container.querySelectorAll('.flower');

        flowers.forEach((flower, index) => {
            // Retrasar la animación ligeramente para cada flor
            setTimeout(() => {
                flower.classList.add('animate');

                // Añadir rotación específica durante el vuelo para más realismo
                flower.classList.add('rotate-while-flying');

                // Eliminar la flor después de que termine la animación
                setTimeout(() => {
                    flower.remove();
                }, 3000);
            }, index * 30); // Menor retraso para que aparezcan más rápido
        });
    }

    explode() {
        this.createFlowers();
        this.animate();
    }
}