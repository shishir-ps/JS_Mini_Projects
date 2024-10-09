// JavaScript to dynamically create grid items
document.addEventListener("DOMContentLoaded", () => {
    const gridContainer = document.querySelector('.grid-container');
    const numOfBlocks = 20; // Number of blocks

    const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'teal', 'tomato'];
    const sizes = ['small', 'medium', 'large', 'ultra', 'big'];
    const projectsLink= ['to_do_list','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#',]
    const projectsName= ['TO-DO List','Project_2','Project_3','Project_4','Project_5','Project_6','Project_7','Project_8','Project_9','Project_10']
    // Create and append blocks
    for (let i = 1; i <= numOfBlocks; i++) {
        const block = document.createElement('div');
        block.classList.add('grid-item');

        // Assign random size and color
        const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];

        block.classList.add(randomSize);
        block.setAttribute('data-color', randomColor);

        // Give a title for demo purposes
        block.setAttribute('data-title', `${projectsName[i-1]}`);

        // Set click event to simulate opening another page
        block.addEventListener('click', () => {
            window.location.href = `${projectsLink[i-1]}.html`; // Simulate navigation
        });

        gridContainer.appendChild(block);
    }
});
