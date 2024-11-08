// Function to fetch and render games from GameInfo.json
async function renderGames() {
    try {
        // Fetch the JSON data from the file
        const response = await fetch('GameInfo.json');
        const gameData = await response.json();

        // Get the container to place game cards in
        const gameList = document.getElementById('game-list');

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

            // Add game ID
            const gameIdElement = document.createElement('p');
            gameIdElement.classList.add('game-id');
            gameIdElement.textContent = `ID: ${game.id}`;
            gameInfo.appendChild(gameIdElement);

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
document.addEventListener('DOMContentLoaded', renderGames);
