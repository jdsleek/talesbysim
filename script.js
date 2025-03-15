const stories = [
    {
        title: "The Magical Forest",
        cover: "assets/images/forest.jpg",
        pages: [
            { image: "assets/images/forest1.jpg", text: "Once upon a time, in a magical forest..." },
            { image: "assets/images/forest2.jpg", text: "A brave adventurer named [Your Name] appeared..." }
        ]
    },
    {
        title: "Space Explorers",
        cover: "assets/images/space.jpg",
        pages: [
            { image: "assets/images/space1.jpg", text: "Captain [Your Name] steered the spaceship..." },
            { image: "assets/images/space2.jpg", text: "Through the stars and galaxies..." }
        ]
    },
    // Add 18 more stories here...
];

const library = document.querySelector('.library');
const flipbookContainer = document.querySelector('.flipbook-container');
const flipbook = document.getElementById('flipbook');
const backgroundMusic = document.getElementById('background-music');

// Generate story cards
stories.forEach((story, index) => {
    const card = document.createElement('div');
    card.className = 'story-card';
    card.innerHTML = `
        <img src="${story.cover}" alt="${story.title}">
        <h3>${story.title}</h3>
    `;
    card.addEventListener('click', () => openStory(index));
    library.appendChild(card);
});

// Open story
function openStory(index) {
    flipbook.innerHTML = stories[index].pages.map(page => `
        <div class="page">
            <img src="${page.image}" alt="Page Image">
            <p>${page.text.replace('[Your Name]', prompt("Enter your name:") || 'Adventurer')}</p>
        </div>
    `).join('');
    flipbookContainer.style.display = 'flex';
    backgroundMusic.play();
}

// Navigation
document.getElementById('next-page').addEventListener('click', () => {
    flipbook.scrollBy({ left: window.innerWidth, behavior: 'smooth' });
});

document.getElementById('prev-page').addEventListener('click', () => {
    flipbook.scrollBy({ left: -window.innerWidth, behavior: 'smooth' });
});

// Close book
document.getElementById('close-book').addEventListener('click', () => {
    flipbookContainer.style.display = 'none';
    backgroundMusic.pause();
});
