// Fetch the game list data from GameInfo.json
fetch('GameInfo.json')  // Make sure GameInfo.json is correctly referenced
    .then(response => response.json())
    .then(data => {
        const galleryContainer = document.getElementById('gallery');
        
        // Loop through each game in the data object
        for (const gameId in data) {
            const game = data[gameId];

            // Create a game card
            const gameCard = document.createElement('div');
            gameCard.classList.add('game-card');

            // Thumbnail image
            const gameThumbnail = document.createElement('img');
            gameThumbnail.classList.add('game-thumbnail');
            gameThumbnail.src = game.thumbnail_url;
            gameCard.appendChild(gameThumbnail);

            // Append the game card to the gallery
            galleryContainer.appendChild(gameCard);
        }
    })
    .catch(error => console.error('Error loading game list:', error));
