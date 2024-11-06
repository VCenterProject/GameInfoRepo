// Function to fetch and render games from GameInfo.json
async function renderGames() {
    try {
        // Fetch the JSON data from the file
        const response = await fetch('https://vcenterproject.github.io/GameInfoRepo/GameInfo.json');
        const gameData = await response.json();

        // Get the container to place game cards in
        const gameList = document.getElementById('game-list'); // Check if this ID exists in your HTML

        // Check if the container is found
        if (!gameList) {
            console.error('Error: Game list container not found.');
            return;
        }

        // Loop through each game in the data
        for (const gameId in gameData) {
            const game = gameData[gameId];

            // Create game card container
            const gameCard = document.createElement('div');
            gameCard.classList.add('game-card');

            // Add game thumbnail
            const thumbnail = document.createElement('img');
            thumbnail.src = game.thumbnail_url;
            thumbnail.alt = game.name;
            gameCard.appendChild(thumbnail);

            // Add game info container
            const gameInfo = document.createElement('div');
            gameInfo.classList.add('game-info');

            // Add game title
            const gameTitle = document.createElement('h2');
            gameTitle.classList.add('game-title');
            gameTitle.textContent = game.name;
            gameInfo.appendChild(gameTitle);

            // Append game info to the card
            gameCard.appendChild(gameInfo);

            // Append game card to the list
            gameList.appendChild(gameCard);
        }
    } catch (error) {
        console.error('Error loading game data:', error);
    }
}

// Call render function on page load
renderGames();
