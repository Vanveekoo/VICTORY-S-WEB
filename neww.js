
        // Get the container element
        const container = document.getElementById('container');

        // Create 16x16 grid of squares (16 * 16 = 256 squares)
        for (let i = 0; i < 256; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            container.appendChild(square);
        }