const stories = [
    {
        title: "The Magical Forest",
        cover: "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?auto=format&fit=crop&w=600",
        pages: [
            { image: "https://images.unsplash.com/photo-1476231682828-37e571bc172f?auto=format&fit=crop&w=600", text: "Once upon a time, in a magical forest..." },
            { image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600", text: "A brave adventurer named [Your Name] appeared..." }
        ]
    },
    {
        title: "Space Explorers",
        cover: "https://images.unsplash.com/photo-1501612780327-45045538702b?auto=format&fit=crop&w=600",
        pages: [
            { image: "https://images.unsplash.com/photo-1464802686167-b939a6910659?auto=format&fit=crop&w=600", text: "Captain [Your Name] steered the spaceship..." },
            { image: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?auto=format&fit=crop&w=600", text: "Through the stars and galaxies..." }
        ]
    },
    // Add more stories here...
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
        <p>Click to read!</p>
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
