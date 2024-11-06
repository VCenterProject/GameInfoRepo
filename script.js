// Fetch the game list data from GameInfo.json
fetch('https://vcenterproject.github.io/GameInfoRepo/GameInfo.json')  // Or update this path to match where your file is located
    .then(response => {
        // Check if the response is OK (status 200)
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        // Log the data for debugging
        console.log('Loaded game data:', data);

        // Check if the data is valid and not empty
        if (!data || Object.keys(data).length === 0) {
            throw new Error('Game data is empty or null');
        }

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
    .catch(error => {
        // Handle errors (e.g., network issues, empty data)
        console.error('Error loading game list:', error);

        const galleryContainer = document.getElementById('gallery');
        galleryContainer.innerHTML = '<p>Sorry, we could not load the game data at this time.</p>';
    });
